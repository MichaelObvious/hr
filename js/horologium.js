const JAN = 1;
const FEB = 2;
const MAR = 3;
const APR = 4;
const MAY = 5;
const JUN = 6;
const JUL = 7;
const AUG = 8;
const SEP = 9;
const OCT = 10;
const NOV = 11;
const DEC = 12;

function fmod(a, b) {
	return a % b;
}

function is_leap_year(year) {
	return year % 4 === 0
		&& !(year % 100 === 0 && !(year % 400 === 0));
}

function month_length(month, year) {
	console.assert(month <= 12 && month >= 1);
	switch (month) {
		case JAN:
		case MAR:
		case MAY:
		case JUL:
		case AUG:
		case OCT:
		case DEC:
			return 31;
		case APR:
		case JUN:
		case SEP:
		case NOV:
			return 30;
		case FEB: {
			if (is_leap_year(year)) {
				return 29;
			} else {
				return 28;
			}
		}
		default:
			console.assert("unreacheable");
	}
}

function roman_numeral(num) {
	let str = "";
	let vals = [
		1000, 900, 500, 400,
		100, 90, 50, 40,
		10, 9, 5, 4,
		1
	];
	let syms = [
		"M", "CM", "D", "CD",
		"C", "XC", "L", "XL",
		"X", "IX", "V", "IV",
		"I"
	];
	let i = 0;
	while (num > 0) {
		while (num >= vals[i]) {
			str += syms[i];
			num -= vals[i];
		}
		i++;
	}
	return str;
}

function month_name(month) {
	console.assert(month <= 12 && month >= 1);
	switch (month) {
		case JAN:
			return "Iānuāriās";
		case FEB:
			return "Februāriās";
		case MAR:
			return "Martiās";
		case APR:
			return "Aprīlis";
		case MAY:
			return "Maiās";
		case JUN:
			return "Iūniās";
		case JUL:
			return "Iūliās";
		case AUG:
			return "Augustī";
		case SEP:
			return "Septembris";
		case OCT:
			return "Octōbris";
		case NOV:
			return "Novembris";
		case DEC:
			return "Decembris";
		default:
			console.assert("unreacheable");
	}
}

function day_name(day, month, year) {
	let str = "";
	let kalendae = 1;
	let idus = 0;
	let nonae = 0;
	let mlength = month_length(month, year);
	switch (month) {
		case MAR:
		case MAY:
		case JUL:
		case OCT:
			idus = 15;
			break;
		case JAN:
		case AUG:
		case DEC:
		case APR:
		case JUN:
		case SEP:
		case NOV:
		case FEB:
			idus = 13;
			break;
		default:
			console.assert("unreacheable");
	}
	nonae = idus - 8;

	if (day != kalendae && day != mlength
		&& day != nonae && day != nonae - 1
		&& day != idus && day != idus - 1) {
		str += "a.&nbsp;d.&nbsp;";

		if (day > kalendae && day < nonae) {
			str += roman_numeral(nonae + 1 - day);
			str += "&nbsp;";
		} else if (day > kalendae && day < idus) {
			str += roman_numeral(idus + 1 - day);
			str += "&nbsp;";
		} else if (day > kalendae) {
			str += roman_numeral(mlength + 2 - day);
			str += "&nbsp;";
		}
	} else if (day === mlength || day === nonae - 1 || day === idus - 1) {
		str += "Prid.&nbsp;";
	}

	if (day === kalendae) {
		str += "Kal.&nbsp;";
		str += month_name(month);
	} else if (day <= nonae) {
		str += "Nōn.&nbsp;";
		str += month_name(month);
	} else if (day <= idus) {
		str += "Eid.&nbsp;";
		str += month_name(month);
	} else {
		str += "Kal.&nbsp;";
		str += month_name((month) % 12 + 1);
	}

	return str;
}

function year_name(year) {
	let str = "";
	str += roman_numeral(year + 753);
	str += "&nbsp;AVC";
	return str;
}

// source: https://en.wikipedia.org/wiki/Sunrise_equation#Example_of_implementation_in_Python
function day_calc(day, month, year, f, l_w, elevation) {
	let date = new Date(year, month - 1, day, 6, 0, 0);
	// console.log(date);
	let sunrise, sunset;

	let ts = Math.floor(date.valueOf() / 1000.0);
	let J_date = ts / 86400.0 + 2440587.5;

	let n = Math.ceil(J_date - (2451545.0 + 0.0009) + 69.184 / 86400.0);
	let J_ = n + 0.0009 - l_w / 360.0;
	let M_degrees = fmod(357.5291 + 0.98560028 * J_, 360);
	let M_radians = M_degrees * Math.PI / 180.0;
	let C_degrees = 1.9148 * Math.sin(M_radians) + 0.02 * Math.sin(2 * M_radians) + 0.0003 * Math.sin(3 * M_radians);
	let L_degrees = fmod(M_degrees + C_degrees + 180.0 + 102.9372, 360);
	let Lambda_radians = L_degrees * Math.PI / 180.0;
	let J_transit = 2451545.0 + J_ + 0.0053 * Math.sin(M_radians) - 0.0069 * Math.sin(2 * Lambda_radians);
	let sin_d = Math.sin(Lambda_radians) * Math.sin((23.4397) * Math.PI / 180.0);
	let cos_d = Math.cos(Math.asin(sin_d));
	let some_cos = (Math.sin((-0.833 - 2.076 * Math.sqrt(elevation) / 60.0) * Math.PI / 180.0) - Math.sin(f * Math.PI / 180.0) * sin_d) / (Math.cos((f) * Math.PI / 180.0) * cos_d);
	if (some_cos < -1.0 || some_cos > 1.0) {
		return [0, 0];
	}
	let w0_radians = Math.acos(some_cos);
	let w0_degrees = w0_radians * 180.0 / Math.PI;
	let j_rise = J_transit - w0_degrees / 360;
	let j_set = J_transit + w0_degrees / 360;

	sunrise = (j_rise - 2440587.5) * 86400;
	sunset = (j_set - 2440587.5) * 86400;

	return [sunrise, sunset];
}

function hour_name(hour, minute, sec, day, month, year) {
	let progress;
	let str = "";
	let segment;
	let isday;
	let correction = 0;

	// no problem for month, it automatically fixes itself
	let [yesterday_sunrise, yesterday_sunset] = day_calc(day - 1, month, year, LAT, LON, ELE);
	let [today_sunrise, today_sunset] = day_calc(day, month, year, LAT, LON, ELE);
	let [tomorrow_sunrise, tomorrow_sunset] = day_calc(day + 1, month, year, LAT, LON, ELE);

	let d = new Date(yesterday_sunset * 1000.0);
	let prev_set_time = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();

	d = new Date(today_sunrise * 1000.0);
	let rise_time = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();

	d = new Date(today_sunset * 1000.0);
	let set_time = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();

	d = new Date(tomorrow_sunrise * 1000.0);
	let snd_rise_time = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();

	// printf("%02d:%02d\n", prev_set_time/60, prev_set_time%60);
	// printf("%02d:%02d - %02d:%02d\n", rise_time/60, rise_time%60, set_time/60, set_time%60);
	// printf("%02d:%02d\n", snd_rise_time/60, snd_rise_time%60);

	let daylight_duration = set_time - rise_time;
	let hour_duration = daylight_duration / 12;
	// printf("%02d:%02d\n", hour_duration/60, hour_duration%60);

	let prev_night_duration = 24 * 3600 - prev_set_time + rise_time;
	let prev_vigilia_duration = prev_night_duration / 4;
	let next_night_duration = 24 * 3600 - set_time + snd_rise_time;
	let next_vigilia_duration = next_night_duration / 4;
	// printf("%02d:%02d\n", prev_night_duration/60, prev_night_duration%60);
	// printf("%02d:%02d\n", next_night_duration/60, next_night_duration%60);
	// printf("%02d:%02d\n", prev_vigilia_duration/60, prev_vigilia_duration%60);
	// printf("%02d:%02d\n", next_vigilia_duration/60, next_vigilia_duration%60);

	let current_time = hour * 3600 + minute * 60 + sec;

	if (current_time >= rise_time && current_time < set_time) {
		isday = 1;
		progress = ((current_time - rise_time) % hour_duration) / hour_duration;
		// console.log(((current_time - rise_time) / hour_duration) + 1);
		let hour = Math.floor((current_time - rise_time) / hour_duration) + 1;
		segment = hour - 1;
		str += roman_numeral(hour);
		// switch((current_time - rise_time) / hour_duration) {
		// 	case 0:
		// 		fprintf(sink, "prīma");
		//         break;
		// 	case 1:
		// 		fprintf(sink, "secunda");
		//         break;
		// 	case 2:
		// 		fprintf(sink, "tertia");
		//         break;
		// 	case 3:
		// 		fprintf(sink, "quārta");
		//         break;
		// 	case 4:
		// 		fprintf(sink, "quīnta");
		//         break;
		// 	case 5:
		// 		fprintf(sink, "sexta");
		//         break;
		// 	case 6:
		// 		fprintf(sink, "septima");
		//         break;
		// 	case 7:
		// 		fprintf(sink, "octāva");
		//         break;
		// 	case 8:
		// 		fprintf(sink, "nōna");
		//      Math.floor(vigilia)   break;
		// 	case 10:
		// 		fprintf(sink, "ūndecima");
		//         break;
		// 	case 11:
		// 		fprintf(sink, "duodecima");
		//         break;
		//     default:
		//         console.error("unreacheable");
		// }
		str += " diēī hōra";
	} else {
		isday = 0;
		let vigilia;
		if (current_time < rise_time) {
			vigilia = (current_time + 24 * 3600 - prev_set_time) / prev_vigilia_duration;
			progress = ((current_time + 24 * 3600 - prev_set_time) % prev_vigilia_duration) / prev_vigilia_duration;
		} else {
			vigilia = (current_time - set_time) / next_vigilia_duration;
			progress = ((current_time - set_time) % next_vigilia_duration) / next_vigilia_duration;
		}
		vigilia = Math.floor(vigilia) + 1;
		segment = vigilia - 1;

		str += roman_numeral(vigilia);

		if (vigilia === 2 && current_time < rise_time) {
			correction = -1;
		}
		if (vigilia === 3 && current_time > set_time) {
			correction = 1;
		}
		// switch (vigilia) {
		// 	case 0:
		// 		fprintf(sink, "prīma");
		//         break;
		// 	case 1:
		// 		fprintf(sink, "secunda");
		//         break;pt installation/activation (see below) for URLs accessed by the user insi
		// 		fprintf(sink, "tertia");
		//         break;
		// 	case 3:
		// 		fprintf(sink, "quārta");
		//         break;
		//     default:
		//         console.error("unreacheable");
		// }
		str += " noctis vigilia";
	}
	return [isday, segment, str, progress, correction];
}

let analog_clock;
let clock_needle;
let text_clock;
let progress_bar;

let updateHorologium = () => {
	let time = new Date();
	let [isday, segment, h, progress, correction] = hour_name(time.getHours(), time.getMinutes(), time.getSeconds(), time.getDate(), time.getMonth() + 1, time.getFullYear());
	let d = day_name(time.getDate() + correction, time.getMonth() + 1, time.getFullYear());
	let y = year_name(time.getFullYear());

	let angle;

	let content = document.querySelector('html');
	if (isday === 1) {
		content.classList.remove('inverted');
		text_clock.classList.remove('glow');

		angle = 90 + (180 / 12) * (segment + progress);
	} else {
		content.classList.add('inverted');
		text_clock.classList.add('glow');

		angle = -90 + (180 / 4) * (segment + progress);
	}

	progress_bar.value = progress * 100.0;
	clock_needle.style.transform = `rotate(${angle}deg)`;

	if (ANALOG) {
		// text_clock.style.display = 'none';
		progress_bar.style.display = 'none';
		analog_clock.style.display = '';

		text_clock.innerHTML = `<span style="font-size: 75%;">${d}</span>`;
	} else {
		text_clock.style.display = '';
		progress_bar.style.display = '';
		analog_clock.style.display = 'none';

		text_clock.innerHTML = `<big>${h}</big><br/><div style="padding-top: 12px;"><small>${d}</small><br/><small>${y}</small>`;
	}
};

function loadHorologium() {
	// console.log(LAT, LON, ELE);

	progress_bar = document.getElementById("prog");
	text_clock = document.getElementById("textclock");
	analog_clock = document.getElementById("analogclock");
	clock_needle = document.getElementById("needle");

	updateHorologium();
	setInterval(updateHorologium, 1000);
};
