var ANALOG = false;

window.onload = () => {
    ANALOG = "true" === localStorage.getItem("analog");

    let toggleState = () => {
        ANALOG = !ANALOG;
        localStorage.setItem("analog", ANALOG);
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