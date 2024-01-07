
package com.Bhoomika.TaskManagementSystem;
import com.Bhoomika.TaskManagementSystem.service.TaskService;
import com.Bhoomika.TaskManagementSystem.repository.TaskRepository;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

//import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "tasks")
public class Task {
    // Getters and Setters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private boolean completed;

    // Constructors
    public Task() {
        // Default constructor
    }

    public Task(String title, String description, boolean completed) {
        this.title = title;
        this.description = description;
        this.completed = completed;
    }

    // toString method for easy logging
    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", completed=" + completed +
                '}';
    }
}
