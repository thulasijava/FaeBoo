package rocks.zipcode.io.repository;

import rocks.zipcode.io.domain.Friend;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the Friend entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FriendRepository extends JpaRepository<Friend, Long> {

    @Query("select friend from Friend friend where friend.user.login = ?#{principal.username}")
    List<Friend> findByUserIsCurrentUser();

    @Query("select friend from Friend friend where friend.friend.login = ?#{principal.username}")
    List<Friend> findByFriendIsCurrentUser();

}
