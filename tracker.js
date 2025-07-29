function calculateHealthData() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const systolic = document.getElementById("systolic").value;
    const diastolic = document.getElementById("diastolic").value;

    // Calculate BMI
    const bmi = weight / (height / 100) ** 2;
    document.getElementById("bmi-category").innerHTML = getBMICategory(bmi);

    // Calculate Blood Pressure
    const bloodPressure = `${systolic} mmHg / ${diastolic} mmHg`;
    document.getElementById("blood-pressure").value = bloodPressure;
    document.getElementById("blood-pressure-category").innerHTML = getBloodPressureCategory(systolic, diastolic);

    // Calculate Health Status
    const healthStatus = getHealthStatus(bmi, systolic, diastolic);
    document.getElementById("health-status").innerHTML = healthStatus;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight. You may need to gain weight to be healthy.";
    } else if (bmi < 25) {
        return "Normal weight. Your weight is healthy.";
    } else if (bmi < 30) {
        return "Overweight. You may need to lose weight to be healthy.";
    } else {
        return "Obese. You are at high risk of health problems due to your weight.";
    }
}

function getBloodPressureCategory(systolic, diastolic) {
    if (systolic < 90 && diastolic < 60) {
        return "Normal. Your blood pressure is healthy.";
    } else if (systolic < 120 && diastolic < 80) {
        return "Elevated. You are at risk of developing high blood pressure.";
    } else if (systolic < 140 && diastolic < 90) {
        return "Stage 1 Hypertension. You have high blood pressure and are at risk of health problems.";
    } else {
        return "Stage 2 Hypertension. You have severely high blood pressure and are at high risk of health problems.";
    }
}

function getHealthStatus(bmi, systolic, diastolic) {
    if (bmi < 18.5 && systolic < 90 && diastolic < 60) {
        return "Your health is normal. Keep up the good work!";
    } else if (bmi < 25 && systolic < 120 && diastolic < 80) {
        return "Your health is generally good, but you may need to make some lifestyle changes.";
    } else {
        return "Your health is abnormal. You should consult a doctor to discuss your weight and blood pressure.";
    }
}