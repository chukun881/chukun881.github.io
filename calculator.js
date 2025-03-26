function calculateSalary() {
  const salaryPerDay = parseFloat(document.getElementById('salaryPerDay').value) || 0;
  const numDays = parseFloat(document.getElementById('numDays').value) || 0;
  const numHours = parseFloat(document.getElementById('numHours').value) || 0;
  const sundayHours = parseFloat(document.getElementById('sundayHours').value) || 0;
  const otHours = parseFloat(document.getElementById('otHours').value) || 0;
  const allowancePerDay = parseFloat(document.getElementById('allowancePerDay').value) || 0;
  const advance = parseFloat(document.getElementById('advance').value) || 0;

  const salaryPerHour = parseFloat((salaryPerDay / 8).toFixed(2)); // Convert to float after fixing decimals
  const sundayPayRate = parseFloat((salaryPerDay * 2 / 8).toFixed(2)); // Fix Sunday rate calculation
  const otPayRate = parseFloat((salaryPerHour * 1.5).toFixed(2)); // Correct OT rate calculation

  // Calculations
  const salaryForDays = salaryPerDay * numDays;
  const salaryForHours = numHours * salaryPerHour;
  const salaryForSunday = sundayHours * sundayPayRate;
  const salaryForOT = otHours * otPayRate;
  const totalAllowance = allowancePerDay * numDays;
  const totalSalary = salaryForDays + salaryForHours + salaryForSunday + salaryForOT + totalAllowance;
  const balance = totalSalary - advance;

  // Update UI
  document.getElementById('salaryForDays').textContent = `${numDays} days × ${salaryPerDay} = ${salaryForDays.toFixed(2)}`;
  document.getElementById('salaryForHours').textContent = `${numHours} hrs × ${salaryPerHour} = ${salaryForHours.toFixed(2)}`;
  document.getElementById('salaryForSunday').textContent = `Sunday ${sundayHours} hrs × ${sundayPayRate} = ${salaryForSunday.toFixed(2)}`;
  document.getElementById('salaryForOT').textContent = `${otHours} hrs × ${otPayRate} = ${salaryForOT.toFixed(2)}`;
  document.getElementById('totalAllowance').textContent = `${numDays} days × ${allowancePerDay} = ${totalAllowance.toFixed(2)}`; 
  document.getElementById('totalSalary').textContent = `${totalSalary.toFixed(2)}`;
  document.getElementById('advanceTaken').textContent = `${advance.toFixed(2)}`;
  document.getElementById('balance').textContent = `${balance.toFixed(2)}`; // No formula, just result
}