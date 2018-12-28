import { defineSupportCode } from 'cucumber';

import ConvertToOrderRequisitionsPage from '../../../../pages/requisitions/convert-to-order.requisitions.page';

defineSupportCode(({ When }) => {

    When(
        /^I confirm the convert$/,
        () => ConvertToOrderRequisitionsPage.confirmConvert()
    );

    When(
        /^I navigate to Convert Requisitions to Order screen$/,
        () => ConvertToOrderRequisitionsPage.navigateToPage()
    );

    When(
        /^I select the requisition for "([^"]*)?" program and "([^"]*)?" period to convert to order$/,
        (program, period) => ConvertToOrderRequisitionsPage.selectRequisition(program, period)
    );

    When(
        /^I click on the supplying depot for "([^"]*)?" program and "([^"]*)?" period$/,
        (program, period) => ConvertToOrderRequisitionsPage.openSelectDropdown(program, period)
    );

    When(
        /^I unselect the supplying depot for requisition for "([^"]*)?" program and "([^"]*)?" period$/,
        (program, period) => ConvertToOrderRequisitionsPage.removeSupplyingDepot(program, period)
    );

    When(
        /^I select "([^"]*)?" as the supplying depot for "([^"]*)?" program and "([^"]*)?" period$/,
        (supplyingDepot, program, period) => ConvertToOrderRequisitionsPage.addSupplyingDepot(program, period,supplyingDepot)
    );
});