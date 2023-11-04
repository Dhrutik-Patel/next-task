import Task from '@/models/taskModel';
import { NextResponse } from 'next/server';

// API route to get all tasks of a user from database and return as JSON
// GET /api/users/:userID/tasks

export async function GET(request, { params }) {
    const { userID } = params;

    try {
        // find all tasks of user
        const tasks = await Task.find({ user: userID });

        return NextResponse.json(tasks, {
            message: 'Tasks found',
            success: true,
            status: 200, // OK
        });
    } catch (error) {
        return NextResponse.error({
            message: error.message,
            success: false,
            status: 500, // Internal Server Error
        });
    }
}
