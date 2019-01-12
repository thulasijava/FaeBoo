package rocks.zipcode.io.repository;

import rocks.zipcode.io.domain.AccountDetails;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the AccountDetails entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AccountDetailsRepository extends JpaRepository<AccountDetails, Long> {

}
