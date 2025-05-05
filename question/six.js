//? Object Creation:
//? Create an object student using both new Object() and object literal syntax. Add properties name, age, and grade, then log both objects.

//construuctor
const student1 = new Object();
student1.name = "John";
student1.age = 20;
student1.grade = "A";

//console.log(student1);

//Literals
const student2 = {
    name: "Jane",
    age: 22,
    grade: "B"
  };
  
//console.log(student2);


//? Object Nesting:
//? Create an object team with a nested captain object containing firstName and lastName. Access and log the captain.lastName.

const team = {
    name: "Dream Team",
    captain: {
      firstName: "Michael",
      lastName: "Jordan"
    }
  };
  
//console.log("Captain's last name:", team.captain.lastName);
  