package io.com.nicee.repository;

import io.com.nicee.domain.KbUserVO;
import io.com.nicee.domain.ShUserVO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShUserRepository extends JpaRepository<ShUserVO, Long> {
}
