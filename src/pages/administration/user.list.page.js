import Page from '../../components/page';
import Table from '../../components/table';

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

}

export default new UserListPage();
