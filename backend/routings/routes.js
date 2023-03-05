const {
    getAllStudents,
    getSingleStudents,
    createStudents,
    updateStudents,
    deleteStudents } = require('../controllers/user.controller');

const router = require('express').Router();

router.get('/students', getAllStudents);
router.get('/student/:id', getSingleStudents);
router.post('/new/student', createStudents);
router.put('/student/:id', updateStudents);
router.delete('/student/:id', deleteStudents);


module.exports = router;