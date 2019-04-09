import { defineSupportCode } from 'cucumber';
import Radiobox from '../../../components/radiobox';

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

   When(
        /^I open the "([^"]*)?" dropdown list in a mod$/,
        label => ColdChainEquipmentAddModal.openSelectDropdown(label)
   );

     When(
           /^I selected "([^"]*)?" as "([^"]*)?"$/,
           (label,option) => ColdChainEquipmentAddModal.addProdButton(label,option)
       );
});