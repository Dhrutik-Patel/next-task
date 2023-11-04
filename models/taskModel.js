import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            unique: true,
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
        },
        completed: {
            type: Boolean,
            required: [true, 'Completed is required'],
            default: false,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
        dueDate: {
            type: Date,
            required: [true, 'Due date is required'],
        },
        priority: {
            type: String,
            required: [true, 'Priority is required'],
        },
        tags: [
            {
                type: String,
            },
        ],
    },
    { timestamps: true }
);

const Task = mongoose.models['task'] || mongoose.model('task', taskSchema);

export default Task;
