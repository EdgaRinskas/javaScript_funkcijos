
console.groupCollapsed('JS_task_functions_1_1')
var age = window.prompt('Enter your age');
console.log('If you were a dog, your age would be:');
age *= 7;
console.log(age);
console.groupEnd()



console.groupCollapsed('JS_task_functions_1_2')
function daysPerBook(books) {
  let days = Math.floor(365 / books)
  let output = `Norint perskaityti ${books} knygų per metus, vienai knygai perskaityti turėsi ${days} dienas.`
  return output
}
console.log(daysPerBook(9))
console.log(daysPerBook(24))
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
function daysToYears(days) {
  let years = (days / 365).toFixed(2)
  let output = `${days} dienos yra ${years} metai.`
  return output
}
console.log(daysToYears(30))
console.groupEnd()



console.groupCollapsed('JS_task_functions_1_5')
function yearsToHours(years) {
  let hours = years * 365 * 24
  let output = `${years} metai turi ${hours} valandas.`

  return output
}
console.log(yearsToHours(2))
console.groupEnd()



console.groupCollapsed('JS_task_functions_1_6')
function monthsToHours(months) {
  let hours = months * 30 * 24
  let output = `${months} mėnesiai turi ${hours} valandas.`

  return output
}
console.log(monthsToHours(4))
console.groupEnd()


console.groupCollapsed('JS_task_functions_1_7')
function monthsToMinutes(months) {
  let minutes = months * 30 * 24 * 60
  let output = `${months} mėnesiai turi ${minutes} minutes.`

  return output
}
console.log(monthsToMinutes(3))
console.groupEnd()
