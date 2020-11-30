import chooseSelectOptionInTable from '../support/action/chooseSelectOptionInTable';
import getSelectInputSelector from '../support/lib/getSelectInputSelector';
import getSelectDropdownSelector from '../support/lib/getSelectDropdownSelector';

/**
 * Represents a single select inside a Table on the UI.
 */
class Select {

    clickSelectInput(columnValues, columnName = '') {
        const selector = getSelectInputSelector(columnValues, columnName);
        browser.$(`${selector}`).click();
    }

    unselectOption(columnValues, columnName = '') {
        const selector = getSelectInputSelector(columnValues, columnName);
        chooseSelectOptionInTable(selector);
    }

    selectOption(columnValues, option, columnName = '') {
        const selector = getSelectInputSelector(columnValues, columnName);
        chooseSelectOptionInTable(selector, option);
    }

    /**
     * Opens Select Dropdown inside a modal
     */
    openSelectDropdownInsideModal(label) {
        const selector = getSelectDropdownSelector(label);
        browser.$(selector).click();
    }
}

export default new Select();