'use client';

import { useEffect, useState } from 'react';
import TaskCard from '../taskcard/TaskCard';
import { api } from '@/app/api/api';

interface Task {
  id: string;
  title: string;
  color: string;
  completed: boolean;
  createdAt: string;
}

interface TasksResponse {
  data: Task[];
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await api.getTasks() as TasksResponse;
      if (response.data && Array.isArray(response.data)) {
        setTasks(response.data);
      } else {
        console.error('Unexpected response format:', response);
        setTasks([]);
        setError('Invalid data format received from server');
      }
    } catch (error) {
      console.error('Failed to load tasks:', error);
      setTasks([]);
      setError('Failed to load tasks');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const handleToggleComplete = async (id: string) => {
    try {
      const task = tasks.find(t => t.id === id);
      if (task) {
        const updatedTask = { ...task, completed: !task.completed };
        await api.updateTask(id, updatedTask);
        setTasks(tasks.map(t => t.id === id ? updatedTask : t));
      }
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col gap-3 w-full items-center mt-4">
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            {...task}
            onDelete={() => handleDelete(task.id)}
            onToggleComplete={() => handleToggleComplete(task.id)}
          />
        ))
      ) : (
        <div className="text-gray-300">No tasks available</div>
      )}
    </div>
  );
};

export default TaskList; 