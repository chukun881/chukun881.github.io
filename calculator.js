function calculateSalary() {
  // Retrieve input values and convert them to numbers
  const hourlyRate = parseFloat(document.getElementById('hourlyRate').value) || 0;
  const hoursPerWeek = parseFloat(document.getElementById('hoursPerWeek').value) || 0;
  
  // Validate inputs
  if (hourlyRate <= 0 || hoursPerWeek <= 0) {
    document.getElementById('result').textContent = "Please enter valid positive numbers.";
    return;
  }
  
  // Calculate weekly and annual salary
  const weeklySalary = hourlyRate * hoursPerWeek;
  const annualSalary = weeklySalary * 52; // 52 weeks in a year
  
  // Display the result rounded to 2 decimals
  document.getElementById('result').textContent = "Estimated Annual Salary: $" + annualSalary.toFixed(2);
}
