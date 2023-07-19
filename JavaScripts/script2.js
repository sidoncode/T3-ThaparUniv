function displayGrade() {
    var gradeInput = document.getElementById("input").value;
    var grade = getGrade(gradeInput);
    document.getElementById("grade").textContent = "Grade: " + grade;
  }
  
  function getGrade(input) {
    // Convert the input to uppercase to handle lowercase inputs as well
    input = input.toUpperCase();
  
    switch (input) {
      case "A":
        return "Excellent";
      case "B":
        return "Good";
      case "C":
        return "Average";
      case "D":
        return "Below Average";
      case "F":
        return "Fail";
      default:
        return "Invalid grade";
    }
  }
  