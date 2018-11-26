import { defineSupportCode } from 'cucumber';

import InitiateRequisitionPage from '../../../../pages/requisitions/initiate.requisition.page';
import viewRequisitionPage from '../../../../pages/requisitions/view.requisition.page';
import approveRequisitionsPage from '../../../../pages/requisitions/approve.requisitions.page';
import homePage from '../../../../pages/home.page';

defineSupportCode(({ Then }) => {

    Then(
        /^I should not be able to see the "([^"]*)?" tab on the menu$/,
        (tab) => expect(homePage.checkIfScreenIsNotVisibleInNavbar(tab, 'Requisitions')).to.equal(false)
    );

    Then(
        /^I should be redirected to approve requisitions screen$/,
        () => approveRequisitionsPage.waitForIsVisible()
    );

    Then(
        /^I should be able to see the "Total requisition cost" updated to "([^"]*)?"$/,
        (cost) => expect(approveRequisitionsPage.compareTotalCost(cost)).to.equal(true)
    );
});