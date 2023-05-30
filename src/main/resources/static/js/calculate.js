var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
            49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

let gradeLowerBounds = {
    'Max': 100, 'A+': 95, 'A': 90, 'A-':85, 'B+':80, 'B':75, 'B-':70,
    'C+':65,'C':60,'C-':55,'D':50,'F':0}

//initialize grade counts
let gradeCount ={
    'A+': 0, 'A': 0, 'A-':0, 'B+':0, 'B':0, 'B-':0,
    'C+':0,'C':0,'C-':0,'D':0,'F':0 }


function gradesCategory(score){
    for (const  grade in gradeCount){
        if (score >= gradeLowerBounds[grade]) {
            gradeCount[grade]+=1;
            return;
          }
    }
}

function gradeResult(){
    for (const grade in gradeCount){
        gradeCount[grade] = 0;
    }
    for (const grade of grades){
        gradesCategory(grade);
    }
}

function gradeVerify(entry){
    userInput = parseFloat(entry);
    if (Number.isNaN(userInput)) {
        alert("Please enter a number ");
        return false;
      }
    if (userInput<gradeLowerBounds['F']){
        alert("Please enter the right range of number ");
        return false;
    }
    if (userInput>gradeLowerBounds['Max']){
        alert("Please enter the right range of number ");
        return false;
    }

    return userInput;
}

function gradeAddition(entry){
    grades.push(entry);
}

function gradeSubmission(event){
    
    entry = document.getElementById("newGradeInput").value;
    if(!gradeVerify(entry)){
        document.getElementById("newGradeInput").value = null;
        return 
    }
    
    gradeAddition(entry);
    
    gradeResult();
    updateHistogram();
}

function updateHistogram(){
    
    visualData = document.getElementsByClassName("graph-data");
    for (let i in visualData){
        visualData[i].innerText = "0".repeat(Object.values(gradeCount)[i]);
    }
}

function boundChange(event){
    
    gradeLowerBounds[event.target.name] = event.target.value;

}

lowerChange = document.getElementsByClassName("grade-LB");
for (let i in lowerChange){
    lowerChange[i].onchange = boundChange;
}
