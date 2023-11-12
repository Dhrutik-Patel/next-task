import { connectDB } from '@/helper/database';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

connectDB();

// API route to get all users from database and return as JSON
// GET /api/users

export async function GET(request, response) {
    try {
        const users = await User.find({});
        return NextResponse.json(users, {
            message: 'Users retrieved successfully',
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

// API route to create a new user in database and return as JSON
// POST /api/users

export async function POST(request, response) {
    const { name, email, password } = await request.json();
    const user = await new User({
        name,
        email,
        password,
    });

    // Encrypt password before saving to database
    user.password = await bcrypt.hash(user.password, 10);

    try {
        const createdUser = await user.save();
        return NextResponse.json(createdUser, {
            message: 'User created successfully',
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
