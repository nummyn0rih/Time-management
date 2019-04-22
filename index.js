module.exports = function date(dateStr) {
	const date = new Date(dateStr);
	const timeType = { years: 'years', months: 'months', days: 'days', hours: 'hours', minutes: 'minutes' };
	const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', hour12: false, minute: 'numeric' };

	return {
		get value() {
			let formattedDate = date.toLocaleDateString('en-GB', options);
			formattedDate = formattedDate.replace(/(\d+).(\d+).(\d+), (\d+:\d)/, '$3-$1-$2 $4');
			return formattedDate;
		},

		add: function (num, str) {
			if ( Number.isNaN(num) || num < 0 || !timeType.hasOwnProperty(str) ) {
				throw new TypeError('Invalid value');
			} else if (str == timeType.years) {
				date.setMonth( date.getMonth() + num * 12 );
			} else if (str == timeType.months) {
				date.setMonth( date.getMonth() + num );
			} else if (str == timeType.days) {
				date.setDate( date.getDate() + num );
			} else if (str == timeType.hours) {
				date.setHours( date.getHours() + num );
			} else if (str == timeType.minutes) {
				date.setMinutes( date.getMinutes() + num );
			}
			return this;
		},

		subtract: function (num, str) {
			if ( Number.isNaN(num) || num < 0 || !timeType.hasOwnProperty(str) ) {
				throw new TypeError('Invalid value');
			} else if (str == timeType.years) {
				date.setMonth( date.getMonth() - num * 12 );
			} else if (str == timeType.months) {
				date.setMonth( date.getMonth() - num );
			} else if (str == timeType.days) {
				date.setDate( date.getDate() - num );
			} else if (str == timeType.hours) {
				date.setHours( date.getHours() - num );
			} else if (str == timeType.minutes) {
				date.setMinutes( date.getMinutes() - num );
			}
			return this;
		}
	};
}