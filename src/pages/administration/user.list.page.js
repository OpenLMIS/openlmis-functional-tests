import Page from '../../components/page';
import Table from '../../components/table';
import scroll from '../../support/action/scroll';
import waitForDisplayed from '../../support/action/waitForDisplayed';
import ModalButton from '../../components/modal-button';

/**
 * User List Page object represents the related view in OpenLMIS UI.
 */
class UserListPage extends Page {

    constructor() {
        super({
            header: 'Users',
            uri: 'administration/users',
            navParent: 'Administration',
            navChild: 'Users',
        });
    }

    sortedBy(sortOption) {
        let retrieveRowData;

        if (sortOption === 'First name') {
            retrieveRowData = item => item.Name.split(' ')[0];
        } else if (sortOption === 'Last name') {
            retrieveRowData = item => item.Name.split(' ')[1];
        }

        new Table().sortedBy(sortOption, retrieveRowData);
    }

     /**
        * Remove role on user edit role page.
        * @param {String} role the name of the role
        * @param {String} program the name of the program
        * @param {String} supervisoryNode the name of the supervisory Node
      */
    removeUserRole(role, program, supervisoryNode){
        scroll('bottom');
        const roleRow = browser.element(`//td[contains(text(),'${program}')]//following-sibling::td[contains(text(),'${supervisoryNode}')]//following-sibling::td[contains(text(),'${role}')]//following-sibling::td/button`);
        roleRow.click();
    }

   /**
     * Wait for the form to be visible.
     */
    waitForTable() {
        waitForDisplayed("//table");
    }

    confirmSubmit() {
           new ModalButton('Remove Role').click();
     }
}
export default new UserListPage();
