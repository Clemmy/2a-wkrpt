{
    thread_participants: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true
        },
        role: {
            type: String,
            enum: [
                'creator',
                'participant'
            ],
            default: 'participant'
        },
        read: Boolean,
        archived: Boolean,
        updated_at: {
            type: Date,
            default: Date.now
        }
    }],
    messages: [MessageSchema],
    updated_at: {
        type: Date,
        default: Date.now,
        index: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}
