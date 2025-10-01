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
    const [date, hour] = dateStamp.split(' ')
    const timeIn = obj.timeInEvents.find(event=>event.date===date)
    const timeOut = obj.timeOutEvents.find(event=>event.date===date)
    return (timeOut.hour-timeIn.hour)/100
}

// console.log(hoursWorkedOnDate(empo, '2025-10-20 1300'))

function wagesEarnedOnDate(obj, dateStamp){
    const payOwned = hoursWorkedOnDate(obj, dateStamp)*obj.payPerHour
    return payOwned
}

function allWagesFor(obj){
    
}