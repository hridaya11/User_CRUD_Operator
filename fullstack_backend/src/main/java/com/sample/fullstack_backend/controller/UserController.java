package com.sample.fullstack_backend.controller;

import com.sample.fullstack_backend.exception.UserNotFoundException;
import com.sample.fullstack_backend.model.User;
import com.sample.fullstack_backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
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
    @GetMapping("users/{id}")
    User getUserById(@PathVariable Long id){
        return UserRepo.findById(id)
            .orElseThrow(()->new UserNotFoundException(id));
    }
}
