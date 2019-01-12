package rocks.zipcode.io.web.rest;

import com.codahale.metrics.annotation.Timed;
import rocks.zipcode.io.domain.Friend;
import rocks.zipcode.io.repository.FriendRepository;
import rocks.zipcode.io.web.rest.errors.BadRequestAlertException;
import rocks.zipcode.io.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Friend.
 */
@RestController
@RequestMapping("/api")
public class FriendResource {

    private final Logger log = LoggerFactory.getLogger(FriendResource.class);

    private static final String ENTITY_NAME = "friend";

    private final FriendRepository friendRepository;

    public FriendResource(FriendRepository friendRepository) {
        this.friendRepository = friendRepository;
    }

    /**
     * POST  /friends : Create a new friend.
     *
     * @param friend the friend to create
     * @return the ResponseEntity with status 201 (Created) and with body the new friend, or with status 400 (Bad Request) if the friend has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/friends")
    @Timed
    public ResponseEntity<Friend> createFriend(@RequestBody Friend friend) throws URISyntaxException {
        log.debug("REST request to save Friend : {}", friend);
        if (friend.getId() != null) {
            throw new BadRequestAlertException("A new friend cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Friend result = friendRepository.save(friend);
        return ResponseEntity.created(new URI("/api/friends/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /friends : Updates an existing friend.
     *
     * @param friend the friend to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated friend,
     * or with status 400 (Bad Request) if the friend is not valid,
     * or with status 500 (Internal Server Error) if the friend couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/friends")
    @Timed
    public ResponseEntity<Friend> updateFriend(@RequestBody Friend friend) throws URISyntaxException {
        log.debug("REST request to update Friend : {}", friend);
        if (friend.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Friend result = friendRepository.save(friend);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, friend.getId().toString()))
            .body(result);
    }

    /**
     * GET  /friends : get all the friends.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of friends in body
     */
    @GetMapping("/friends")
    @Timed
    public List<Friend> getAllFriends() {
        log.debug("REST request to get all Friends");
        return friendRepository.findAll();
    }

    /**
     * GET  /friends/:id : get the "id" friend.
     *
     * @param id the id of the friend to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the friend, or with status 404 (Not Found)
     */
    @GetMapping("/friends/{id}")
    @Timed
    public ResponseEntity<Friend> getFriend(@PathVariable Long id) {
        log.debug("REST request to get Friend : {}", id);
        Optional<Friend> friend = friendRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(friend);
    }

    /**
     * DELETE  /friends/:id : delete the "id" friend.
     *
     * @param id the id of the friend to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/friends/{id}")
    @Timed
    public ResponseEntity<Void> deleteFriend(@PathVariable Long id) {
        log.debug("REST request to delete Friend : {}", id);

        friendRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
