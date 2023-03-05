const Student = require('../models/user.model');

module.exports.getAllStudents = async (req, res, next) => {
    try {
        const students = await Student.find();
        res.status(200).json({
            message: "students get successfully",
            students,
        })
    } catch (error) {
        res.status(404).json({
            error,
        })
    }
};

module.exports.getSingleStudents = async (req, res, next) => {
    try {
        const students = await Student.findOne(req.params._id);
        res.status(200).json({
            message: " Singlle student get successfully",
            students,
        })

    } catch (error) {
        res.status(404).json({
            message: "not found",
            error,
        })
    }
};

module.exports.createStudents = async (req, res, next) => {
    try {
        const { fName, lName, email, mobile, degeree, totalMarks } = req.body;
        const checkEmail = await Student.findOne({ email });

        if (checkEmail) {
            return res.json({
                message: "students Already exist",
            })
        }
        const newStudents = new Student({
            fName: fName,
            lName: lName,
            email: email,
            mobile: mobile,
            totalMarks: totalMarks,
            degeree: degeree,
        })

        const students = await newStudents.save();
        res.status(201).json({
            message: "student create successfully",
            students,
        })

    } catch (error) {
        res.status(404).json({
            message: "not found",
            error,
        })
    }
};

module.exports.updateStudents = async (req, res, next) => {
    try {
        const isExist = await Student.findById(req.params.id);
        if (!isExist) {
            return res.status(404).json({
                message: "student not found "
            })
        }

        const updateStudents = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        const students = await Student.find();
        res.status(200).json({
            message: "student Update successFully",
            updateStudents,
            students,
        })


    } catch (error) {
        res.status(404).json({
            message: "not found",
            error,
        })
    }
};

module.exports.deleteStudents = async (req, res, next) => {
    try {
        const isExist = await Student.findOne(req.params._id);
        if (!isExist) {
            return res.status(404).json({
                message: "student not found ",
            })
        }

        const deleteStudents = await Student.deleteOne(req.params._id);
        const students = await Student.find();
        res.status(200).json({
            message: "students Delete successfully",
            students,
        })

    } catch (error) {
        res.status(404).json({
            message: "not found",
            error,
        })
    }
};


