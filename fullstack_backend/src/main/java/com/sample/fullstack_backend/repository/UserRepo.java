package com.sample.fullstack_backend.repository;

import com.sample.fullstack_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
public interface UserRepo extends JpaRepository<User, Long> {


}
