package rocks.zipcode.io.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Friend.
 */
@Entity
@Table(name = "friend")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Friend implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "top_friend")
    private Boolean topFriend;

    @ManyToOne
    @JsonIgnoreProperties("")
    private User user;

    @ManyToOne
    @JsonIgnoreProperties("")
    private User friend;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean isTopFriend() {
        return topFriend;
    }

    public Friend topFriend(Boolean topFriend) {
        this.topFriend = topFriend;
        return this;
    }

    public void setTopFriend(Boolean topFriend) {
        this.topFriend = topFriend;
    }

    public User getUser() {
        return user;
    }

    public Friend user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public User getFriend() {
        return friend;
    }

    public Friend friend(User user) {
        this.friend = user;
        return this;
    }

    public void setFriend(User user) {
        this.friend = user;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Friend friend = (Friend) o;
        if (friend.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), friend.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Friend{" +
            "id=" + getId() +
            ", topFriend='" + isTopFriend() + "'" +
            "}";
    }
}
