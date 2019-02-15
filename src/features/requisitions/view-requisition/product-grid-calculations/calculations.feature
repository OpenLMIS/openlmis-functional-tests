Feature: Product grid calculations

  Scenario: Administrator should be able to add new Adjustment Reasons
    Given I have logged with username "administrator" and password "password"
    And I have navigated to the requisition templates page

    When I select "Family Planning" program for configuration
    Then I should be brought to the "Family Planning" program template configuration page

    When I set Source in row "E" to be "User input"
    And I click on the "Save" button
    And I confirm the Save
    Then I should see a successful notification saying "Template saved successfully!"

    When I initiate a requisition for "Family Planning" program
    And I delete the requisition
    When I initiate a requisition for "Family Planning" program
    And I set "Beginning balance" as "0" for "Stomachica" product
    And I set "Total received quantity" as "20" for "Stomachica" product
    And I set "Total consumed quantity" as "20" for "Stomachica" product
    And I set "Total stockout days" as "1" for "Stomachica" product
    And I set "Stock on hand" as "0" for "Stomachica" product
    And I click on the Total losses and adjustments icon for "Stomachica" product
    Then I should see the Total losses and adjustments modal

    When I select "Transfer Out" from the "Reason" list
    And I enter "10" as "Quantity"
    And I click on the "Add" button
    Then I should see assignment for "Transfer Out" reason and "10" quantity inside the modal

    When I select "Facility return" from the "Reason" list
    And I enter "30" as "Quantity"
    And I click on the "Add" button
    Then I should see assignment for "Facility return" reason and "30" quantity inside the modal
    And I should be able to see the Total value updated to "20"

  Scenario: Administrator should be able to update new Adjustment Reasons 
    When I click on the "Update" button
    Then I should be able to see the value of "Total losses and adjustments" column for "Stomachica" product equal to "20"
    Then I should be able to see the invalid value of "Total consumed quantity" column for "Stomachica" product
    Then I should be able to see the invalid value of "Stock on hand" column for "Stomachica" product

  Scenario: Administrator should not be able to add the same Adjustment Reason twice for single product
    When I click on the Total losses and adjustments icon for "Stomachica" product
    Then I should see the Total losses and adjustments modal
    When I select "Stolen" from the "Reason" list
    And I enter "10" as "Quantity"
    And I click on the "Add" button
    And I open the "Reason" dropdown list in a modal
    Then I should not be able to see "Stolen" option on the dropdown list

    When I click on the "Remove" button
    And I open the "Reason" dropdown list in a modal
    Then I should be able to see "Stolen" option on the dropdown list
    And I click on the "Cancel" button

  Scenario: Administrator should be able to cancel any Adjustment Reason without saving it 
    When I set "Beginning balance" as "0" for "Ortho-Novum" product
    And I set "Total received quantity" as "10" for "Ortho-Novum" product
    And I set "Total consumed quantity" as "10" for "Ortho-Novum" product
    And I set "Total stockout days" as "1" for "Ortho-Novum" product
    And I set "Stock on hand" as "0" for "Ortho-Novum" product
    And I click on the Total losses and adjustments icon for "Ortho-Novum" product
    Then I should see the Total losses and adjustments modal

    When I select "Transfer In" from the "Reason" list
    And I click on the "Add" button
    Then I should get an error message

    When I click on the "Close" button
    And I click on the "Cancel" button
    And I click on the Total losses and adjustments icon for "Ortho-Novum" product
    And I select "Transfer In" from the "Reason" list
    And I enter "1000" as "Quantity"
    And I click on the "Add" button
    Then I should be able to see the Total value updated to "1000"

    When I click on the "Cancel" button
    Then I should be able to see the value of "Total losses and adjustments" column for "Ortho-Novum" product equal to "0"

  Scenario: Administrator should be able to update new Adjustment Reason and adjust/update other values to match each other
    When I click on the Total losses and adjustments icon for "Ortho-Novum" product
    Then I should see the Total losses and adjustments modal

    When I select "Transfer In" from the "Reason" list
    And I enter "10" as "Quantity"
    And I click on the "Add" button
    And I click on the "Update" button
    Then I should be able to see the value of "Total losses and adjustments" column for "Ortho-Novum" product equal to "10"
    And I should be able to see the invalid value of "Total consumed quantity" column for "Ortho-Novum" product
    And I should be able to see the invalid value of "Stock on hand" column for "Ortho-Novum" product

    When I set "Stock on hand" as "10" for "Ortho-Novum" product
    Then I should be able to see the valid value of "Stock on hand" column for "Ortho-Novum" product
    Then I should be able to see the valid value of "Total consumed quantity" column for "Ortho-Novum" product

    When I set "Total consumed quantity" as "20" for "Ortho-Novum" product
    Then I should be able to see the invalid value of "Total consumed quantity" column for "Ortho-Novum" product
    And I should be able to see the invalid value of "Stock on hand" column for "Ortho-Novum" product

    When I set "Total consumed quantity" as "10" for "Ortho-Novum" product
    Then I should be able to see the valid value of "Total consumed quantity" column for "Ortho-Novum" product
    And I should be able to see the valid value of "Stock on hand" column for "Ortho-Novum" product

  Scenario: Administrator should change configuration back to the previous one
    When I go to the requisition templates page
    And I select "Family Planning" program for configuration
    Then I should be brought to the "Family Planning" program template configuration page

    When I set Source in row "E" to be "Calculated"
    And I click on the "Save" button
    And I confirm the Save
    Then I should see a successful notification saying "Template saved successfully!"