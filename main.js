const homepage = "https://freedomonthemove.org";
const baseNoticeUrl = "https://app.freedomonthemove.org/advertisements/";
const short = require('short-uuid');
const translator = short();

window.onload = function(e) {
	try {
		const sid = window.location.pathname.replace("/", "");
		const uuid = translator.toUUID(sid);

		if (uuid === '00000000-0000-0000-0000-000000000000') {
			window.location.href = homepage;
		}

		window.location.href = baseNoticeUrl + uuid;
	} catch {
		window.location.href = homepage;
	}
}
