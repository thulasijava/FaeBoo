package rocks.zipcode.io.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Post.class)
public abstract class Post_ {

	public static volatile SingularAttribute<Post, User> owner;
	public static volatile SingularAttribute<Post, Long> dislikes;
	public static volatile SingularAttribute<Post, Long> id;
	public static volatile SingularAttribute<Post, Long> numberOfComments;
	public static volatile SingularAttribute<Post, String> content;
	public static volatile SingularAttribute<Post, Long> likes;

}

