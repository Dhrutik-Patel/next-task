'use client';

import React, { useRef, useState } from 'react';
import AddTaskImage from '../../assets/images/undraw_add_tasks_re_s5yj.svg';
import Image from 'next/image';
import { addTask } from '@/services/taskServices';

const TaskForm = () => {
    const formRef = useRef(null);

    const [task, setTask] = useState({
        name: '',
        description: '',
        completed: false,
        dueDate: '',
        priority: 'Medium',
        tags: '',
        userId: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Split the tags string into an array
        const tags = task.tags.split(',').map((tag) => tag.trim());

        // Use the current user's ID
        const userId = '6545d992afd5cd20d672f070';

        // Create the task object
        const newTask = {
            ...task,
            tags,
            userId,
        };

        // Send the task object to the API
        addTask(newTask);

        // Reset the form
        formRef.current.reset();

        // Reset the state
        setTask({
            name: '',
            description: '',
            completed: false,
            dueDate: '',
            priority: 'Medium',
            tags: '',
            userId: '',
        });
    };

    return (
        <div className='flex container mx-auto p-5 my-10'>
            <div className='w-2/3 pr-4'>
                {/* Form */}
                <div className='bg-white rounded'>
                    <h2 className='text-2xl font-semibold p-7'>Add Task</h2>
                    <form onSubmit={handleSubmit} ref={formRef} className='p-7'>
                        <div className='mb-4 text-base font-medium'>
                            <label
                                htmlFor='name'
                                className='block text-gray-600 mb-2'
                            >
                                Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={task.name}
                                onChange={handleChange}
                                className='border p-2 w-full'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='description'
                                className='block text-gray-600 mb-2'
                            >
                                Description
                            </label>
                            <textarea
                                id='description'
                                name='description'
                                value={task.description}
                                onChange={handleChange}
                                className='border p-2 w-full'
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='dueDate'
                                className='block text-gray-600 mb-2'
                            >
                                Due Date
                            </label>
                            <input
                                type='date'
                                id='dueDate'
                                name='dueDate'
                                value={task.dueDate}
                                onChange={handleChange}
                                className='border p-2'
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='priority'
                                className='block text-gray-600 mb-2'
                            >
                                Priority
                            </label>
                            <select
                                id='priority'
                                name='priority'
                                value={task.priority}
                                onChange={handleChange}
                                className='border p-2 w-full'
                            >
                                <option value='High'>High</option>
                                <option value='Medium'>Medium</option>
                                <option value='Low'>Low</option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='tags'
                                className='block text-gray-600 mb-2'
                            >
                                Tags (comma-separated)
                            </label>
                            <input
                                type='text'
                                id='tags'
                                name='tags'
                                value={task.tags}
                                onChange={handleChange}
                                className='border p-2 w-full'
                            />
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='completed'
                                className='block text-gray-600 mb-2'
                            >
                                <input
                                    type='checkbox'
                                    id='completed'
                                    name='completed'
                                    checked={task.completed}
                                    onChange={(e) =>
                                        setTask({
                                            ...task,
                                            completed: e.target.checked,
                                        })
                                    }
                                />{' '}
                                Completed
                            </label>
                        </div>
                        <button
                            type='submit'
                            className='text-lg font-semibold px-5 py-2 bg-orange-500 rounded hover:bg-orange-600 hover:text-white transition-all duration-500'
                        >
                            Add Task
                        </button>
                        <button
                            type='reset'
                            className='mx-5 text-lg font-semibold px-5 py-2 bg-white rounded hover:bg-orange-500 transition-all duration-500 border-orange-500 border-2 hover:text-white'
                        >
                            Reset
                        </button>
                    </form>
                </div>
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                {/* Image */}
                <Image src={AddTaskImage} alt='Add Task' />
            </div>
        </div>
    );
};

export default TaskForm;
