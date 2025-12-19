"use strict";

function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }

function parseNumber(value) {
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
}

function setHint(msg) {
    document.getElementById("hint").textContent = msg || "";
}

function setResult(value) {
    document.getElementById("result").textContent = value;
}

function handleCalculate() {
    const a = parseNumber(document.getElementById("a").value);
    const b = parseNumber(document.getElementById("b").value);
    const op = document.getElementById("op").value;

    if (a === null || b === null) {
        setHint("Veuillez saisir deux nombres valides.");
        setResult("—");
        return;
    }

    let res;
    if (op === "add") res = add(a, b);
    else if (op === "sub") res = sub(a, b);
    else if (op === "mul") res = mul(a, b);
    else {
        setHint("Opération inconnue.");
        setResult("—");
        return;
    }

    setHint("");
    setResult(res);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calcBtn").addEventListener("click", handleCalculate);
});
