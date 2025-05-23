import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    studentNumber: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phoneNumber: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    program: {type: String, required: true},
    favouriteCourse: {type: String, required: true},
    hobby: {type: String, required: true},
});

const Student = mongoose.model('Student', studentSchema);
export default Student;