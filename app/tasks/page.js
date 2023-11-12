'use client';

import { getTasks } from '@/services/taskServices';
import React, { useEffect, useState } from 'react';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then((tasks) => setTasks(tasks));
    }, []);

    return (
        <div className='container mx-auto p-4'>
            <div className='flex justify-between items-center mb-4'>
                <h1 className='text-2xl font-semibold'>Tasks</h1>
                <a
                    className='text-lg font-semibold px-5 py-2 bg-orange-500 rounded hover:bg-orange-600 hover:text-white transition-all duration-500'
                    href='/tasks/add'
                >
                    Add Task
                </a>
            </div>
            <div className='grid gap-4'>
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-lg shadow-md p-4'
                    >
                        <h2 className='text-xl font-semibold'>{task.name}</h2>
                        <p className='text-gray-600'>{task.description}</p>
                        <p
                            className={
                                task.completed
                                    ? 'text-green-600'
                                    : 'text-red-600'
                            }
                        >
                            {task.completed ? 'Completed' : 'Not Completed'}
                        </p>
                        <p className='text-gray-600'>
                            Due Date: {task.dueDate}
                        </p>
                        <p className='text-gray-600'>
                            Priority: {task.priority}
                        </p>
                        <div className='mt-2'>
                            {task.tags.map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className='mr-2 p-1 bg-gray-200 text-gray-700 rounded'
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tasks;
