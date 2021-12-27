const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'This sucks and you should feel bad.',
        user_id: 1,
        post_id: 4
    },
    {
        comment_text: 'So brave.',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'This!',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'Totes Presh!',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'We write Latin without knowing it.',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Noice!',
        user_id: 3,
        post_id: 3
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;