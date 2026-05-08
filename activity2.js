document.getElementById('salaryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const empName = document.getElementById('empName').value;
    const basicSalary = Number(document.getElementById('basicSalary').value);
    const workingDays = Number(document.getElementById('workingDays').value);
    const bonus = Number(document.getElementById('bonus').value);
    const totalDays = 30;
    let grossSalary, tax, netSalary;

    function calculateGrossSalary() {
        let perDaySalary = basicSalary / totalDays;
        let earnedSalary = perDaySalary * workingDays;
        grossSalary = earnedSalary + bonus;
    }

    function calculateTax() {
        if (grossSalary <= 25000) {
            tax = grossSalary * 0.05;
        } else {
            tax = grossSalary * 0.10;
        }
    }

    function calculateNetSalary() {
        netSalary = grossSalary - tax;
    }

    calculateGrossSalary();
    calculateTax();
    calculateNetSalary();

    document.getElementById('result').innerHTML = `
        <strong>Employee Name:</strong> ${empName}<br>
        <strong>Gross Salary:</strong> ₹${grossSalary.toFixed(2)}<br>
        <strong>Tax Deduction:</strong> ₹${tax.toFixed(2)}<br>
        <strong>Net Salary:</strong> ₹${netSalary.toFixed(2)}
    `;
});