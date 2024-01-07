

package com.Bhoomika.TaskManagementSystem.repository;
import com.Bhoomika.TaskManagementSystem.service.TaskService;
import com.Bhoomika.TaskManagementSystem.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    // You can add custom query methods here if needed
}
