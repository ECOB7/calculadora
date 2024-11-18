const display = document.getElementById("display");

// função de add valor
function appendValue(value) {
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

// Função de apagar
function clearDisplay() {
  display.textContent = "0";
}

// função de calcular
function calculate() {
  try {
    const result = eval(display.textContent);
    display.textContent = result === Infinity || isNaN(result) ? "Error" : result;
  } catch (e) {
    display.textContent = "Error";
  }
}
