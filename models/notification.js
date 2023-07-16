const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId



const NotificationSchema = Schema({

    senderId: {
        type: ObjectId,
        ref: 'User'
    },
    reciverId: {
        type: ObjectId,
        ref: 'User'
    },
    notificationType: {
        type: String,
        enum: ['Follow', 'LoveComment', 'LoveVideo', 'ShareVideo', 'DislikeAComment']
    },
    videoId: {
        type: ObjectId,
        ref: 'Video'
    },

    commentId: {
        type: ObjectId,
        ref: 'Comment'
    },


    // we send or create  notification when , 
    //user follow  other user ,
    // user love a video , comment , reply , or dislike a comment or reply 
    // and when we share a video
    // so we must have these data in notification collection
    // 1 - commentId in case we love a comment , 
    //  2 - videoId in Case we love a video or share 
    // nothing else , but note these fields can be null depending on the case 
    // okay now we almost done with db models or schemas , note that maybe we can add any other fields or remove while doing
    // backend work.
}, { timestamps: true })



module.exports = mongoose.model('Notification', NotificationSchema)