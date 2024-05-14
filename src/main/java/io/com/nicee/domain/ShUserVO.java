package io.com.nicee.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.OffsetDateTime;

@Data
@Entity
@Table(name = "sh_table")
public class ShUserVO {
    @GeneratedValue
    @Id
    private Long id;
    private String name;        // 홍길동
    private String email;       // gildong@gildong.com
    private String agree;       // Y/N
    private OffsetDateTime reqDatetime;
}
