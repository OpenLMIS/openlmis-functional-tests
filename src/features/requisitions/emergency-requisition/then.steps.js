import { defineSupportCode } from 'cucumber';

import ViewRequisitionPage from '../../../pages/requisitions/view.requisition.page';

defineSupportCode(({ Then }) => {
    Then(
        /^I should not be able to edit "([^"]*)?" column for "([^"]*)?" product$/,
        (column, product) => ViewRequisitionPage.checkIfFieldIsNotEditable(column, product)
    );
});
