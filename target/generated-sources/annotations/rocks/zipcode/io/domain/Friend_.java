package rocks.zipcode.io.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Friend.class)
public abstract class Friend_ {

	public static volatile SingularAttribute<Friend, User> friend;
	public static volatile SingularAttribute<Friend, Boolean> topFriend;
	public static volatile SingularAttribute<Friend, Long> id;
	public static volatile SingularAttribute<Friend, User> user;

}

