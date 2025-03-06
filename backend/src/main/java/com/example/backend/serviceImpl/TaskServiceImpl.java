package com.example.backend.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Task;
import com.example.backend.repository.TaskRepository;
import com.example.backend.service.TaskService;

@Service
public class TaskServiceImpl implements TaskService {
	
	@Autowired
	private TaskRepository taskRepository;

	@Override
	public List<Task> getAllTasks() {
		return taskRepository.findAll();
	}

	@Override
	public Task addTask(Task task) {
		return taskRepository.save(task);
	}

	@Override
	public void deleteTask(Long id) {
		taskRepository.deleteById(id);
	}

	@Override
	public Task updateTask(Long id, Task newTask) {
	    return taskRepository.findById(id)
	        .map(task -> {
	            task.setTitle(newTask.getTitle());
	            task.setCompleted(newTask.isCompleted());
	            return taskRepository.save(task);
	        })
	        .orElseThrow(() -> new RuntimeException("Task not found"));
	}
}
