document.getElementById('calculateButton').addEventListener('click', function () {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        var bmi = weight / ((height / 100) * (height / 100));
        var resultElement = document.getElementById('result');

        var category;
        if (bmi < 18.5) {
            category = 'Underweight & Start Bulking';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal Weight';
        } else {
            category = 'Overweight & Start Cutting';
        }

        resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2) + '<br>Category: ' + category;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid weight and height.';
    }
});