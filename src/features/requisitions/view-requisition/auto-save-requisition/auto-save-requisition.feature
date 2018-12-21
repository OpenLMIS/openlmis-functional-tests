Feature: Auto-saving Requisitions

  Scenario: Storeroom Manager should be able to auto-save requisition comment
    Given I have logged with username "srmanager4" and password "password"
    And I have initiated a requisition for "Family Planning" program

    When I click the Add Comment button
    Then I should see the text area to enter the requisition comment

    When I enter "comment" as a comment
    Then I should see the auto-saving spinner

  Scenario: Storeroom Manager should be able to auto-save initiated requisition fields on Full supply tab
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

    When I set "Requested quantity explanation" as "1" for "Levora" product
    And I skip remaining products
    Then I should see the auto-saving spinner

  Scenario: Storeroom Manager should be able to auto-save initiated requisition fields on Non full supply tab
    When I navigate to the Non full supply products tab
    Then I should be brought to the non-full supply products list page

    When I click on the "Add Product" button
    Then I should be brought to the add products list page

    When I check a product with "C500" as code
    And I click on the "Add Products" button
    Then I should see the auto-saving spinner
    And I should see a product with "C500" code and "Implanon" product name inside the table

    When I set "Requested quantity" as "10" for "Implanon" product
    And I click on the "Submit" button
    And I confirm the submit
    Then I should see a successful notification saying "Requisition has been submitted!"
    And I log out

  Scenario: Store Manager should be able to auto-save requisition comment
    Given I have logged with username "smanager4" and password "password"
    
    When I proceed to requisition for "Family Planning" program with "SUBMITTED" status
    And I click the Add Comment button
    Then I should see the text area to enter the requisition comment

    When I enter "comment" as a comment
    Then I should see the auto-saving spinner

  Scenario: Store Manager should be able to auto-save submitted requisition fields on Full supply tab
    When I set "Requested quantity" as "12" for "Levora" product
    Then I should see the auto-saving spinner

  Scenario: Store Manager should be able to auto-save submitted requisition fields on Non full supply tab
    When I navigate to the Non full supply products tab to open the add products list page

    When I click on the "Add Product" button
    Then I should be brought to the add products list page

    When I check a product with "C300" as code
    And I click on the "Add Products" button
    Then I should see the auto-saving spinner
    And I should see a product with "C300" code and "Depo-Estradiol" product name inside the table

    When I set "Requested quantity" as "10" for "Depo-Estradiol" product
    And I click on the "Authorize" button
    And I confirm the authorize
    Then I should see a successful notification saying "Requisition has been authorized!"
    And I log out

  Scenario: District Store Manager should be able to auto-save requisition comment
    Given I have logged with username "dsrmanager" and password "password"

    When I navigate to approve requisitions screen
    Then I should be redirected to approve requisitions screen
    And I should see a requisition for "Family Planning" program, "2018Q1" period inside the table

    When I select requisition for "Family Planning" program and "2018Q1" period for approve requisitions
    Then I should be brought to the product grid screen

    When I click the Add Comment button
    Then I should see the text area to enter the requisition comment

    When I enter "comment" as a comment
    Then I should see the auto-saving spinner

  Scenario: District Store Manager should be able to auto-save authorized requisition fields on Full supply tab
    When I set "Approved quantity" as "7" for "Levora" product
    Then I should see the auto-saving spinner

  Scenario: District Store Manager should be able to auto-save submitted requisition fields on Non full supply tab
    When I navigate to the Non full supply products tab
    And I set "Approved quantity" as "14" for "Depo-Estradiol" product
    Then I should see the auto-saving spinner

    When I click on the "Approve" button
    And I confirm the approval
    Then I should see a successful notification saying "Requisition has been approved!"
    And I should be redirected to approve requisitions screen
    And I log out