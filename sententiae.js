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
        text: 'Tempus rerum edax',
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
        text: ' ',
        from: '',
    }
];

let loadSententiae = () => {
    let wsdmLabel = document.getElementById("wisdom");
    // let attrLabel = document.getElementById("attr");

    let today_hash = dayOfYear() * 37 + (new Date()).getFullYear() * 563;
    let idx = today_hash % sentences.length;
    let s = sentences[idx];
    wsdmLabel.innerHTML = s.text;

    // wsdmLabel.innerHTML = `«${s.text}»`;
    // attrLabel.innerHTML = `ex ${s.from}.`;
};