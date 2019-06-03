Feature: Submit Requisition

  Scenario: Storeroom Manager should not be able to submit form when there is any required field left empty
    Given I have logged with username "srmanager3" and password "password"
    And I have initiated a requisition for "Family Planning" program

    When I clear the form
    And I go to the "2" page
    And I clear the form
    And I go to the "1" page
    And I set "Total received quantity" as "11" for "Levora" product
    Then I should see the auto-saving spinner

    When I set "Beginning balance" as empty for "Levora" product
    Then I should see the auto-saving spinner

    When I set "Total consumed quantity" as "2" for "Levora" product
    Then I should see the auto-saving spinner

    When I set "Total stockout days" as "2" for "Levora" product
    Then I should see the auto-saving spinner

    When I set "Requested quantity" as "10" for "Levora" product
    Then I should see the auto-saving spinner

    When I set "Requested quantity explanation" as "test" for "Levora" product
    Then I should see the auto-saving spinner

    When I skip remaining products
    Then I should see the auto-saving spinner

    When I click on the "Submit" button
    And I confirm the submit
    Then I should get an error message
    When I click on the "Close" button
    Then I can set "Beginning balance" as "16" for "Levora" product

  Scenario: Storeroom Manager should be able to add non-full supply products without completing the Requested quantity explanation field
    When I navigate to the Non full supply products tab
    Then I should be brought to the non-full supply products list page

    When I click on the "Add Product" button
    Then I should be brought to the add products list page

    When I click on the "Add Product" button
    Then I should get an error message
    And I click on the "Close" button

    When I check a product with "C500" as code
    And I check a product with "C300" as code
    And I click on the "Add Products" button
    Then I should see the auto-saving spinner
    And I should see a product with "C500" code and "Implanon" product name inside the table
    And I should see a product with "C300" code and "Depo-Estradiol" product name inside the table

    When I set "Requested quantity" as "10" for "Implanon" product
    Then I should see the auto-saving spinner
    And I can set "Requested quantity explanation" as empty for "Implanon" product

    When I click delete button for requisition line item with "C300" code
    Then I should not see "C300" line item

  Scenario: Storeroom Manager should be able to skip remaining products and unskip all products
    When I navigate to the Full supply products tab
    And I unskip all products
    Then I can set "Total received quantity" as "10" for "Tonica" product

    When I skip remaining products
    And I set "Total received quantity" as empty for "Tonica" product
    Then I can skip all remaining products

  Scenario: Storeroom manager should not be able to submit the requisition with Requested quantity explanation column omitted
    When I set "Requested quantity explanation" as empty for "Levora" product
    And I click on the "Submit" button
    And I confirm the submit
    Then I should get an error message

  Scenario: Storeroom Manager should be able to submit requisition for home facility
    When I click on the "Close" button
    And I set "Requested quantity explanation" as "test" for "Levora" product
    And I click on the "Submit" button
    And I confirm the submit
    Then I should see a successful notification saying "Requisition has been submitted!"
    And I should see periods table

  Scenario: Storeroom Manager should not be able to edit the submitted requisition nor to authorize/delete the requisition
    When I proceed to the requisition with "Submitted" status
    Then I should be redirected to requisition view screen
    And I should not be able to edit the requisition
    And I should not see "Authorize" button
    And I should not see "Delete" button
    And I log out

  Scenario: Store Manager should delete the previously submitted requisition
    Given I have logged with username "smanager3" and password "password"

    When I go to Initiate Report and Requisition screen for "Family Planning" program
    And I click on the "Proceed" button
    Then I should be redirected to requisition view screen
    And I delete the requisition
