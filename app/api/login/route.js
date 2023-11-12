import User from '@/models/userModel';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const { connectDB } = require('@/helper/database');

connectDB();

// API route for login page
// POST /api/login

export async function POST(request, response) {
    const { email, password } = await request.json();

    try {
        // Check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('User not found');
        }

        // If user exists, check if password is correct
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);

        if (!isPasswordCorrect) {
            throw new Error('Password is incorrect');
        }

        // If password is correct, create token
        const token = jwt.sign(
            { id: user._id, name: user.name },
            process.env.JWT_SECRET,
            {}
        );

        const response = NextResponse.json({
            message: 'Login successful',
            success: true,
            status: 200, // OK
        });

        response.cookies.set('token', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
        });

        // Send token to client
        return response;
    } catch (error) {
        console.log(error.message);
        return NextResponse.error({
            message: error.message,
            success: false,
            status: 500, // Internal Server Error
        });
    }
}
