Feature: Submit Requisition

  Scenario: Storeroom Manager should be able to submit requisition for home facility
    Given I have logged with username "srmanager2" and password "password"
    And I have initiated a requisition for "Family Planning" program

    When I clear the form
    And I go to the "2" page
    And I clear the form
    And I go to the "1" page
    And I set "Total received quantity" as "11" for "Levora" product
    And I set "Beginning balance" as "16" for "Levora" product
    And I set "Total consumed quantity" as "2" for "Levora" product
    And I set "Total stockout days" as "2" for "Levora" product
    And I set "Requested quantity" as "10" for "Levora" product
    And I set "Requested quantity explanation" as empty for "Levora" product
    And I skip remaining products
    And I click on the "Submit" button
    And I wait for the Submit confirmation modal
    And I confirm the submit
    Then I should get an error message

    When I click on the "Close" button
    And I set "Requested quantity explanation" as "1" for "Levora" product
    And I navigate to the Non full supply products tab
    Then I should be brought to the non-full supply products list page

    When I click on the "Add Product" button
    Then I should be brought to the add products list page

    When I check a product with "C500" as code
    And I click on the "Add Products" button
    Then I should see a product with "C500" code and "Implanon" product name inside the table

    When I set "Requested quantity" as "10" for "Implanon" product
    And I set "Requested quantity explanation" as empty for "Implanon" product
    And I navigate to the Full supply products tab
    And I unskip products
    Then I can set "Total received quantity" as "10" for "Tonica" product

    When I skip remaining products
    And I set "Total received quantity" as empty for "Tonica" product
    And I skip remaining products
    And I click on the "Submit" button
    And I wait for the Submit confirmation modal
    And I confirm the submit
    Then I should see a notification saying "Requisition has been submitted"
    And I should see periods table

    When I proceed to the requisition with "SUBMITTED" status
    Then I should be redirected to requisition view screen
    And I should not be able to edit the requisition
    And I should not see "Authorize" button
    And I should not see "Delete" button


