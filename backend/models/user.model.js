const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: [true, "First Name is required"],
    },
    lName: {
        type: String,
        required: [true, "Last Name is required"],
    },
    email: {
        type: String,
        required: [true, 'Email is required ']
    },
    mobile: {
        type: Number,
        required: [true, 'Mobile  Number is required ']
    },
    degeree: {
        type: String,
        required: [true, 'Degeree is required ']
    },
    totalMarks: {
        type: Number,
        required: [true, 'Total Mark is required ']
    }

});

const schema = mongoose.model('student', studentSchema);
module.exports = schema;