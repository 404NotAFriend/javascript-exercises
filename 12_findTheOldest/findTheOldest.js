const findTheOldest = (people) =>
  people.reduce((oldest, person) => {
    if (person.yearOfDeath === undefined) {
      const currentYear = new Date().getFullYear();
      person.yearOfDeath = currentYear;
    }

    // On first iteration, set the first person as the oldest
    if (!oldest.yearOfDeath) {
      return person;
    }

    const age = person.yearOfDeath - person.yearOfBirth;
    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;

    return age > oldestAge ? person : oldest;
  }, {});

// Do not edit below this line
module.exports = findTheOldest;
