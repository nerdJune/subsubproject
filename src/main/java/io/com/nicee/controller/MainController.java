package io.com.nicee.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class MainController {

    @GetMapping("/")
    public String home() {
        return "home";
    }

    @GetMapping("/kb")
    public String kb() {
        return "kb";
    }

    @GetMapping("/sh")
    public String sh() {
        return "sh";
    }

    @GetMapping("/policy")
    public String policy() {
        return "/policy/policy";
    }

}
