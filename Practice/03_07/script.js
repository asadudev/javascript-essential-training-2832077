/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const Person ={
    SkinColor:"white",
    HairColor:"Brown",
    Height:"6feet",
    EyeColor:"Black",
    Weight:"85KG",
    Student:{
        Name:"Asad ullah",
        University_RollNo:"021382",
        Address:"Gujranwala",
        Class:"Bscs"
    }
}


console.log('This is Person Object:', Person)
console.log('This is Nested Object:', Person.Student)

console.log('University RollNo:',Person.Student.University_RollNo)
console.log('Name:',Person["Student"]["Name"])
console.log('Address:',Person["Student"]["Address"])

