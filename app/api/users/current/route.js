import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import User from '@/models/userModel';

// This route is used to get the current user
// GET /api/users/current

export async function GET(request) {
    const token = request.cookies.get('token')?.value;

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // If the token is valid, return the user
    const user = await User.findById(decoded.id).select('-password');

    return NextResponse.json(user);
}
