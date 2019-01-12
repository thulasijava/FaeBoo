package rocks.zipcode.io.repository;

import rocks.zipcode.io.domain.Album;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the Album entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AlbumRepository extends JpaRepository<Album, Long> {

    @Query("select album from Album album where album.owner.login = ?#{principal.username}")
    List<Album> findByOwnerIsCurrentUser();

}
