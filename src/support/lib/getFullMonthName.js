/**
 * Returns full name of the given month.
 *
 * @param {number} monthNumber ordinal month number starting from 0
 */
var months = [
    'January','February','March','April','May','June','July','August','September',
    'October','November','December'
];

module.exports = (monthNumber) => {
    return months[monthNumber];
}
