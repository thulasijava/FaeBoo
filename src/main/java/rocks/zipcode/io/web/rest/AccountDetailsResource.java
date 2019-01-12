package rocks.zipcode.io.web.rest;

import com.codahale.metrics.annotation.Timed;
import rocks.zipcode.io.domain.AccountDetails;
import rocks.zipcode.io.repository.AccountDetailsRepository;
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
 * REST controller for managing AccountDetails.
 */
@RestController
@RequestMapping("/api")
public class AccountDetailsResource {

    private final Logger log = LoggerFactory.getLogger(AccountDetailsResource.class);

    private static final String ENTITY_NAME = "accountDetails";

    private final AccountDetailsRepository accountDetailsRepository;

    public AccountDetailsResource(AccountDetailsRepository accountDetailsRepository) {
        this.accountDetailsRepository = accountDetailsRepository;
    }

    /**
     * POST  /account-details : Create a new accountDetails.
     *
     * @param accountDetails the accountDetails to create
     * @return the ResponseEntity with status 201 (Created) and with body the new accountDetails, or with status 400 (Bad Request) if the accountDetails has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/account-details")
    @Timed
    public ResponseEntity<AccountDetails> createAccountDetails(@RequestBody AccountDetails accountDetails) throws URISyntaxException {
        log.debug("REST request to save AccountDetails : {}", accountDetails);
        if (accountDetails.getId() != null) {
            throw new BadRequestAlertException("A new accountDetails cannot already have an ID", ENTITY_NAME, "idexists");
        }
        AccountDetails result = accountDetailsRepository.save(accountDetails);
        return ResponseEntity.created(new URI("/api/account-details/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /account-details : Updates an existing accountDetails.
     *
     * @param accountDetails the accountDetails to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated accountDetails,
     * or with status 400 (Bad Request) if the accountDetails is not valid,
     * or with status 500 (Internal Server Error) if the accountDetails couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/account-details")
    @Timed
    public ResponseEntity<AccountDetails> updateAccountDetails(@RequestBody AccountDetails accountDetails) throws URISyntaxException {
        log.debug("REST request to update AccountDetails : {}", accountDetails);
        if (accountDetails.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        AccountDetails result = accountDetailsRepository.save(accountDetails);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, accountDetails.getId().toString()))
            .body(result);
    }

    /**
     * GET  /account-details : get all the accountDetails.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of accountDetails in body
     */
    @GetMapping("/account-details")
    @Timed
    public List<AccountDetails> getAllAccountDetails() {
        log.debug("REST request to get all AccountDetails");
        return accountDetailsRepository.findAll();
    }

    /**
     * GET  /account-details/:id : get the "id" accountDetails.
     *
     * @param id the id of the accountDetails to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the accountDetails, or with status 404 (Not Found)
     */
    @GetMapping("/account-details/{id}")
    @Timed
    public ResponseEntity<AccountDetails> getAccountDetails(@PathVariable Long id) {
        log.debug("REST request to get AccountDetails : {}", id);
        Optional<AccountDetails> accountDetails = accountDetailsRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(accountDetails);
    }

    /**
     * DELETE  /account-details/:id : delete the "id" accountDetails.
     *
     * @param id the id of the accountDetails to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/account-details/{id}")
    @Timed
    public ResponseEntity<Void> deleteAccountDetails(@PathVariable Long id) {
        log.debug("REST request to delete AccountDetails : {}", id);

        accountDetailsRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
