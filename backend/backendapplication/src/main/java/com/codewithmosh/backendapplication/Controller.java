package com.codewithmosh.backendapplication;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("/api/test")
    public String test() {
        return "This is from Springboot";
    }

}
