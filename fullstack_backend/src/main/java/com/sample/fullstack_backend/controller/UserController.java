package com.sample.fullstack_backend.controller;

import com.sample.fullstack_backend.model.User;
import com.sample.fullstack_backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserRepo UserRepo;

    @PostMapping("/users")
    User newUser(@RequestBody User newUser){
        return UserRepo.save(newUser);
    }
    @GetMapping("/users")
    List<User> getAllUsers()
    {return UserRepo.findAll();
      }
}
