const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const convertButton = document.getElementById("convert");
const resetButton = document.getElementById("reset");
const reverseButton = document.getElementById("reverse");

convertButton.addEventListener("click", () => {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = (celsius * 9/5) + 32;
  fahrenheitInput.value = fahrenheit.toFixed(2);

  // Menambahkan cara kalkulasi
  const calculation = document.getElementById("calculation");
  calculation.innerHTML = `${celsius}°C * (9/5) + 32 = ${fahrenheit}°F`;
});

resetButton.addEventListener("click", () => {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  calculation.innerHTML = "";
});

reverseButton.addEventListener("click", () => {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  const celsius = (fahrenheit - 32) * 5/9;
  celsiusInput.value = celsius.toFixed(2);

  // Menambahkan cara kalkulasi
  const calculation = document.getElementById("calculation");
  calculation.innerHTML = `${fahrenheit}°F - 32 * (5/9) = ${celsius}°C`;
});
