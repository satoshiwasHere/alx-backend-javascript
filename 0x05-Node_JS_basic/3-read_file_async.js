const fs = require('fs');


function countStudents(dbPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const courses = new Map();
        let students = data.split('\n');
        students = students.slice(1, students.length - 1);

        // Parse CSV data initiating a map of courseData objects.
        students.forEach((student) => {
          const studentData = student.split(',');
          const firstName = studentData[0];
          const field = studentData[3];
          if (courses.has(field)) courses.get(field).push(firstName);
          else courses.set(field, [firstName]);
        });

        // shows information from map
        console.log(`Number of students: ${students.length}`);
        courses.forEach((courseStudents, course) => {
          console.log(`Number of students in ${course}: ${courseStudents.length}. List: ${courseStudents.join(', ')}`);
        });
        resolve();
      }
    });
  });
}

module.exports = countStudents;
