"use client";
import Button from "../app/components/button/Button";
import TaskList from '@/app/components/tasklist/TaskList';
import { api, Task } from '../app/api/api';
import Image from 'next/image';

export default function Home() {
  const handleCreateTask = async () => {
    console.log('clicked');
    try {
      const newTask: Task = {
        title: 'New Task',
        color: 'blue',
        completed: false
      };
      await api.createTask(newTask);
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  };
  
  const handleClick = () => {
    handleCreateTask();
  };

  return (
    <main className="flex min-h-screen flex-col items-center overscroll-none">
      <div className="flex">
        <div className="fixed inset-x-0 max-w-max mx-auto -mt-[25px]">
          <Button onClick={handleClick} 
            className="flex items-center justify-center gap-2 top-[200px] text-lg w-[746px] h-[52px]">
            Create Task 
            <Image 
            src="/plus.svg" 
            alt="Plus icon" 
            width={16} 
            height={16}
            />
          </Button>
        </div>
        <div className="mt-[100px]">
        <TaskList />
      </div>
      </div>
    </main>
  );
}
