package io.com.nicee.domain;


import io.com.nicee.dto.UserDTO;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.OffsetDateTime;

@Data
@Entity
@Table(name = "kb_table")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class KbUserVO {
    @GeneratedValue
    @Id
    private Long id;
    private String name;        // 홍길동
    private String etc;       // gildong@gildong.com
    private String phone;       // 연락처
    private String agree;       // Y/N
    private OffsetDateTime reqDatetime;

    @Builder
    public KbUserVO(UserDTO userDTO) {
        this.name = userDTO.getName();
        this.agree = userDTO.getAgree();
        this.etc = userDTO.getEtc();
    }
}
