import { defineSupportCode } from 'cucumber';

import ColdChainEquipmentInventoryListPage from '../../../pages/cce-management/cce.inventory.list.page';
import ColdChainEquipmentAddModal from '../../../pages/cce-management/cold-chain-equipment.add.modal';

defineSupportCode(({ Then }) => {

    Then(
        /^I should be brought to the cce inventory list page$/,
        () =>{
        ColdChainEquipmentInventoryListPage.open();
        ColdChainEquipmentInventoryListPage.waitForIsVisible();


        }
    );

    Then(
            /^I should see cce management tab on the navigation bar$/,
            () => ColdChainEquipmentInventoryListPage.waitForIsVisible()
    );

    Then(
            /^I should see "([^"]*)?" button$/,
            button => ColdChainEquipmentInventoryListPage.checkIfButtonIsHidden(button)
    );

    Then(
            /^I should be brought to the cold chain equipment creation page$/,
            () =>{ ColdChainEquipmentAddModal.waitForIsVisible();

            }
    );

    Then(
            /^I should see assignment for "([^"]*)?" program and "([^"]*)?" facility$/,
            (program, facilityType) => ColdChainEquipmentAddModal.waitForAssignment(program, facilityType)
    );


});