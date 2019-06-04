import getFullMonthName from './getFullMonthName';

/**
 * Gets a name of current monthly period.
*/
module.exports = () => {
    let today = new Date();
    return `${getFullMonthName(today.getMonth())}${today.getFullYear()}`;
}
