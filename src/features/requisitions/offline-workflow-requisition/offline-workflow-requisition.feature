Feature: Offline requisition workflow

  Scenario: Storeroom Manager should be able to see initiated offline requisition with correct values
    Given I have logged with username "srmanager1" and password "password"

    When I initiate the "Emergency" requisition for "Family Planning" program
    And I click on the "Add Product" button
    Then I should be brought to the add products list page

    When I check a product with "C101" as code
    And I click on the "Add Products" button
    Then I should see a product with "C101" code and "Abortiva" product name inside the table

    When I set "Requested quantity" as "10" for "Abortiva" product
    And I set "Requested quantity explanation" as "test" for "Abortiva" product
    And I wait "1" seconds for UI adjustment
    And I enable offline mode
    Then the offline indicator should be visible

    When I go to view requisition screen
    And I search for my requisitions in "Nandumbo Health Center" facility
    Then I should see requisition table
    And I should be able to see check icon for "Family Planning" program and current monthly period in the "Offline" column
    And I should be able to see "Remove Offline Requisition" button

    When I select requisition for program "Family Planning" and current monthly period
    Then I should be brought to the product grid screen
    And I should be able to see the input value of "Requested quantity" column for "Abortiva" product equal to "10"
    And I should be able to see the input value of "Requested quantity explanation" column for "Abortiva" product equal to "test"

    When I navigate to the Non full supply products tab
    Then I should be brought to the non-full supply products list page

    When I disable offline mode
    Then the offline indicator should not be visible
    And I delete the requisition
