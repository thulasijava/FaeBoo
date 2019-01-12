package rocks.zipcode.io.web.rest;

import rocks.zipcode.io.FaeBooApp;

import rocks.zipcode.io.domain.AccountDetails;
import rocks.zipcode.io.repository.AccountDetailsRepository;
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
 * Test class for the AccountDetailsResource REST controller.
 *
 * @see AccountDetailsResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = FaeBooApp.class)
public class AccountDetailsResourceIntTest {

    private static final String DEFAULT_SECURITY_QUESTION = "AAAAAAAAAA";
    private static final String UPDATED_SECURITY_QUESTION = "BBBBBBBBBB";

    private static final String DEFAULT_SECURITY_ANSWER = "AAAAAAAAAA";
    private static final String UPDATED_SECURITY_ANSWER = "BBBBBBBBBB";

    private static final String DEFAULT_PHONE_NUMBER = "AAAAAAAAAA";
    private static final String UPDATED_PHONE_NUMBER = "BBBBBBBBBB";

    @Autowired
    private AccountDetailsRepository accountDetailsRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restAccountDetailsMockMvc;

    private AccountDetails accountDetails;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final AccountDetailsResource accountDetailsResource = new AccountDetailsResource(accountDetailsRepository);
        this.restAccountDetailsMockMvc = MockMvcBuilders.standaloneSetup(accountDetailsResource)
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
    public static AccountDetails createEntity(EntityManager em) {
        AccountDetails accountDetails = new AccountDetails()
            .securityQuestion(DEFAULT_SECURITY_QUESTION)
            .securityAnswer(DEFAULT_SECURITY_ANSWER)
            .phoneNumber(DEFAULT_PHONE_NUMBER);
        return accountDetails;
    }

    @Before
    public void initTest() {
        accountDetails = createEntity(em);
    }

    @Test
    @Transactional
    public void createAccountDetails() throws Exception {
        int databaseSizeBeforeCreate = accountDetailsRepository.findAll().size();

        // Create the AccountDetails
        restAccountDetailsMockMvc.perform(post("/api/account-details")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(accountDetails)))
            .andExpect(status().isCreated());

        // Validate the AccountDetails in the database
        List<AccountDetails> accountDetailsList = accountDetailsRepository.findAll();
        assertThat(accountDetailsList).hasSize(databaseSizeBeforeCreate + 1);
        AccountDetails testAccountDetails = accountDetailsList.get(accountDetailsList.size() - 1);
        assertThat(testAccountDetails.getSecurityQuestion()).isEqualTo(DEFAULT_SECURITY_QUESTION);
        assertThat(testAccountDetails.getSecurityAnswer()).isEqualTo(DEFAULT_SECURITY_ANSWER);
        assertThat(testAccountDetails.getPhoneNumber()).isEqualTo(DEFAULT_PHONE_NUMBER);
    }

    @Test
    @Transactional
    public void createAccountDetailsWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = accountDetailsRepository.findAll().size();

        // Create the AccountDetails with an existing ID
        accountDetails.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restAccountDetailsMockMvc.perform(post("/api/account-details")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(accountDetails)))
            .andExpect(status().isBadRequest());

        // Validate the AccountDetails in the database
        List<AccountDetails> accountDetailsList = accountDetailsRepository.findAll();
        assertThat(accountDetailsList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllAccountDetails() throws Exception {
        // Initialize the database
        accountDetailsRepository.saveAndFlush(accountDetails);

        // Get all the accountDetailsList
        restAccountDetailsMockMvc.perform(get("/api/account-details?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(accountDetails.getId().intValue())))
            .andExpect(jsonPath("$.[*].securityQuestion").value(hasItem(DEFAULT_SECURITY_QUESTION.toString())))
            .andExpect(jsonPath("$.[*].securityAnswer").value(hasItem(DEFAULT_SECURITY_ANSWER.toString())))
            .andExpect(jsonPath("$.[*].phoneNumber").value(hasItem(DEFAULT_PHONE_NUMBER.toString())));
    }
    
    @Test
    @Transactional
    public void getAccountDetails() throws Exception {
        // Initialize the database
        accountDetailsRepository.saveAndFlush(accountDetails);

        // Get the accountDetails
        restAccountDetailsMockMvc.perform(get("/api/account-details/{id}", accountDetails.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(accountDetails.getId().intValue()))
            .andExpect(jsonPath("$.securityQuestion").value(DEFAULT_SECURITY_QUESTION.toString()))
            .andExpect(jsonPath("$.securityAnswer").value(DEFAULT_SECURITY_ANSWER.toString()))
            .andExpect(jsonPath("$.phoneNumber").value(DEFAULT_PHONE_NUMBER.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingAccountDetails() throws Exception {
        // Get the accountDetails
        restAccountDetailsMockMvc.perform(get("/api/account-details/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateAccountDetails() throws Exception {
        // Initialize the database
        accountDetailsRepository.saveAndFlush(accountDetails);

        int databaseSizeBeforeUpdate = accountDetailsRepository.findAll().size();

        // Update the accountDetails
        AccountDetails updatedAccountDetails = accountDetailsRepository.findById(accountDetails.getId()).get();
        // Disconnect from session so that the updates on updatedAccountDetails are not directly saved in db
        em.detach(updatedAccountDetails);
        updatedAccountDetails
            .securityQuestion(UPDATED_SECURITY_QUESTION)
            .securityAnswer(UPDATED_SECURITY_ANSWER)
            .phoneNumber(UPDATED_PHONE_NUMBER);

        restAccountDetailsMockMvc.perform(put("/api/account-details")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedAccountDetails)))
            .andExpect(status().isOk());

        // Validate the AccountDetails in the database
        List<AccountDetails> accountDetailsList = accountDetailsRepository.findAll();
        assertThat(accountDetailsList).hasSize(databaseSizeBeforeUpdate);
        AccountDetails testAccountDetails = accountDetailsList.get(accountDetailsList.size() - 1);
        assertThat(testAccountDetails.getSecurityQuestion()).isEqualTo(UPDATED_SECURITY_QUESTION);
        assertThat(testAccountDetails.getSecurityAnswer()).isEqualTo(UPDATED_SECURITY_ANSWER);
        assertThat(testAccountDetails.getPhoneNumber()).isEqualTo(UPDATED_PHONE_NUMBER);
    }

    @Test
    @Transactional
    public void updateNonExistingAccountDetails() throws Exception {
        int databaseSizeBeforeUpdate = accountDetailsRepository.findAll().size();

        // Create the AccountDetails

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restAccountDetailsMockMvc.perform(put("/api/account-details")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(accountDetails)))
            .andExpect(status().isBadRequest());

        // Validate the AccountDetails in the database
        List<AccountDetails> accountDetailsList = accountDetailsRepository.findAll();
        assertThat(accountDetailsList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteAccountDetails() throws Exception {
        // Initialize the database
        accountDetailsRepository.saveAndFlush(accountDetails);

        int databaseSizeBeforeDelete = accountDetailsRepository.findAll().size();

        // Get the accountDetails
        restAccountDetailsMockMvc.perform(delete("/api/account-details/{id}", accountDetails.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<AccountDetails> accountDetailsList = accountDetailsRepository.findAll();
        assertThat(accountDetailsList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(AccountDetails.class);
        AccountDetails accountDetails1 = new AccountDetails();
        accountDetails1.setId(1L);
        AccountDetails accountDetails2 = new AccountDetails();
        accountDetails2.setId(accountDetails1.getId());
        assertThat(accountDetails1).isEqualTo(accountDetails2);
        accountDetails2.setId(2L);
        assertThat(accountDetails1).isNotEqualTo(accountDetails2);
        accountDetails1.setId(null);
        assertThat(accountDetails1).isNotEqualTo(accountDetails2);
    }
}
