import Page from '../../components/page';

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

}

export default new UserListPage();
