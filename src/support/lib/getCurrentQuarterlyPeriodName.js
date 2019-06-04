/**
 * Gets a name of current quarterly period.
*/
module.exports = () => {
    today = new Date();
    monthNumber = today.getMonth() + 1;
    quarter = Math.ceil((monthNumber / 3));

    return `${today.getFullYear()}Q${quarter}`;
}
