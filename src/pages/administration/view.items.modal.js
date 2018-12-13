import Modal from '../../components/modal';
import Table from '../../components/table';
import Input from '../../components/input';
import Action from '../../components/action';

/**
 * Add Association Modal object represents the related view in OpenLMIS UI.
 */
class ViewItemsModal extends Modal {

    get searchInput() {
        return new Input('Search');
    }

    get table() {
        return new Table('//*[contains(@class, "view-items-modal")]//table');
    }

    set searchInputValue(value) {
        const self = this;

        new Action(() => {
            self.searchInput.value = value;
        }).execute();
    }

    waitForRow(name) {
        this.table.waitFor([name]);
    }
}

export default new ViewItemsModal();
