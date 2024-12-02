const submitButton = document.getElementById('calculateButton');

submitButton.addEventListener('click', function () {

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').textContent = "Please enter valid height and weight!";
        document.getElementById('result').style.color = "red";
        return;
    }

    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    // Determine BMI category
    let category;
    if (bmi < 18.6) {
        category = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        category = "Normal Range";
    } else {
        category = "Overweight";
    }

    document.getElementById('result').textContent = `Your BMI is ${bmi} (${category})`;
    document.getElementById('result').style.color = "white";
})