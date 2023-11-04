import { NextResponse } from 'next/server';

export function GET(request) {
    return NextResponse.json({
        name: 'Dhrutik Patel',
        email: 'dhrutikpatel2017@gmail.com',
        password: 'admin',
    });
}
