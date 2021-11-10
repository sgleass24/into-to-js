//fortune teller, 10 fortunes, kandies page array of facts about cbd helping dogs


function tellFortune(){
    var fortune= new Array ("You will Win a Million Dollars", 
    "You Will Go Through a Breakup", 
    "You Will Succeed in Your Work", 
    "You Will Get a Puppy", 
    "You Will Have to Make a Difficult Decision", 
    "You Will Experience a Great Loss", 
    "You Will Fall in Love", 
    "You Will Have an Oppotunity to Travel", 
    "You Will Experience Finacial Trouble", 
    "You Will Move to a New Country");
    var random = fortune[Math.floor(Math.random() * fortune.length)]; 
    document.getElementById("btn").innerHTML=random;
}

    
   
    

