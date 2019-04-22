module.exports = function date(dateStr) {
	var date = new Date(dateStr);
	const timeType = ['years', 'months', 'days', 'hours', 'minutes'];

	return {

		add: function (num, str) {
			if ( Number.isNaN(num) || num < 0 || timeType.indexOf(str) === -1 ) {
			  throw new TypeError('Invalid value');
			}

			if (str === timeType[1]) {
				date.setMonth( date.getMonth() + num );
				return this;
			}
			if (str === timeType[2]) {
				date.setDate( date.getDate() + num );
				return this;
			}
			if (str === timeType[3]) {
				date.setHours( date.getHours() + num );
				return this;
			}
			if (str === timeType[4]) {
				date.setMinutes( date.getMinutes() + num );
				return this;
			}
		},

		subtract: function (num, str) {
			if ( Number.isNaN(num) || num < 0 || timeType.indexOf(str) === -1 ) {
			  throw new TypeError('Invalid value');
			}

			if (str === timeType[1]) {
				date.setMonth( date.getMonth() - num );
				return this;
			}
			if (str === timeType[2]) {
				date.setDate( date.getDate() - num );
				return this;
			}
			if (str === timeType[3]) {
				date.setHours( date.getHours() - num );
				return this;
			}
			if (str === timeType[4]) {
				date.setMinutes( date.getMinutes() - num );
				return this;
			}
		}
	};
}