let sentences = [
    {
        text: 'Dum loquimur fugerit invida / aetas: carpe diem, quam minimum credula postero',
        from: 'Oratii Carmina I, XI',
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
        text: 'Rapiamus, amici, / occasionem de die, dumque virent genua',
        from: 'Horatii Epod.. XVIII',
    },
    {
        text: 'Non semper violae nec hiantia lilia florent, / et riget amissa spina relicta rosa',
        from: 'Ovidii Arte amatoria II',
    },
    {
        text: 'Neque enim consistere flumen / nec levis hora potest: sed ut unda impellitur unda / urgeturque prior veniente urgetque priorem, / tempora sic fugiunt pariter pariterque sequuntur',
        from: 'Ovidii Metamorphoseon XV',
    },
    {
        text: 'Et nova sunt semper; nam quod fuit ante, relictum est, / fitque, quod haud fuerat, momentaque cuncta novantur',
        from: 'Ovidii Metamorphoseon XV',
    },
    {
        text: 'Stat sua cuique dies, breve et inreparabile tempus / omnibus est vitae',
        from: 'Ovidii Eneidon X',
    },
    {
        text: 'Sine sole sileo?',
        from: 'Meridiana quadam',
    }
    ,
    {
        text: '',
        from: '',
    }
];

let loadSententiae = () => {
    let wsdmLabel = document.getElementById("wisdom");
    // let attrLabel = document.getElementById("attr");

    if (localStorage.getItem('sentences') === null) {
        localStorage.setItem('sentences', JSON.stringify([]));
    }

    console.log(localStorage.getItem('sentences'));

    let used_idx = JSON.parse(localStorage.getItem('sentences'));
    if (used_idx.length == sentences.length) {
        used_idx = [];
    }

    let i = 0;
    let idx;
    do {
        idx = Math.floor(Math.random() * sentences.length - 0.0001);
    } while (i < 1000 && used_idx.includes(idx));
    used_idx.push(idx);

    let s = sentences[idx];
    wsdmLabel.innerHTML = s.text;

    localStorage.setItem('sentences', JSON.stringify(used_idx));

    // wsdmLabel.innerHTML = `«${s.text}»`;
    // attrLabel.innerHTML = `ex ${s.from}.`;
};