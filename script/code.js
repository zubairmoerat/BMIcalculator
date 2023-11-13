document.getElementById('calculateButton').addEventListener('click', function () {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const bmi = weight / ((height / 100) * (height / 100));
        const resultElement = document.getElementById('result');

        let category;
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal Weight';
        } else {
            category = 'Overweight';
        }

        let comment;
        if (bmi < 18.5) {
            comment = 'You need to eat more!!';
        } else if (bmi >= 18.5 && bmi < 25) {
            comment = 'You are on track';
        } else {
            comment = 'You need to eat less!!';
        }

        resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2) + '<br>Category: ' + category + '<br>Comment: ' + comment;
        } else {
        document.getElementById('result').innerHTML = 'Please enter valid weight and height.';
    }
});