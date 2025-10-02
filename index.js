// Your code here
function createEmployeeRecord([firstName, familyName, title, payPerHour]){   
    return {
        firstName:firstName, 
        familyName:familyName, 
        title:title, 
        payPerHour:payPerHour, 
        timeInEvents:[], 
        timeOutEvents:[]}
}

const empo = createEmployeeRecord(['jeff', 'Muna', 'Hr', 20])
const empo4=createEmployeeRecords([['jeff', 'Muna', 'Hr', 20], ['Jack', 'Mainia', 'Hr', 20]])
const empo2 = createTimeInEvent(createEmployeeRecord(['jeff', 'Muna', 'Hr', 20]), "2025-10-20 1300")
const empo3 = createTimeOutEvent(empo2, "2025-10-20 1900")
// console.log(createEmployeeRecord(['jeff', 'Muna', 'Hr', 20]))

function createEmployeeRecords(arr){
    let newArr =arr.map(item=>createEmployeeRecord(item))
    return newArr
}

// console.log(createEmployeeRecords([['jeff', 'Muna', 'Hr', 20], ['Jack', 'Mainia', 'Hr', 20]]))

function createTimeInEvent(obj, dateStamp){
    const [date,  hour] = dateStamp.split(' ')
    obj.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date: date
    })

    return obj
}

// console.log(createTimeInEvent(createEmployeeRecord(['jeff', 'Muna', 'Hr', 20]), "2025-10-20 1300"))

function createTimeOutEvent(obj, dateStamp){
    const [date, hour] = dateStamp.split(' ')
    obj.timeOutEvents.push({
        type:'TimeOut',
        hour:parseInt(hour, 10),
        date:date
    })
    return obj
}

function hoursWorkedOnDate(obj, dateStamp){
    const [date] = dateStamp.split(' ')
    const timeIn = obj.timeInEvents.find(event=>event.date===date)
    const timeOut = obj.timeOutEvents.find(event=>event.date===date)
    return (timeOut.hour-timeIn.hour)/100
}

// console.log(hoursWorkedOnDate(empo3, '2025-10-20 1300'))

function wagesEarnedOnDate(obj, dateStamp){
    const payOwned = hoursWorkedOnDate(obj, dateStamp)*obj.payPerHour
    return payOwned
}

function allWagesFor(obj){
    let wage=0
    for(const date of obj.timeInEvents){
        wage += wagesEarnedOnDate(obj, date.date)
    }
    return wage
}

function calculatePayroll(arr){
    let payRoll=0
    for(const pay of arr){
        for(const dates of pay.timeInEvents){
            payRoll += wagesEarnedOnDate(pay, dates.date)
        }
    }
    return payRoll
}
// console.log(empo4)

console.log(calculatePayroll(empo4))
