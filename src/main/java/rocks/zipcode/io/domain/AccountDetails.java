package rocks.zipcode.io.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A AccountDetails.
 */
@Entity
@Table(name = "account_details")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class AccountDetails implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "security_question")
    private String securityQuestion;

    @Column(name = "security_answer")
    private String securityAnswer;

    @Column(name = "phone_number")
    private String phoneNumber;

    @OneToOne    @JoinColumn(unique = true)
    private User userAccount;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSecurityQuestion() {
        return securityQuestion;
    }

    public AccountDetails securityQuestion(String securityQuestion) {
        this.securityQuestion = securityQuestion;
        return this;
    }

    public void setSecurityQuestion(String securityQuestion) {
        this.securityQuestion = securityQuestion;
    }

    public String getSecurityAnswer() {
        return securityAnswer;
    }

    public AccountDetails securityAnswer(String securityAnswer) {
        this.securityAnswer = securityAnswer;
        return this;
    }

    public void setSecurityAnswer(String securityAnswer) {
        this.securityAnswer = securityAnswer;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public AccountDetails phoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public User getUserAccount() {
        return userAccount;
    }

    public AccountDetails userAccount(User user) {
        this.userAccount = user;
        return this;
    }

    public void setUserAccount(User user) {
        this.userAccount = user;
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
        AccountDetails accountDetails = (AccountDetails) o;
        if (accountDetails.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), accountDetails.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "AccountDetails{" +
            "id=" + getId() +
            ", securityQuestion='" + getSecurityQuestion() + "'" +
            ", securityAnswer='" + getSecurityAnswer() + "'" +
            ", phoneNumber='" + getPhoneNumber() + "'" +
            "}";
    }
}
