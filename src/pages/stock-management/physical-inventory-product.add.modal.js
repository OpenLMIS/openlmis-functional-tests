import Modal from '../../components/modal';
import Table from '../../components/table';

//We add 1 as the position starts with 1 instead of 0 as index does
const toPosition = index => index + 1;

/**
 * Product Add Modal object represents the related view in OpenLMIS UI.
 */
class PhysicalInventoryProductAddModal extends Modal {

    constructor() {
        super({
            header: 'Add Products to Physical Inventory',
        });
    }

    /**
     * Returns a table with products to add to the physical inventory.
     */
    get productsTable() {
        return new Table();
    }

    /**
     * Updates the value of the table input for the given column and product.
     *
     * @param {string} column the name of the column
     * @param {string} value   the value to be set
     * @param {string} code     the name of the product code
     */
    setColumnForProduct(column, value, code) {
        const id = this.getColumnId(column);
        const selector = this.getTableInputSelector(code, id);
        const td = browser.$(selector);

        td.setValue(value);
    }

    getTableInputSelector(code, columnNumber) {
        return '//*[contains(@class,\'modal\')]' +
            `/descendant::td[normalize-space(text())='${code}']` +
            `/parent::tr` +
            `/td[position()='${toPosition(columnNumber)}']` +
            '/div' +
            '/input';
    }

    getColumnId(columnName) {
        return browser
            .execute(name => $(`.modal th:contains('${name}')`).index(), columnName);
    }
}

export default new PhysicalInventoryProductAddModal();
