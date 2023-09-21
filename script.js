
console.groupCollapsed('JS_task_functions_1_1')

var age = window.prompt('Enter your age');

console.log('If you were a dog, your age would be:');

age *= 7;

console.log(age);

console.groupEnd()

console.groupCollapsed('JS_task_functions_1_2')

function inDays(f){
  return (f-12) * (365/10); 
};

var oneBook = inDays(10); 
console.log('One book in',oneBook,'days')
console.groupEnd()


console.groupCollapsed('JS_task_functions_1_3')

function weeksToDays(weeks) {
  const weeksAsNumber = Number(weeks);
  if (!isNaN(weeksAsNumber)) {
    const days = weeksAsNumber * 7;
    return String(days);
  } else {
    return "Invalid input. Please provide a valid number of weeks.";
  }
}

const weeks = 5;
const days = weeksToDays(weeks);

console.log(`There are ${days} days in ${weeks} weeks.`);
console.groupEnd()

console.groupCollapsed('JS_task_functions_1_4')

function 




console.groupEnd()

