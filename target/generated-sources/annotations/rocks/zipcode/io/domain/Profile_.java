package rocks.zipcode.io.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Profile.class)
public abstract class Profile_ {

	public static volatile SingularAttribute<Profile, Boolean> accessible;
	public static volatile SingularAttribute<Profile, String> bio;
	public static volatile SingularAttribute<Profile, Long> id;
	public static volatile SingularAttribute<Profile, User> userProfile;

}

