package io.com.nicee.controller;

import io.com.nicee.domain.KbUserVO;
import io.com.nicee.domain.ShUserVO;
import io.com.nicee.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/kbSave")
    public void kbSave(@RequestBody KbUserVO kbUserVO) {
        System.out.println("kbSave Test");
        userService.kbSave(kbUserVO);
    }

    @PostMapping("/shSave")
    public void shSave(@RequestBody ShUserVO shUserVO) {
        System.out.println("shSave Test");
        userService.shSave(shUserVO);
    }
}
