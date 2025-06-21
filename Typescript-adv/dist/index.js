"use strict";
function updateUser(updatedProps) {
}
const userr = {
    id: '123',
    name: 'John',
};
const users = {
    '123': { age: 20, name: "nisha" },
    '234': { age: 21, name: "xyz" },
};
//map
const user1 = new Map();
user1.set('123', { age: 20, name: "nisha" });
user1.set('234', { age: 21, name: "xyz" });
const user2 = user1.get('123');
console.log(user2);
const handleEvent = (event) => {
    console.log(`handling event: ${event}`);
};
handleEvent('click');
