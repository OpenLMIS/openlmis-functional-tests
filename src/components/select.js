import chooseSelectOptionInTable from '../support/action/chooseSelectOptionInTable';
import getSelectInputSelector from '../support/lib/getSelectInputSelector';
import getSelectDropdownSelector from '../support/lib/getSelectDropdownSelector';

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
        chooseSelectOptionInTable(selector);//*[contains(@class, "select2-selection__clear")]
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
        browser.element(selector).click();
    }
}

export default new Select();