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

function createEmployeeRecords(arr){
    let newArr =arr.map(item=>createEmployeeRecord(item))
    return newArr
}

function createTimeInEvent(obj, dateStamp){
    const [date,  hour] = dateStamp.split(' ')
    obj.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date: date
    })
    return obj
}

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

