var ANALOG = false;

window.onload = () => {
    let toggleState = () => {
        ANALOG = !ANALOG;
		updateHorologium();
        updateInscription();
    }
    let clock_div = document.getElementsByClassName("clockd")[0];
    clock_div.setAttribute('href', "#");
	clock_div.onclick = toggleState;
    document.addEventListener('keyup', (e) => {
        if (e.code === "Space") toggleState();
    });

    loadHorologium();
    loadInscription();
}