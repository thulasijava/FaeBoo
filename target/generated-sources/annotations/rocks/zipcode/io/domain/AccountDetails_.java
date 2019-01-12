package rocks.zipcode.io.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(AccountDetails.class)
public abstract class AccountDetails_ {

	public static volatile SingularAttribute<AccountDetails, String> phoneNumber;
	public static volatile SingularAttribute<AccountDetails, String> securityQuestion;
	public static volatile SingularAttribute<AccountDetails, String> securityAnswer;
	public static volatile SingularAttribute<AccountDetails, User> userAccount;
	public static volatile SingularAttribute<AccountDetails, Long> id;

}

