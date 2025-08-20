const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};
const findTheOldest = function (people) {
  let oldestPerson = null;
  let oldestAge = 0;
  for (let person of people) {
    const age = getAge(person.yearOfBirth, person.yearOfDeath);
    if (age > oldestAge) {
      oldestAge = age;
      oldestPerson = person;
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
