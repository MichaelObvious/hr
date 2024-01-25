var ANALOG = false;

var LAT = 41.893056;
var LON = 12.482778;
var ELE = 21.0;

function saveCoords(position) {
	LAT = position.coords.latitude;
	LON = position.coords.longitude;
	if (position.coords.altitude) {
		ELE = position.coords.altitude;
	}

	localStorage.setItem('LAT', LAT);
	localStorage.setItem('LON', LON);
	localStorage.setItem('ELE', ELE);
	//   console.log(LAT, LON, ELE);
}

function checkLocationStorage() {
    let existStorage;
	if (localStorage.getItem('LAT') === null
        || localStorage.getItem('LON') === null
        || localStorage.getItem('ELE') === null) {
        existStorage = false;

		localStorage.setItem('LAT', LAT);
		localStorage.setItem('LON', LON);
		localStorage.setItem('ELE', ELE);
	} else {
        existStorage = true;

		LAT = localStorage.getItem('LAT');
		LON = localStorage.getItem('LON');
		ELE = localStorage.getItem('ELE');
	}

    return existStorage;
}

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(saveCoords);
	} else {
		console.error("Could not get geolocation");
	}
}

function locationWarning() {
    let hr = document.getElementsByClassName("hr")[0];
    let footnotes = document.getElementsByClassName("footnote")[0];
    let warningdiv = document.getElementById("locationinfo");
    let warningbtn = document.getElementById("warningbtn");

    if (!checkLocationStorage()) {
        hr.style.display = 'none';
        footnotes.style.display = 'none';
        warningdiv.style.display = '';

        warningbtn.onclick = () => {
            hr.style.display = '';
            footnotes.style.display = '';
            warningdiv.style.display = 'none';

            getLocation();
        }
    } else {
        warningdiv.style.display = 'none';
        getLocation();
    }
}

function setupStateMachine() {
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
}

window.onload = () => {
    locationWarning();

    setupStateMachine();
    
    loadHorologium();
    loadInscription();
}