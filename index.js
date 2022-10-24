const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
const learnPrograming = require('./data/learnPrograming.json');
const courses = require('./data/courses.json');
app.get('/', (req, res) => {
    res.send('learn programming server is running');
});
app.get('/course-categories', (req, res) => {
    res.send(learnPrograming);
});
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourses = courses.find(c => c._id === id);
    res.send(selectedCourses);
});
app.listen(port, () => {
    console.log(`learn programming is running on port,${port}`);
})