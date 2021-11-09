var message= prompt("How Old Are You?");
function getAge(){
    
    if(message >= 18){
        alert("Welcome");
    }else {
        alert("Sorry! Must be 18 or older to enter this page!");
        location.replace("errorpg.html");
    }
    
}

getAge()

// get the current date
const today = new Date();
console.log(today);
// returns current day in number form
const dayNumber = today.getDay();
console.log(dayNumber);
// storing my output location
const element=document.getElementById("message1");

function special(){
if(dayNumber ===1){
return '1/2 off all oils'
} else if (dayNumber ===2) {
return '2 for 1 treats'
} else if (dayNumber ===3){
    return 'Buy one get one free'
} else if (dayNumber ===4) {
    return 'add a gummy'
} else if (dayNumber ===5){
    return 'bring a friend, get a treat'
} else if (dayNumber ===6){
    return 'buy two edibles get one free'
} else if (dayNumber ===7){
    return 'brunch and free samples'
} else (element.classList.add("hideme"))
};


console.log('you got a ' + special());
element.innerHTML='check out the special today' + '</br>' + special();

function assignGrade(grade){
    if ( grade <=60){
        return 'F';
    } else if (grade > 60 && grade <70){
        return 'D';
    } else if (grade > 70 && grade <80){
        return 'C';
    } else if (grade >80 && grade <90){
        return 'B';
    } else {
        return 'A'
    }
}

console.log(`you got a` + assignGrade(95));