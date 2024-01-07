package com.Bhoomika.TaskManagementSystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.Bhoomika.TaskManagementSystem.repository")
@EntityScan("com.Bhoomika.TaskManagementSystem")
@ComponentScan(basePackages = {
		"com.Bhoomika.TaskManagementSystem",
		"com.Bhoomika.TaskManagementSystem.repository",
		"com.Bhoomika.TaskManagementSystem.controller",
		"com.Bhoomika.TaskManagementSystem.service"
})

public class TaskManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskManagementSystemApplication.class, args);
	}

}
