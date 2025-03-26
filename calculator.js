function calculateSalary() {
  const salaryPerDay = parseFloat(document.getElementById('salaryPerDay').value) || 0;
  const numDays = parseFloat(document.getElementById('numDays').value) || 0;
  const numHours = parseFloat(document.getElementById('numHours').value) || 0;
  const sundayHours = parseFloat(document.getElementById('sundayHours').value) || 0;
  const otHours = parseFloat(document.getElementById('otHours').value) || 0;
  const allowancePerDay = parseFloat(document.getElementById('allowancePerDay').value) || 0;
  const advance = parseFloat(document.getElementById('advance').value) || 0;
  const salaryPerHour = (salaryPerDay / 8).toFixed(2);
  const sundayPayRate = (salaryPerDay * 2).toFixed(2); // Calculate Sunday pay rate
  const otPayRate = (salaryPerHour * 1.5).toFixed(2); // Calculate OT pay rate


  // Calculations
  const salaryForDays = salaryPerDay * numDays;
  const salaryForHours = numHours * (salaryPerDay / 8);
  const salaryForSunday = sundayHours * salaryPerDay * 2;
  const salaryForOT = otHours * ((salaryPerDay / 8) * 1.5);
  const totalAllowance = allowancePerDay * numDays;
  const totalSalary = salaryForDays + salaryForHours + salaryForSunday + salaryForOT + totalAllowance;
  const balance = totalSalary - advance;

  // Update UI
  document.getElementById('salaryForDays').textContent = `${salaryPerDay} days × ${numDays} = ${salaryForDays.toFixed(2)}`;
  document.getElementById('salaryForHours').textContent = `${numHours} hours × ${salaryPerHour} = ${salaryForHours.toFixed(2)}`;
  document.getElementById('salaryForSunday').textContent = `${salaryForSunday.toFixed(2)} ( ${sundayHours} × ${sundayPayRate} )`;
  document.getElementById('salaryForOT').textContent = `${salaryForOT.toFixed(2)} ( ${otHours} × ${otPayRate} )`;
  document.getElementById('totalAllowance').textContent = `${totalAllowance.toFixed(2)} ( ${allowancePerDay} × ${numDays} )`;
  document.getElementById('totalSalary').textContent = `${totalSalary.toFixed(2)}`;
  document.getElementById('balance').textContent = `${balance.toFixed(2)} ( ${totalSalary.toFixed(2)} - ${advance} )`;
  document.getElementById('advanceTaken').textContent = `${advance.toFixed(2)}`;
}