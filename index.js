
const classA = [
    { name: "George", grade: 9.8 },
    { name: "Matheus", grade: 5 },
    { name: "fulano", grade: 3 },
    { name: "Delsivan", grade: 10 }

]

const classB = [
    { name: "Cleito", grade: 10 },
    { name: "Aristides", grade: 7 },
    { name: "ciclano", grade: 5 },
    { name: "beltrano", grade: 6 }
]

function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade

    }

    const average = sum / students.length
    return average

}

function sendMessage(average, Class) {
    if (average >= 7) {
        return console.log(`Congratulations ${Class}, your test grade is: ${average}`)
    }
    else {
        return console.log(`${Class} your test grade was lower then spected. Average: ${average}`)
    }
}

function markasflunked(student) {
    student.flunked = false;
    if (student.grade < 7) {
        student.flunked = true;
    }
}

function sendMessageflunked(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked`)
    }
}

function studentsflunked(students) {
    for (let student of students) {
        markasflunked(student)
        sendMessageflunked(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

markasflunked(classA)

studentsflunked(classA)
studentsflunked(classB)