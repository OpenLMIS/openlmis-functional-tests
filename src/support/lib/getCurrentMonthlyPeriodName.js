import getFullMonthName from './getFullMonthName';

/**
 * Gets a name of current monthly period.
*/
module.exports = () => {
    let today = new Date();
    let fullMonthName = getFullMonthName(today.getMonth());
    let shortMonthName = fullMonthName.substring(0, 3);

    return `${shortMonthName}${today.getFullYear()}`;
}
