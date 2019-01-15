/**
 * Returns full name of the given month.
 *
 * @param {Date} date the date to get a full month name
 */
var months = [
    'January','February','March','April','May','June','July','August','September',
    'October','November','December'
];

module.exports = (date) => {
    return months[date.getMonth()];
}
