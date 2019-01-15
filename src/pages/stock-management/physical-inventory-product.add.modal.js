import Modal from '../../components/modal';
import Table from '../../components/table';

/**
 * Product Add Modal object represents the related view in OpenLMIS UI.
 */
class PhysicalInventoryProductAddModal extends Modal {

    constructor() {
        super({
            header: 'Add Products to Physical Inventory',
        });
    }

    get productsTable() {
        return new Table();
    }

    setColumnForProduct(column, value, code) {
        const id = this.getColumnId(column);
        const selector = this.getInputSelector(code, id);
        const td = browser.element(selector);

        td.setValue(value);
    }

    getInputSelector(code, columnNumber) {
        return `//td[normalize-space(text())='${code}']/parent::tr/td[position()='${columnNumber}']/div/input`;
    }

    getColumnId(columnName) {
        return browser
            .execute(name => $(`th:contains('${name}')`).index(), columnName)
            .value;
    }
}

export default new PhysicalInventoryProductAddModal();
