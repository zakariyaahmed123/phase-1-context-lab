/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(employee) {
    let employeeRecord = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return employeeRecord;
}
function createEmployeeRecords(employees) {
    let arrayOfEmployees = [];
    for (let employee of employees) {
        arrayOfEmployees.push(createEmployeeRecord(employee));
    }
    return arrayOfEmployees;
}
function createTimeInEvent(date) {
    let timeIn = {
        type: "TimeIn",
        hour: parseInt(date.substring(11)),
        date: date.substring(0, 10),
    }
    this.timeInEvents.push(timeIn);
    return this;
}
function createTimeOutEvent(date) {
    let timeOut = {
        type: "TimeOut",
        hour: parseInt(date.substring(11)),
        date: date.substring(0, 10),
    }
    this.timeOutEvents.push(timeOut);
    return this;
}
function hoursWorkedOnDate(date) {
    let clockedOut = 0;
    let clockedIn = 0;
    for (let timeIn of this.timeInEvents) {
        if (timeIn.date == date) {
            clockedIn = timeIn.hour;
        }
    }
    for (let timeOut of this.timeOutEvents) {
        if (timeOut.date == date) {
            clockedOut = timeOut.hour;
        }
    }
    return (clockedOut - clockedIn) / 100;
}
function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date);
    let wage = this.payPerHour;
    return hours * wage;

}
function findEmployeeByFirstName(srcArray, firstName) {
    for (let element of srcArray) {
        if (element.firstName == firstName) {
            return element;
        }
    }
    return undefined;
}
function calculatePayroll(employeeRecords) {
    let sum = 0;
    for (let employee of employeeRecords) {
        sum += allWagesFor.call(employee);
    }
    return sum;
}
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
Footer
