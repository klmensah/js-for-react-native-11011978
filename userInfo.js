// userInfo.js

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Example usage:
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
let modifiedNames = formatArrayStrings(names, processArray([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(createUserProfiles(names, modifiedNames));
/* [
    { originalName: 'Kwame', modifiedName: 'alice', id: 1 },
    { originalName: 'Bob', modifiedName: 'BOB', id: 2 },
    { originalName: 'Charlie', modifiedName: 'charlie', id: 3 },
    { originalName: 'David', modifiedName: 'DAVID', id: 4 },
    { originalName: 'Eve', modifiedName: 'eve', id: 5 }
] */
