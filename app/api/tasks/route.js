import { connectDB } from '@/helper/database';
import Task from '@/models/taskModel';
import { NextResponse } from 'next/server';

connectDB();

// API route to get all tasks from database and return as JSON
// GET /api/tasks

export async function GET(request, response) {
    try {
        const tasks = await Task.find({});
        return NextResponse.json(tasks, {
            message: 'Tasks retrieved successfully',
            success: true,
            status: 200,
        });
    } catch (error) {
        return NextResponse.error({
            message: error.message,
            success: false,
            status: 500, // Internal Server Error
        });
    }
}

// API route to create a new task in database and return as JSON
// POST /api/tasks

export async function POST(request, response) {
    const { name, description, completed, dueDate, priority, tags, user } =
        await request.json();

    // Manually check if the priority is valid
    const allowedPriorities = ['High', 'Medium', 'Low'];

    if (!allowedPriorities.includes(priority)) {
        return NextResponse.error({
            message: 'Invalid priority value.',
            success: false,
            status: 400, // Bad Request
        });
    }

    const task = await new Task({
        name,
        description,
        completed,
        dueDate,
        priority,
        tags,
        user,
    });

    try {
        const createdTask = await task.save();
        return NextResponse.json(createdTask, {
            message: 'Task created successfully',
            success: true,
            status: 201,
        });
    } catch (error) {
        return NextResponse.error({
            message: error.message,
            success: false,
            status: 500, // Internal Server Error
        });
    }
}
