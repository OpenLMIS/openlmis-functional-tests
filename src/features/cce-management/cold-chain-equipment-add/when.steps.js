import { defineSupportCode } from 'cucumber';

import ColdChainEquipmentInventoryListPage from '../../../pages/cce-management/cce.inventory.list.page'
import ColdChainEquipmentAddModal from '../../../pages/cce-management/cold-chain-equipment.add.modal';


defineSupportCode(({ When }) => {

   When(
        /^I navigate to the cce inventory list page$/,
        () => ColdChainEquipmentInventoryListPage.navigateToPage()
    );

 When(
        /^I check My Facility checkbox$/,
        () => ColdChainEquipmentAddModal.checkMyFacilityProgram()
    );

  When(
        /^I select "([^"]*)?" for facility type$/,
        label => ColdChainEquipmentAddModal.clickAddProductsButton(label)
    );

});