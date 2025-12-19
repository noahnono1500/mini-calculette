"use strict";

// Fonctions métier
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}


// UI
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
    const aVal = document.getElementById("a").value;
    const bVal = document.getElementById("b").value;
    const op = document.getElementById("op").value;

    const a = parseNumber(aVal);
    const b = parseNumber(bVal);

    if (a === null || b === null) {
        setHint("Veuillez saisir deux nombres valides.");
        setResult("—");
        return;
    }

    let res;
    switch (op) {
        case "add": res = add(a, b); break;
        case "sub": res = sub(a, b); break;
        case "mul": res = mul(a, b); break;
        default:
            setHint("Opération inconnue.");
            setResult("—");
            return;
    }

    if (typeof res !== "number" || !Number.isFinite(res)) {
        setHint("Fonction non implémentée (ou résultat invalide).");
        setResult("—");
        return;
    }

    setHint("");
    setResult(res);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calcBtn").addEventListener("click", handleCalculate);
});
