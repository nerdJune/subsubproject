package io.com.nicee.service;

import io.com.nicee.domain.KbUserVO;
import io.com.nicee.domain.ShUserVO;
import io.com.nicee.repository.KbUserRepository;
import io.com.nicee.repository.ShUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final KbUserRepository kbUserRepository;
    private final ShUserRepository shUserRepository;

    //국민은행 이벤트 신청자 저장
    public void kbSave(KbUserVO kbUserVO) {
        kbUserRepository.save(kbUserVO);
    }

    public void shSave(ShUserVO shUserVO) {
        shUserRepository.save(shUserVO);
    }

    public void wrSave(KbUserVO kbUserVO) {
        kbUserRepository.save(kbUserVO);
    }

    private void checkInfo(KbUserVO kbUserVO) {

    }
}
