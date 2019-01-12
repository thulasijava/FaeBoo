package rocks.zipcode.io.web.rest;

import rocks.zipcode.io.FaeBooApp;

import rocks.zipcode.io.domain.Friend;
import rocks.zipcode.io.repository.FriendRepository;
import rocks.zipcode.io.web.rest.errors.ExceptionTranslator;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;


import static rocks.zipcode.io.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the FriendResource REST controller.
 *
 * @see FriendResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = FaeBooApp.class)
public class FriendResourceIntTest {

    private static final Boolean DEFAULT_TOP_FRIEND = false;
    private static final Boolean UPDATED_TOP_FRIEND = true;

    @Autowired
    private FriendRepository friendRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restFriendMockMvc;

    private Friend friend;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final FriendResource friendResource = new FriendResource(friendRepository);
        this.restFriendMockMvc = MockMvcBuilders.standaloneSetup(friendResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Friend createEntity(EntityManager em) {
        Friend friend = new Friend()
            .topFriend(DEFAULT_TOP_FRIEND);
        return friend;
    }

    @Before
    public void initTest() {
        friend = createEntity(em);
    }

    @Test
    @Transactional
    public void createFriend() throws Exception {
        int databaseSizeBeforeCreate = friendRepository.findAll().size();

        // Create the Friend
        restFriendMockMvc.perform(post("/api/friends")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(friend)))
            .andExpect(status().isCreated());

        // Validate the Friend in the database
        List<Friend> friendList = friendRepository.findAll();
        assertThat(friendList).hasSize(databaseSizeBeforeCreate + 1);
        Friend testFriend = friendList.get(friendList.size() - 1);
        assertThat(testFriend.isTopFriend()).isEqualTo(DEFAULT_TOP_FRIEND);
    }

    @Test
    @Transactional
    public void createFriendWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = friendRepository.findAll().size();

        // Create the Friend with an existing ID
        friend.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restFriendMockMvc.perform(post("/api/friends")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(friend)))
            .andExpect(status().isBadRequest());

        // Validate the Friend in the database
        List<Friend> friendList = friendRepository.findAll();
        assertThat(friendList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllFriends() throws Exception {
        // Initialize the database
        friendRepository.saveAndFlush(friend);

        // Get all the friendList
        restFriendMockMvc.perform(get("/api/friends?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(friend.getId().intValue())))
            .andExpect(jsonPath("$.[*].topFriend").value(hasItem(DEFAULT_TOP_FRIEND.booleanValue())));
    }
    
    @Test
    @Transactional
    public void getFriend() throws Exception {
        // Initialize the database
        friendRepository.saveAndFlush(friend);

        // Get the friend
        restFriendMockMvc.perform(get("/api/friends/{id}", friend.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(friend.getId().intValue()))
            .andExpect(jsonPath("$.topFriend").value(DEFAULT_TOP_FRIEND.booleanValue()));
    }

    @Test
    @Transactional
    public void getNonExistingFriend() throws Exception {
        // Get the friend
        restFriendMockMvc.perform(get("/api/friends/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateFriend() throws Exception {
        // Initialize the database
        friendRepository.saveAndFlush(friend);

        int databaseSizeBeforeUpdate = friendRepository.findAll().size();

        // Update the friend
        Friend updatedFriend = friendRepository.findById(friend.getId()).get();
        // Disconnect from session so that the updates on updatedFriend are not directly saved in db
        em.detach(updatedFriend);
        updatedFriend
            .topFriend(UPDATED_TOP_FRIEND);

        restFriendMockMvc.perform(put("/api/friends")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedFriend)))
            .andExpect(status().isOk());

        // Validate the Friend in the database
        List<Friend> friendList = friendRepository.findAll();
        assertThat(friendList).hasSize(databaseSizeBeforeUpdate);
        Friend testFriend = friendList.get(friendList.size() - 1);
        assertThat(testFriend.isTopFriend()).isEqualTo(UPDATED_TOP_FRIEND);
    }

    @Test
    @Transactional
    public void updateNonExistingFriend() throws Exception {
        int databaseSizeBeforeUpdate = friendRepository.findAll().size();

        // Create the Friend

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restFriendMockMvc.perform(put("/api/friends")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(friend)))
            .andExpect(status().isBadRequest());

        // Validate the Friend in the database
        List<Friend> friendList = friendRepository.findAll();
        assertThat(friendList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteFriend() throws Exception {
        // Initialize the database
        friendRepository.saveAndFlush(friend);

        int databaseSizeBeforeDelete = friendRepository.findAll().size();

        // Get the friend
        restFriendMockMvc.perform(delete("/api/friends/{id}", friend.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Friend> friendList = friendRepository.findAll();
        assertThat(friendList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Friend.class);
        Friend friend1 = new Friend();
        friend1.setId(1L);
        Friend friend2 = new Friend();
        friend2.setId(friend1.getId());
        assertThat(friend1).isEqualTo(friend2);
        friend2.setId(2L);
        assertThat(friend1).isNotEqualTo(friend2);
        friend1.setId(null);
        assertThat(friend1).isNotEqualTo(friend2);
    }
}
