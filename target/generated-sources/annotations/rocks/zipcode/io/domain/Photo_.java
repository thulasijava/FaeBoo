package rocks.zipcode.io.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Photo.class)
public abstract class Photo_ {

	public static volatile SetAttribute<Photo, Album> albums;
	public static volatile SingularAttribute<Photo, Long> size;
	public static volatile SingularAttribute<Photo, Post> post;
	public static volatile SingularAttribute<Photo, String> imageURL;
	public static volatile SingularAttribute<Photo, Long> id;

}

