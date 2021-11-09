let objPerson = {
    "name": "Simeon",
    "age": 21,
    "town": "Svilengrad",
    "country": "Bulgaria",
    "friends": ["Petya", "Georgi"],
    "favourite_subjects_with_grades": {
        "Math": [6, 5, 6, 5],
        "Physics": [4, 6, 5]
    }
};

console.log(objPerson["favourite_subjects_with_grades"]["Math"]);