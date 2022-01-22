package entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;

@Getter
@Setter
@Entity
@Table(name = "USER")

public class User {

    @Id
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "generator")
//    @SequenceGenerator(name = "generator", sequenceName = "Sequence")
    private Long Id;

//    @Column(name="Username")
    private String Username;

    private String Password;

    @Temporal(TemporalType.TIMESTAMP)
    private Date CreatedOn;

    @Temporal(TemporalType.TIMESTAMP)
    private Date LastLogin;

    @Transient
    private int version;
}
