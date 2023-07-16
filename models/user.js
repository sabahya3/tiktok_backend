const mongoose = require('mongoose')

const Schema = mongoose.Schema



const UserSchema = Schema({
    name: {
        type: String,
        default: ''
    },
    nickName: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: '',
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 8,

    },
    image: {
        type: String,
        default: '',
    },
    followersCount: {
        type: Number,
        default: 0
    },
    followingCount: {
        type: Number,
        default: 0
    },
    likeCount: {
        type: Number,
        default: 0
    },
    videosCount: {
        type: Number,
        default: 0
    },

    authPlatform:{
        type:String,
        enum:['Facebook' , 'Google']
    }


} , {timestamps:true})



module.exports = mongoose.model('User', UserSchema)