const students = [
    {
      firstName: "Favour",
      lastName: "Ofoegbu",
      gender: "female",
      age: 18,
      score: 156,
      courses: ["English", "Lit-in-eng", "CRS", "Government"]
    },
    {
        firstName: "Ifeanyi",
        lastName: "Okechukwu",
        gender: "male",
        age: 16,
        score: 122,
        courses: ["Maths", "Physics", "English", "Chemistry"]
      },
      {
        firstName: "Ezinne",
        lastName: "Blessing",
        gender: "female",
        age: 19,
        score: 158,
        courses: ["English", "Lit-in-eng", "CRS", "Government"]
      },
      {
        firstName: "Adeola",
        lastName: "Sunday",
        gender: "female",
        age: 18,
        score: 280,
        courses: ["English", "Maths", "Chemistry", "Biology"]
      },
      {
        firstName: "David",
        lastName: "Lawson",
        gender: "male",
        age: 17,
        score: 70,
        courses: ["English", "Maths", "Chemistry", "Physics"]
      },
      {
        firstName: "David",
        lastName: "Anthony",
        gender: "male",
        age: 16,
        score: 196,
        courses: ["English", "Economics", "Commerce", "Accounting"]
      },
      {
        firstName: "Abigail",
        lastName: "Aderonke",
        gender: "female",
        age: 20,
        score: 209,
        courses: ["English", "Lit-in-eng", "CRS", "Government"]
      },
      
      {
        firstName: "Kikelomo",
        lastName: "Olanibuyan",
        gender: "female",
        age: 16,
        score: 136,
        courses: ["English", "Lit-in-eng", "CRS", "Government"]
      },
      {
        firstName: "Christiana",
        lastName: "Johnson",
        gender: "female",
        age: 16,
        score: 163,
        courses: ["English", "Maths", "Chemistry", "Physics"]
      },
      {
        firstName: "Victor",
        lastName: "Akanimo",
        gender: "male",
        age: 18,
        score: 142,
        courses: ["English", "Lit-in-eng", "CRS", "Government"]
      }
];
const studentDescriptions = students.map(({ firstName, lastName, age, score, gender, courses }) => {
  const pronoun = gender === "male" ? "He" : "She";
  return [
    `Name: ${firstName} ${lastName}`,
    `Age: ${age}`,
    `Score: ${score}`,
    `${pronoun} is taking: ${courses.join(", ")}`
  ];
});
const listContainer = document.getElementById("student-info");
  let index = 0;

const interval = setInterval(() => {
  if (index < studentDescriptions.length) {
    const studentLines = studentDescriptions[index];
    const studentDiv = document.createElement("div");

    
    studentLines.forEach(line => {
      const p = document.createElement("p");
      p.textContent = line;
      studentDiv.appendChild(p);
    });

    listContainer.appendChild(studentDiv);
    listContainer.appendChild(document.createElement("hr"));
    index++;
  } else {
    clearInterval(interval); // Stop when all students are displayed
  }
}, 3000);