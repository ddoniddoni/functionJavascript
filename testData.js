let curry = new Student('Sandon', 'Curry', '111-1111-1111', 'Pen State');
curry.address = new Address('US');

let turing = new Student('Alan', 'Turing', '222-2222-2222', 'Princeton');
turing.address = new Address('England');

let church = new Student('Alonzo', 'Church', '333-3333-3333', 'Princeton');
church.address = new Address('US');

let kleene = new Student('Stephen', 'Kleene', '444-4444-4444', 'Princeton');
kleene.address = new Address('US');

const selector = (country, school) => (student) => {
    student.address.country === country && student.school === school;
}
const findStudentsBy = (friends, selector) => friends.filter(selector);

findStudentsBy([curry, turing, church, kleene], selector('US', 'Princeton'));