//1. Feladat
let car = ['Ford', 'Mustang', 2022, 'blue'];

// Destruktúrálás
let [brand, model, year, color] = car;

// Kiírás
console.log('Brand:', brand);
console.log('Model:', model);
console.log('Year:', year);
console.log('Color:', color);

//Kérdésre válasz:
//A változóneveket tetszőlegesen lehet választani a destruktúrálás során. A sorrend fontos, mivel a destruktúrálás a tömb elemeit a sorrendjük alapján rendeli a változókhoz. Tehát az első változó az első tömb elemhez, a második változó a második tömb elemhez és így tovább.

//2. Feladat
let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'
  };
  
  // Destruktúrálás
  let { title: bookTitle, author: bookAuthor, publicationYear, language } = book;
  
  // Kiírás
  console.log('Book Title:', bookTitle);
  console.log('Book Author:', bookAuthor);
  console.log('Publication Year:', publicationYear);
  console.log('Language:', language);

//Kérdésre a válasz:
//A változóneveket objektum destruktúrálás esetén a kulcsnevek határozzák meg. A sorrend itt nem fontos, mert az objektum kulcsaihoz a nevüket rendeljük a változóknak, és nem a sorrendjüket használjuk.

//3. Feladat
function printStudentInfo(student) {
    // Objektum destruktúrálás
    const { name, age, grade, subjects } = student;
  
    // Kiírás
    console.log('Student Name:', name);
    console.log('Student Age:', age);
    console.log('Student Grade:', grade);
    console.log('Student Subjects:', subjects.join(', '));
  }
  
  // Diákobjektum létrehozása
  let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
  };
  
  // Függvény hívása a diákobjektummal
  printStudentInfo(student);
  