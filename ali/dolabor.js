data = {
    "name": "John",
    "age": 30
};

function scope(object, property) {
    return object[property];
}

console.log(scope(data, "name")); // Output: John
console.log(scope(data, "age")); // Output: 30
