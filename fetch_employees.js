// ============================================================
// Part 1: Fetch API — Retrieve & Display JSON Data in Console
// ============================================================

const API_URL = "https://dummy.restapiexample.com/api/v1/employees";

async function fetchEmployees() {
  console.log("⏳ Fetching employee data from:", API_URL);
  console.log("─".repeat(50));

  try {
    const response = await fetch(API_URL);

    // Check if the HTTP response is OK (status 200–299)
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status} ${response.statusText}`);
    }

    const json = await response.json();

    // The API wraps data in { status, data, message }
    if (json.status !== "success") {
      throw new Error(`API Error: ${json.message}`);
    }

    const employees = json.data;

    console.log(`✅ Successfully fetched ${employees.length} employees.\n`);
    console.log("📋 Employee List:");
    console.log("─".repeat(50));

    employees.forEach((emp, index) => {
      console.log(`[${index + 1}] ID       : ${emp.id}`);
      console.log(`    Name     : ${emp.employee_name}`);
      console.log(`    Salary   : $${Number(emp.employee_salary).toLocaleString()}`);
      console.log(`    Age      : ${emp.employee_age}`);
      console.log("─".repeat(50));
    });

    // Also log the raw array for inspection
    console.log("\n📦 Raw Data (Array):");
    console.table(employees);

  } catch (error) {
    console.error("❌ Failed to fetch data:", error.message);
  }
}

// Run the function
fetchEmployees();