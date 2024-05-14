package io.com.nicee.repository;

import io.com.nicee.domain.KbUserVO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KbUserRepository extends JpaRepository<KbUserVO, Long> {
}
