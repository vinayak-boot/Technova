import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import mongoose from 'mongoose';

// Define a simple schema for contacts
const ContactSchema = new mongoose.Schema({
    email: String,
    message: String,
    date: { type: Date, default: Date.now },
});

// Prevent overwriting the model if it already exists
const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export async function POST(request: Request) {
    try {
        await dbConnect();
        const data = await request.json();

        const newContact = new Contact({
            email: data.email,
            message: data.message,
        });

        await newContact.save();

        return NextResponse.json({ success: true, data: newContact }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to save contact' }, { status: 500 });
    }
}

