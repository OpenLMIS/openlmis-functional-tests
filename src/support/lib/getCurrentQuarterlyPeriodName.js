/**
 * Gets a name of current quarterly period.
*/
module.exports = () => {
    let today = new Date();
    let monthNumber = today.getMonth() + 1;
    let quarter = Math.ceil((monthNumber / 3));

    return `${today.getFullYear()}Q${quarter}`;
}
