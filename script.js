document.getElementById('calculate-btn').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('bill-amount').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    document.getElementById('tip-amount').textContent = tipAmount.toFixed(2);
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
});
