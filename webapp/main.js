document.addEventListener("DOMContentLoaded", function () {
    let counterValue = 0;
    const Compteur = document.getElementById('Compteur');
    const increaseBoutton = document.getElementById('increaseButton');
    const decreaseBoutton = document.getElementById('decreaseButton');
    const resetBoutton = document.getElementById('resetButton');

    function updateCompteurDisplay() {
        Compteur.textContent = counterValue;
    }



    function incrementCounter() {
        counterValue++;
        updateCompteurDisplay();
    }



    function decrementCounter() {
        counterValue--;
        updateCompteurDisplay();
    }



    function resetCounter() {
        counterValue = 0;
        updateCompteurDisplay();
    }



    increaseBoutton.addEventListener('click', incrementCounter);
    decreaseBoutton.addEventListener('click', decrementCounter);
    resetBoutton.addEventListener('click', resetCounter);
    updateCompteurDisplay();
});
