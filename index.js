var ANALOG = false;

window.onload = () => {
    let clock_div = document.getElementsByClassName("clockd")[0];
    clock_div.setAttribute('href', "#");
	clock_div.onclick = () => {
		ANALOG = !ANALOG;
		updateHorologium();
        updateInscription();
	}

    loadHorologium();
    loadInscription();
}