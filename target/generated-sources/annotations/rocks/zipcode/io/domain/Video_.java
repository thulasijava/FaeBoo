package rocks.zipcode.io.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Video.class)
public abstract class Video_ {

	public static volatile SingularAttribute<Video, String> videoURL;
	public static volatile SingularAttribute<Video, Long> size;
	public static volatile SingularAttribute<Video, Post> post;
	public static volatile SingularAttribute<Video, Long> id;

}

