const output = [];
const students = [
    { id: 21, name: ' Tajul Islam' }, { id: 41, name: ' shaira Islam' }, { id: 31, name: ' sumaiya Islam' }, { id: 51, name: ' pratasha Islam' }
]
const names = students.map(s => s.name);
const id = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const bigger2 = students.find(s => s.id > 40);
console.log(names);
console.log(id);
console.log(bigger);
console.log(bigger2);