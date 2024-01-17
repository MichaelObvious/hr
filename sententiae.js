let sentences = [
    {
        text: 'Dum loquimur fugerit invida aetas: carpe diem, quam minimum credula postero',
        from: 'Horatii Carminis I, XI',
    },
    {
        text: 'Sed fugit interea fugit irreparabile tempus',
        from: 'Virgilii Georgicon III, CCLXXXIV',
    },
    {
        text: 'Festina lente',
        from: 'Svetonii De vita Caesarum XXV, IV',
    },
    {
        text: 'Rapiamus, amici, occasionem de die, dumque virent genua',
        from: 'Horatii Epod.. XVIII',
    },
    {
        text: 'Non semper violae nec hiantia lilia florent, et riget amissa spina relicta rosa',
        from: 'Ovidii Arte amatoria II',
    },
    {
        text: 'Neque enim consistere flumen nec levis hora potest: sed ut unda impellitur unda urgeturque prior veniente urgetque priorem, tempora sic fugiunt pariter pariterque sequuntur',
        from: 'Ovidii Metamorphoseon XV',
    },
    {
        text: 'Et nova sunt semper; nam quod fuit ante, relictum est, fitque, quod haud fuerat, momentaque cuncta novantur',
        from: 'Ovidii Metamorphoseon XV',
    },
    {
        text: 'Stat sua cuique dies, breve et inreparabile tempus omnibus est vitae',
        from: 'Ovidii Eneidon X',
    },
    {
        text: 'Sine sole sileo?',
        from: 'Meridiana quadam',
    },
    {
        text: 'Vita brevis, ars longa, occasio praeceps, experimentum periculosum, iudicium difficile',
        from: 'Hippocratis Aphorismon',
    },
    {
        text: 'Tempus edax rerum, tuque, invidiosa vetustas, omnia destruitis vitiataque dentibus aevi paulatim lenta consumitis omnia morte!',
        from: 'Ovidii Metamorphoseon XV',
    },
    {
        text: 'Vitae summa brevis spem nos vetat inchoare longam',
        from: 'Horatii Carminis I, IV',
    },
    {
        text: 'Omnia tempus habent, et momentum suum cuique negotio sub caelo',
        from: 'Ecclesiastae libro III',
    },
    {
        text: 'Numerum dierum et tempus dedit illi et dedit illi potestatem eorum, quae sunt super terram',
        from: 'Siracidis libro XVII',
    },
    {
        text: 'Memento famis in tempore abundantie et necessitatum paupertatis in die divitiarum',
        from: 'Siracidis libro XVIII',
    },
    {
        text: 'Respice post te; hominem te memento, memento mori',
        from: 'more Romano',
    },
    {
        text: 'Tempus enim prope est',
        from: 'Apocalypson libro XXII',
    },
    {
        text: 'Est omnino nulla opus tempus persequi; non aufugit a nobis, sed ad nos accurrit',
        from: 'Antonii Bloom Incipio orationis',
    },
    {
        text: 'Dinumerare dies nostros sic doce nos, ut inducamus cor ad sapientiam',
        from: 'Psalmo XC (LXXXIX)',
    },
    {
        text: 'Horas numero, nec modo serenas',
        from: 'ludo verborum',
    },
    {
        text: 'Sensim sed propere fluit irremeabilis hora: consule ne perdas absque labore diem',
        from: 'Meridiana quadam',
    },
    {
        text: 'Tempus scire cupis? Dicam propere: ut homo honestus tempus est agere',
        from: 'Meridiana quadam',
    },
    {
        text: 'Quod addo, detraho vitae',
        from: 'Meridiana quadam',
    },
    {
        text: 'Quod morire patet, qua morire latet',
        from: 'Meridiana quadam',
    },
    {
        text: 'Esse, fuisse, fore, tria florida sunt sine flore, / omne simul periit quod fuit, est, et erit. / Quod fuit, est, et erit, periit spatio brevis horae, / ergo parum refert esse, fuisse, fore.',
        from: 'Meridiana quadam',
    },
    {
        text: 'Quot horarum lapsus, tot ad mortem passus',
        from: 'Meridiana quadam',
    },
    {
        text: 'Quid stas? Transit hora',
        from: 'Meridiana quadam',
    },
    {
        text: 'Quota est hora? Forsitan tua',
        from: 'Meridiana quadam',
    },
    {
        text: 'Memento nos ambo dinumerare: tu meas, ego tuas.',
        from: '',
    },
    {
        text: 'Senescis aspiciendo',
        from: 'Meridiana quadam',
    },
    {
        text: 'Die dies traditur',
        from: 'Meridiana quadam',
    },
    {
        text: 'Dum tempus habemus, operemur bonum',
        from: 'ad Galatas Epistula VI',
    },
    {
        text: 'Errare potest faber, errare potest ferro, nec ego autem erro',
        from: 'Meridiana quadam',
    },
    {
        text: 'Finiet una labores',
        from: 'Meridiana quadam',
    },
    {
        text: 'Haec ultima multis',
        from: 'Meridiana quadam',
    },
    {
        text: 'Hora est iam nos de somno surgere',
        from: 'ad Romanos Episttula XIII',
    },
    {
        text: 'Iam propera nec te venturas differ in horas, qui non est hodie, cras minus aptus erit',
        from: 'Ovidii Remediis Amoris',
    },
    {
        text: 'Labora dum lucet',
        from: 'Meridiana quadam',
    },
    {
        text: 'Dies dividitur in horas duodecim bis, in una postremam non recensebis',
        from: 'Meridiana quadam',
    },
    {
        text: 'Mane piger stertis, fugit hora',
        from: 'Meridiana quadam',
    },
    {
        text: 'Maneo nemini',
        from: 'Meridiana quadam',
    },
    {
        text: 'Me ortum vides, forsan non occasum',
        from: 'Meridiana quadam',
    },
    {
        text: 'Meam non tuam novisti',
        from: 'Meridiana quadam',
    },
    {
        text: 'Noli abutere',
        from: 'Meridiana quadam',
    },
    {
        text: 'Ne differas de die in diem',
        from: 'Meridiana quadam',
    },
    {
        text: 'Nulla dies sine linea',
        from: 'Plinii Naturali historia XXXV',
    },
    {
        text: 'Nulli optabilis dabitur mora, irrevocabilis labitur hora: ne sit inutilis, semper labora, neve sis futilis, vigila, ora:',
        from: 'Meridiana quadam',
    },
    {
        text: 'Numquam reditura',
        from: 'Meridiana quadam',
    },
    {
        text: 'Horam aspice, iamque abitam, solis metior passus, hominis vitam',
        from: 'Meridiana quadam',
    },
    {
        text: 'Omnibus exoritur',
        from: 'Meridiana quadam',
    },
    {
        text: 'Omnibus brevis, ultima multis',
        from: 'Meridiana quadam',
    },
    {
        text: 'Silens loquor',
        from: 'Meridiana quadam',
    },
    {
        text: 'Sol lucet omnibus',
        from: 'Meridiana quadam',
    },
    {
        text: 'Sol non occidat super iracundiam vestram',
        from: 'ad Ephesios epistula IV',
    },
    {
        text: 'Soli soli soli',
        from: 'verborum ludo',
    }
];

function hourhash() {
    let time = new Date();
    let [d, sg, st, p, correction] = hour_name(time.getHours(), time.getMinutes(), time.getSeconds(), time.getDate(), time.getMonth()+1, time.getFullYear());
    
    let start = new Date(time.getFullYear(), 0, 0);
    let diff = time - start;
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    let year_day = day + correction;

    let hash = (new Date()).getFullYear() * 3503909
               + year_day * 1200077
               + d * 563
               + sg * 37;
    
    return hash;
}

let wsdmLabel;
let wsdmDiv;

let changeText = (s) => {
    wsdmLabel.innerHTML = s.text;
    wsdmDiv.classList.remove("toerase");
    wsdmDiv.classList.add("towrite");
}

let loadSententiae = () => {
    wsdmDiv = document.getElementById("wsddiv");
    wsdmLabel = document.getElementById("wisdom");
    // let attrLabel = document.getElementById("attr");

    let idx = hourhash() % sentences.length;
    let s = sentences[idx];
    if (wsdmLabel.innerHTML !== s.text) {
        wsdmDiv.classList.remove("towrite");
        wsdmDiv.classList.add("toerase");
        if (wsdmLabel.innerHTML === "...") {
            changeText(s);
        } else {
            setTimeout(changeText, 15000, s);
        }
    }
    setTimeout(loadSententiae, 20000);

    // wsdmLabel.innerHTML = `«${s.text}»`;
    // attrLabel.innerHTML = `ex ${s.from}.`;
};