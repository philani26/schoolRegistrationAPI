const mongoose = require('mongoose');

const bootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
        maxlength: [50, 'Name can not be more than 50 characters'],
        unique: true,
        trim: true
    },
    slug: String,
    description:{
        type:String,
        required: [true, 'Discription field is required'],
        maxlength: [500, 'Discription can not be more than 500 characters'],
        unique: true,
        trim: true
    },
    website: {
        type: String,
        match: [
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
            'Please enter valid URL with HTTP or HTTPS'
        ]
    },
    phone: {
        type:String,
        maxlength: [10, 'Phone number must have 10 number']
    },
    email: {
        type: String,
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please enter valid email'
        ]
    }, 
    address: {
        type: String,
        required: [true,'Please add address']
    },
    location:{
    type: {
        type: String,
        enum: ['Point'],
    
        },
        coordinates: {
        type: [Number],
        required: true
        },
      formattedAddress: String,
      street: String,
      city: String,
      state: String,
      zipcode: String,
      country: String
    },
    careers: {
        type: String,
        enum: [
            'Web Design',
            'Mobile Application',
            'UI/UX'
        ]
    },
    avarageRation: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating must not be more than 10']
    },
    avarageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    housing: {
        type: Boolean,
        default: false
    },
    jobAssistance: {  
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Bootcamp', bootcampSchema);