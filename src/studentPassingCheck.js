/**
 * 12. Student Passing Check
A student passes if the score is ≥ 60 AND attendance is ≥ 75%. If either condition is not met, display "Fail".

 */

const prompt = require('prompt-sync')()
const score = Number(prompt('Masukan score: '))
const attendance = Number(prompt('Masukan kehadiran dalam persentase: '))

const newAttendance = attendance / 100;
const scoreMin = 60;
const attendanceMin = 75/100;

if (score >= scoreMin && newAttendance >= attendanceMin) {
    console.log('Passed')
} else {
    console.log('failed')
}

