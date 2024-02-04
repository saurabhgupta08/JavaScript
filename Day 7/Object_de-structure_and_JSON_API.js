//De-structure of object

const course ={
    courseName:"UPSE",
    price:1999,
    courseInstructor:"Saurabh Gupta"

}

const {courseInstructor} = course
console.log(courseInstructor);
const {courseInstructor : Instructor} = course
console.log(Instructor);