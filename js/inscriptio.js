function timehash(offset = 0) {
    let primes = [563,569,571,577,587,593,599,601,607,613,617,619];

    let time = new Date();
    time.setDate(time.getDate() + offset);
    let [d, sg, st, p, correction] = hour_name(time.getHours(), time.getMinutes(), time.getSeconds(), time.getDate(), time.getMonth()+1, time.getFullYear());
    
    let start = new Date(time.getFullYear(), 0, 0);
    let diff = time - start;
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    let year_day = day + correction;
    let year = time.getFullYear();
    let month = time.getMonth();
    let avg_month_length = 365.2425 / 12;
    let prime_idx = Math.floor(month / (verba.length / avg_month_length)) % primes.length;

    let hash = year * 1291
               + year_day * primes[prime_idx];
    
    return hash;
}

let wsdmLabel;
let wsdmDiv;

let changeText = (s) => {
    wsdmLabel.innerHTML = s.text;
    wsdmDiv.classList.remove("toerase");
    wsdmDiv.classList.add("towrite");
}

let updateInscription = () => {
    wsdmDiv = document.getElementById("wsddiv");
    wsdmLabel = document.getElementById("wisdom");
    // let attrLabel = document.getElementById("attr");

    let idx = timehash() % verba.length;
    let s = verba[idx];
    if (wsdmLabel.innerHTML !== s.text) {
        if (wsdmLabel.innerHTML === "...") {
            changeText(s);
        } else {
            wsdmDiv.classList.remove("towrite");
            wsdmDiv.classList.add("toerase");
            setTimeout(changeText, 15 * 1000, s);
        }
    }

    if (ANALOG) {
        wsdmDiv.classList.remove("wsdmpad");
        wsdmDiv.classList.add("wsdmunpad");
    } else {
        wsdmDiv.classList.remove("wsdmunpad");
        wsdmDiv.classList.add("wsdmpad");
    }

    // wsdmLabel.innerHTML = `«${s.text}»`;
    // attrLabel.innerHTML = `ex ${s.from}.`;
};

function loadInscription() {
    updateInscription();
    setInterval(updateInscription, 10 * 60 * 1000);
}