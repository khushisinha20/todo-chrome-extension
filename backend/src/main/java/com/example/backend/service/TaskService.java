package com.example.backend.service;

import java.util.List;

import com.example.backend.model.Task;

public interface TaskService {
	List<Task> getAllTasks();
	Task addTask(Task task);
	void deleteTask(Long id);
	Task updateTask(Long id, Task newTask);
}
