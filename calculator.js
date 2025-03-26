function calculateSalary() {
  const salaryPerDay = parseFloat(document.getElementById('salaryPerDay').value) || 0;
  const numDays = parseFloat(document.getElementById('numDays').value) || 0;
  const numHours = parseFloat(document.getElementById('numHours').value) || 0;
  const sundayHours = parseFloat(document.getElementById('sundayHours').value) || 0;
  const otHours = parseFloat(document.getElementById('otHours').value) || 0;
  const allowancePerDay = parseFloat(document.getElementById('allowancePerDay').value) || 0;
  const advance = parseFloat(document.getElementById('advance').value) || 0;

  // Calculations
  const salaryForDays = salaryPerDay * numDays;
  const salaryForHours = numHours * (salaryPerDay / 8);
  const salaryForSunday = sundayHours * salaryPerDay * 2;
  const salaryForOT = otHours * ((salaryPerDay / 8) * 1.5);
  const totalAllowance = allowancePerDay * numDays;
  const totalSalary = salaryForDays + salaryForHours + salaryForSunday + salaryForOT + totalAllowance;
  const balance = totalSalary - advance;

  // Update UI
  document.getElementById('salaryForDays').textContent = `${salaryForDays.toFixed(2)} ( ${salaryPerDay} × ${numDays} )`;
  document.getElementById('salaryForHours').textContent = `${salaryForHours.toFixed(2)} ( ${numHours} × (${salaryPerDay} ÷ 8) )`;
  document.getElementById('salaryForSunday').textContent = `${salaryForSunday.toFixed(2)} ( ${sundayHours} × ${salaryPerDay} × 2 )`;
  document.getElementById('salaryForOT').textContent = `${salaryForOT.toFixed(2)} ( ${otHours} × ((${salaryPerDay} ÷ 8) × 1.5) )`;
  document.getElementById('totalAllowance').textContent = `${totalAllowance.toFixed(2)} ( ${allowancePerDay} × ${numDays} )`;
  document.getElementById('totalSalary').textContent = `${totalSalary.toFixed(2)}`;
  document.getElementById('balance').textContent = `${balance.toFixed(2)} ( ${totalSalary.toFixed(2)} - ${advance} )`;
}