import chooseSelectOptionInTable from '../support/action/chooseSelectOptionInTable';
import getSelectInputSelector from '../support/lib/getSelectInputSelector';

/**
 * Represents a single select inside a Table on the UI.
 */
class Select {

    clickSelectInput(columnValues, columnName = '') {
        const selector = getSelectInputSelector(columnValues, columnName);
        browser.element(`${selector}`).click();
    }

    unselectOption(columnValues, columnName = '') {
        const selector = getSelectInputSelector(columnValues, columnName);
        chooseSelectOptionInTable(selector);
    }

    selectOption(columnValues, option, columnName = '') {
        const selector = getSelectInputSelector(columnValues, columnName);
        chooseSelectOptionInTable(selector, option);
    }
}

export default new Select();