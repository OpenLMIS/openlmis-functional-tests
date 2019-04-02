import Page from '../../components/page';
import Table from '../../components/table';
import waitForVisible from '../../support/action/waitForVisible';
import Button from '../../components/button';
import ModalButton from '../../components/modal-button';
import scroll from '../../support/action/scroll';

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



    removePreviousAddedUserRole (){
        scroll('bottom');
        browser.element("//tr[contains(@class, 'ng-scope ng-isolate-scope')][5]/td[contains(@class, 'ng-scope')]/button[contains(@class, 'danger ng-binding')]").click();
    }


    confirmSubmit() {
       new ModalButton('Remove Role').click();
    }


    /**
     * Wait for the form to be visible.
     */
    waitForForm() {
        waitForVisible("//form");
    }


    /**
     * Wait for the page to be visible.
     */
    waitForEditUserPage(){
        waitForVisible("//td[contains(@class, 'ng-binding ng-scope')]");
    }
}

export default new UserListPage();
