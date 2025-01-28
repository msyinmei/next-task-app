const API_BASE_URL = '/api';

export interface Task {
    id?: string;
    title: string;
    color: string;
    completed: boolean;
    // add other task properties
  }

export const api = {
  // Tasks
  async getTasks() {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw new Error('Failed to fetch tasks. Is the backend server running?');
    }
  },

  async createTask(task: any) {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    } catch (error) {
      console.error('Error creating task:', error);
      throw new Error('Failed to create task. Is the backend server running?');
    }
  },

  // Add other API methods here
  async updateTask(id: string, task: any) {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error('Failed to update task');
    return response.json();
  },

  async deleteTask(id: string) {
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete task');
    return response.json();
  },
};
