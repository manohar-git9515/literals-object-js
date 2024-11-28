//Question 1:You are given an object book with the properties title, author, and yearPublished.Perform the following operations:

var book = {
    "title": "treasure island",
    "author": "robert",
    "year published" : "1993",
}


//1.	Access the author property and print it
console.log(book.author); 

//2.	Modify the yearPublished property to 2022.
book["year published"] = 2002;



//3.	Add a new property genre to the book object with the value “Fiction”.
book["genre"] = "fiction";


//4.	Delete the title property from the book object.

delete book["title"];
console.log(book);

//------------------------------------------------------------------

//2You are given an object employee with the properties name, age, position, and salary. Perform the following operations:
var employee = {
    "name": "raju",
    "age": 24,
    "position": "manager",
    "salary" : 40000,
}

//1.	Access the position property and print it.
console.log(employee.position);

//2.	Modify the salary property to 50000
employee["salary"] = 50000;


//3.	Add a new property department to the employee object with the value “HR”.
employee["department"] = "HR";


//4.	Delete the age property from the employee object
delete employee["age"];
console.log(employee);

//----------------------------------------------------------------------

//Question 3:You are given an object product with the properties id, name, price, and category.Perform the following operations:

var product = {
    "id": "211",
    "name": "laptop",
    "price": 40000,
    "category": "electronics",

}
//1.	Access the price property and print it
console.log(product.price);

//2.	Modify the category property to “Electronics”.
product["category"] = "electrical";


//3.	Add a new property inStock to the product object with the value true.
product["instock"] = "true";


//4.	Delete the id property from the product object.
delete product["id"];
console.log(product);

//--------------------------------------------------------------------------
//Question 4:You are given an object car with the properties make, model, year, and color.Perform the following operations:

var car = {
    "make": "mahindra",
    "model": "xuv",
    "year": "2002",
    "colour": "red",
}

//1.	Access the make property and print it.
console.log(car.make);

//2.	Modify the color property to “Black”.
car["colour"] = "black";


//3.	Add a new property engineType to the car object with the value “V6”.
car["enginetype"] = "v6";


//4.	Delete the year property from the car object.
delete car["year"];
console.log(car);

//-----------------------------------------------------------------------------------------
//Question 5:You are given an object student with the properties name, age, grade, and school.Perform the following operations:

var student = {
    "name": "surya",
    "age": 15,
    "grade": "A",
    "school": "ST.Francis",
}

//1.	Access the school property and print it.
console.log(student.school);

//2.	Modify the grade property to 95.
student["grade"] = 95;


//3.	Add a new property hobbies to the student object with the value ["reading", "sports"].
student["hobbies"] = "reading", "sports";
console.log(student);

//4.	Delete the age property from the student object.
delete student["age"];
console.log(student);

//------------------------------------------------------------------------

//Question 6:You are given an object user with the following structure:
const user = {
    username: "john_doe",
    profile: {
        firstName: "John",
        lastName: "Doe",
        age: 28,
        address: {
            street: "456 Elm St",
            city: "Gotham",
            zip: "54321"
        }
    },
    preferences: {
        theme: "dark",
        notifications: true,
    }
};

//1.	Access the city property from the address object and print it.
console.log(user.profile.address.city);

//1.	Access the city property from the address object and print it.
user.preferences["theme"] = "light";


//3.	Add a new property phone to the profile object with the value “555-9876”.
user.profile["object"] = "555-9876";


//4.	Delete the zip property from the address object
delete user.profile.address["zip"];
console.log(user);

//------------------------------------------------------------

//Question 7:You are given an object company with the following structure:

const company = {
    name: "Tech Solutions",
    employees: [
        {
            name: "Alice",
            position: "Developer",
            contact: {
                email: "alice@tech.com",
                phone: "555-2345"
            }
        },
        {
            name: "Bob",
            position: "Manager",
            contact: {
                email: "bob@tech.com",
                phone: "555-6789"
            }
        }
    ],
    location: "New York"
};

//1.	Access the email of the second employee (Bob) and print it.

console.log(company.employees[1].name);

//2.	Modify the phone number of Alice to “555-1111”.
company.employees[0]["phone"] = "“555-1111";


//3.	Add a new property department with the value “Engineering” to the first employee (Alice).
company.employees[0]["department"] = "Engineering";


//4.	Delete the location property from the company object.
delete company["location"];
console.log(company);
