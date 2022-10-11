let yearBirth = Number(prompt('Укажите год Вашего рождения'));
let totalDate = '';
if (yearBirth === null) {
	alert('Жаль, что Вы не захотели ввести год рождения((');
} else {
	totalDate = 2022 - yearBirth;
}

let city = prompt('Укажите город в котором Вы жевете');

switch (city) {
	case null:
		alert('Жаль, что Вы не захотели ввести город в котором живете((');
		break;
	case "Киев":
		totalDate = `${totalDate}\n Вы жевете в столице Украины`;
		break;
	case "Вашингтон":
		totalDate = `${totalDate} \n Вы жевете в столице Соедененных Штатов Америки`;
		break;
	case "Лондон":
		totalDate = `${totalDate} \n Вы жевете в столице Англии`;
		break;
	default:
		totalDate += `\n Вы жевете в городе ${city}`;
		break;
}

let sport = prompt('Укажите Ваш любимый вид спорта');

switch (sport) {
	case null:
		alert('Жаль, что Вы не захотели ввести Ваш любимый вид спорта((');
		break;
	case "бокс":
		totalDate = `${totalDate}\n Круто! Хочешь стать Александром Усиком?`;
		break;
	case "борьба":
		totalDate = `${totalDate} \n Круто! Хочешь стать Мухаммедом Али?`;
		break;
	case "плавание":
		totalDate = `${totalDate} \n Круто! Хочешь стать Яной Клочковой?`;
		break;
	default:
		totalDate = ` ${totalDate}\n Вы выбрали другой вид спорта.`;
		break;
}

alert(totalDate)

