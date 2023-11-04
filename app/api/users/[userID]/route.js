import User from '@/models/userModel';
import { NextResponse } from 'next/server';

// API route to get a user from database and return as JSON
// GET /api/users/:id

export async function GET(request, { params }) {
    const { userID } = params;

    try {
        const user = await User.findOne({ _id: userID });
        return NextResponse.json(user, {
            message: `User with id ${userID} found`,
            success: true,
            status: 200,
        });
    } catch (error) {
        return NextResponse.json({
            message: `User with id ${userID} not found`,
            success: false,
            status: 404,
        });
    }
}

// API route to delete a user from database and return as JSON
// DELETE /api/users/:id

export async function DELETE(request, { params }) {
    const { userID } = params;

    try {
        await User.deleteOne({ _id: userID });
        return NextResponse.json({
            message: `User with id ${userID} deleted successfully`,
            success: true,
            status: 200,
        });
    } catch (error) {
        return NextResponse.json({
            message: `User with id ${userID} not found`,
            success: false,
            status: 404,
        });
    }
}

// API route to update a user from database and return as JSON
// PUT /api/users/:id

export async function PUT(request, { params }) {
    const { userID } = params;
    const { name, email, password } = await request.json();

    try {
        await User.updateOne(
            { _id: userID },
            {
                name,
                email,
                password,
            }
        );
        return NextResponse.json({
            message: `User with id ${userID} updated successfully`,
            success: true,
            status: 200,
        });
    } catch (error) {
        return NextResponse.json({
            message: `User with id ${userID} not found`,
            success: false,
            status: 404,
        });
    }
}
