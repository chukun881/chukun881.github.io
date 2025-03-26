function calculateSalary() {
  const salaryPerDay = parseFloat(document.getElementById('salaryPerDay').value) || 0;
  const numDays = parseFloat(document.getElementById('numDays').value) || 0;
  const numHours = parseFloat(document.getElementById('numHours').value) || 0;
  const sundayHours = parseFloat(document.getElementById('sundayHours').value) || 0;
  const otHours = parseFloat(document.getElementById('otHours').value) || 0;
  const allowancePerDay = parseFloat(document.getElementById('allowancePerDay').value) || 0;
  const advance = parseFloat(document.getElementById('advance').value) || 0;

  // 1. Salary for Number of Days
  const salaryForDays = salaryPerDay * numDays;

  // 2. Salary for Hours Worked (Salary Per Hour = Salary Per Day / 8)
  const salaryForHours = numHours * (salaryPerDay / 8);

  // 3. Salary for Sunday Hours (Double the Salary Per Hour)
  const salaryForSunday = sundayHours * salaryPerDay * 2;

  // 4. Salary for OT Hours (1.5x Salary Per Hour)
  const salaryForOT = otHours * ((salaryPerDay / 8) * 1.5);

  // 5. Allowance Total
  const totalAllowance = allowancePerDay * numDays;

  // 6. Total Salary
  const totalSalary = salaryForDays + salaryForHours + salaryForSunday + salaryForOT + totalAllowance;

  // 7. Balance after Advance
  const balance = totalSalary - advance;

  // Update the UI with calculated values
  document.getElementById('salaryForDays').textContent = salaryForDays.toFixed(2);
  document.getElementById('salaryForHours').textContent = salaryForHours.toFixed(2);
  document.getElementById('salaryForSunday').textContent = salaryForSunday.toFixed(2);
  document.getElementById('salaryForOT').textContent = salaryForOT.toFixed(2);
  document.getElementById('totalAllowance').textContent = totalAllowance.toFixed(2);
  document.getElementById('totalSalary').textContent = totalSalary.toFixed(2);
  document.getElementById('balance').textContent = balance.toFixed(2);
}
