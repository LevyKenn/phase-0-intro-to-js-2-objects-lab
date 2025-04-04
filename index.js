<<<<<<< HEAD
const employee = {
    name: "Simon",
    streetAddress: "Mwiki road",
} 

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key]: value}
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function  deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
=======
// Employee object
const employee = {
  name: "Llewellyn Muirwe",
  streetAddress: "123 Main St"
};

// 1. Non-destructive update
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

// 2. Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// 3. Non-destructive delete
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// 4. Destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
>>>>>>> 33645a7 (Complete object manipulation functions)
