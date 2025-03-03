package com.codewithmosh.backendapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("/api/test")
    // create a method
    public String test() {
        return "This is from Springboot";
    }




}
