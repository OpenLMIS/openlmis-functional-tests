/**
 * Retrieve data from a table as array. Each element in the array
 * is a JSON object that represent a single table row. Properties
 * in the object are column names. Each key contains a related
 * value from the table.
 *
 * @example
 * for the following table:
 * | A | B | C |
 * +---+---+---+
 * | a | b | c |
 * | d | e | f |
 * the result will be:
 * [
 *  { "A": "a", "B": "b", "C": "c" },
 *  { "A": "d", "B": "e", "C": "f" }
 * ]
 *
 * @param {String} tableSelector selector that helps to retrieve a correct table
 */
module.exports = tableSelector => browser.selectorExecute(tableSelector, (table) => {
    const header = $(table).find('th').map((id, elem) => $(elem).text()).get();
    const rows = $(table).find('td').map((id, elem) => $(elem).text()).get();
    const result = [];
    let json = {};

    for (let i = 0; i < rows.length; i += 1) {
        const index = i % header.length;

        // we don't want to add an empty json
        if (i !== 0 && index === 0) {
            result.push(json);
            json = {};
        }

        json[header[index]] = rows[i].trim().replace(/[ ]{2,}/g, '').replace(/\n/g, '|');
    }

    return result;
});
