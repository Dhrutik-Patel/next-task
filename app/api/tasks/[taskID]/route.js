import Task from '@/models/taskModel';
import { NextResponse } from 'next/server';

// API route to get a single task from database and return as JSON
// GET /api/tasks/:taskID

export async function GET(request, { params }) {
    const { taskID } = params;

    try {
        const task = await Task.findOne({ _id: taskID });

        return NextResponse.json(task, {
            message: `Task with id ${taskID} found`,
            success: true,
            status: 200,
        });
    } catch (error) {
        return NextResponse.json({
            message: `Task with id ${userID} not found`,
            success: false,
            status: 404,
        });
    }
}

// API route to update a single task in database and return as JSON
// PUT /api/tasks/:taskID

export async function PUT(request, { params }) {
    const { taskID } = params;
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

    try {
        await Task.updateOne(
            { _id: taskID },
            {
                name,
                description,
                completed,
                dueDate,
                priority,
                tags,
                user,
            }
        );

        return NextResponse.json({
            message: `Task with id ${taskID} updated successfully`,
            success: true,
            status: 200,
        });
    } catch (error) {
        return NextResponse.error({
            message: `Task with id ${taskID} not found`,
            success: false,
            status: 404,
        });
    }
}

// API route to delete a single task from database and return as JSON
// DELETE /api/tasks/:taskID

export async function DELETE(request, { params }) {
    const { taskID } = params;

    try {
        await Task.deleteOne({ _id: taskID });
        return NextResponse.json({
            message: `Task with id ${taskID} deleted successfully`,
            success: true,
            status: 200,
        });
    } catch (error) {
        return NextResponse.json({
            message: `Task with id ${taskID} not found`,
            success: false,
            status: 404,
        });
    }
}
