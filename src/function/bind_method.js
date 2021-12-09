this.firstName = "Minh";
this.lastName = "Thu";

const teacher = {
  firstName: "Minh",
  lastName: "Thảo",
  getFullName() {
    //   return `${this.firstName} ${this.lastName}`
    console.log(`${this.firstName} ${this.lastName}`) 
  },
};

// // case 1 -> Minh Thảo
// console.log(teacher.getFullName())  // Minh Thảo

// // case 1.2 > Minh Thảo
// const getTeacherName = teacher.getFullName()
// console.log(getTeacherName === teacher.getFullName)  // false
// console.log(getTeacherName)  // Minh Thảo

// // case 2 > Minh Thu
// const getTeacherName1 = teacher.getFullName
// console.log(getTeacherName1 === teacher.getFullName)  // true
// console.log(getTeacherName1()) // Minh Thu

// // case 3 > bind -> Viet Thang
// const student = {
//     firstName: "Viet",
//     lastName: "Thang"
// }

// const getStudentName = teacher.getFullName.bind(student)
// console.log(getStudentName === teacher.getFullName)  // false
// console.log(getStudentName()) // Viet Thang

//Example
const button = document.querySelector("button")
button.onclick = teacher.getFullName.bind(teacher)