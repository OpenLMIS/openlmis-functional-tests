Feature: Adding products on non-full supply products tab

  Scenario: Storeroom Manager should be able to add non-full supply products
    Given I have logged with username "srmanager1" and password "password"
    And I have initiated a requisition for "Family Planning" program

    When I navigate to the Non full supply products tab
    Then I should be brought to the non-full supply products list page

    When I click on the "Add Product" button
    Then I should be brought to the add products list page

    When I check a product with "C500" as code
    And I check a product with "C300" as code
    And I click on the "Add Products" button
    Then I should see the auto-saving spinner
    And I should see a product with "C500" code and "Implanon" product name inside the table
    And I should see a product with "C300" code and "Depo-Estradiol" product name inside the table

    When I click on the "Add Product" button
    Then I should get an error message
    And I click on the "Close" button

    When I set "Requested quantity" as "10" for "Implanon" product
    And I set "Requested quantity" as "10" for "Depo-Estradiol" product

    When I click delete button for requisition line item with "C500" code
    And I click delete button for requisition line item with "C300" code    
    Then I should not see "C500" line item
    And I should not see "C300" line item

    When I click on the "Delete" button
    And I confirm the delete
    Then I should see a successful notification saying "Requisition has been deleted!"
    And I log out