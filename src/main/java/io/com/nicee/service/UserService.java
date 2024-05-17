package io.com.nicee.service;

import io.com.nicee.domain.KbUserVO;
import io.com.nicee.domain.ShUserVO;
import io.com.nicee.dto.UserDTO;
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
    public void userInfoSave(UserDTO userDTO) {
        //개인 정보 동의 여부 확인
        checkAgree(userDTO.getAgree());
        //은행 타입 확인
        checkType(userDTO.getType());

    }

    private void kbSave(UserDTO userDTO) {
        //타입 별 은행 리포지토리에 저장
        KbUserVO kbUserVO = KbUserVO.builder().userDTO(userDTO).build();
        kbUserRepository.save(kbUserVO);
    }

    private void checkAgree(String agree) {
        if (agree.equalsIgnoreCase("N")) {
            throw new RuntimeException("개인 정보 이용 미동의");
        }
    }

    private void checkType(String type) {
        //은행 타입 코드 검증

    }
}
