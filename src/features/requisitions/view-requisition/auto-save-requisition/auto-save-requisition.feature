Feature: Auto-saving Requisitions

  Scenario: User should be able to auto-save requisition comment

    Given I have logged with username "srmanager3" and password "password"
    And I have initiated a requisition for "Family Planning" program

    When I proceed to requisition for "Family Planning" program with "INITIATED" status
    And I click the Add Comment button
    Then I should see the text area to enter the requisition comment

    When I enter "comment" as a comment
    Then I should see the auto-saving spinner

  Scenario: User should be able to auto-save initiated requisition fields on Full supply tab

    When I clear the form
    And I go to the "2" page
    And I clear the form
    And I go to the "1" page
    Then I should see the auto-saving spinner

    When I set "Total received quantity" as "11" for "Levora" product
    Then I should see the auto-saving spinner

    When I set "Beginning balance" as "16" for "Levora" product
    Then I should see the auto-saving spinner

    When I set "Total consumed quantity" as "2" for "Levora" product
    Then I should see the auto-saving spinner

    When I set "Total stockout days" as "2" for "Levora" product
    Then I should see the auto-saving spinner

    When I set "Requested quantity" as "10" for "Levora" product
    Then I should see the auto-saving spinner

    When I set "Requested quantity explanation" as empty for "Levora" product
    And I skip remaining products
    Then I should see the auto-saving spinner

    When I click on the "Submit" button
    And I confirm the submit
    Then I should get an error message
    When I click on the "Close" button
    Then I can set "Requested quantity explanation" as "1" for "Levora" product    

  Scenario: User should be able to auto-save initiated requisition fields on Non full supply tab

    When I navigate to the Non full supply products tab
    Then I should be brought to the non-full supply products list page

    When I click on the "Add Product" button
    Then I should be brought to the add products list page

    When I check a product with "C500" as code
    And I click on the "Add Products" button
    Then I should see the auto-saving spinner
    And I should see a product with "C500" code and "Implanon" product name inside the table

    When I set "Requested quantity" as "10" for "Implanon" product
    Then I can set "Requested quantity explanation" as empty for "Implanon" product    

    When I click on the "Submit" button
    And I confirm the submit
    Then I should see a successful notification saying "Requisition has been submitted!"