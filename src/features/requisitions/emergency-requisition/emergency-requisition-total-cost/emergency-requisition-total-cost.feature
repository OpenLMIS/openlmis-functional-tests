Feature: Emergency requisition total cost

    Scenario: Storeroom Manager should be able to initiate an emergency requisition
        Given I have logged with username "srmanager4" and password "password"

        When I go to initiate requisition screen
        Then I should be brought to the initiate requisition screen

        When I select "Family Planning" from the "Program" list
        And I select "Emergency" checkbox
        And I click on the "Search" button
        Then I should see periods table

        When I click on the "Proceed" button
        Then I should be redirected to requisition view screen

    Scenario: Storeroom Manager should be able to add full supply products with requested product great than 0
        When I click on the "Add Product" button
        Then I should be brought to the add products list page

        When I check a product with "C101" as code
        And I click on the "Add Products" button
        Then I should see a product with "C101" code and "Abortiva" product name inside the table

        And I set "Requested quantity" as "10" for "Abortiva" product
        And I set "Requested quantity explanation" as "test" for "Abortiva" product

        When I click on the "Add Product" button
        Then I should be brought to the add products list page

        When I check a product with "C102" as code
        And I click on the "Add Products" button
        Then I should see a product with "C102" code and "Adiuvantia" product name inside the table

        And I set "Requested quantity" as "10" for "Adiuvantia" product
        And I set "Requested quantity explanation" as "test" for "Adiuvantia" product

        Then I should be able to see the Total requisition cost updated to "$102.00"

    Scenario: Storeroom Manager should be able to submit the emergency requisition
        When I click on the "Submit" button
        And I confirm the submit
        Then I should see a successful notification saying "Requisition has been submitted!"

    Scenario: Storeroom Manager should be able to check whether the total requisition cost is the same as before the requisition's submission
        When I proceed to "Emergency" requisition for "Family Planning" program with "SUBMITTED" status
        Then I should be able to see the Total requisition cost updated to "$102.00"
        And I log out

    Scenario: Store Manager should be able to authorize the emergency requisition
        Given I have logged with username "smanager4" and password "password"

        When I proceed to "Emergency" requisition for "Family Planning" program with "SUBMITTED" status
        And I click on the "Authorize" button
        And I confirm the authorize
        Then I should see a successful notification saying "Requisition has been authorized!"
        And I log out

    Scenario: District Stroreroom Manager should be able to check whether authorized total requisition cost is the same as before the requisition's submission
        Given I have logged with username "dsrmanager" and password "password"
        When I navigate to approve requisitions screen
        And I select requisition for "Family Planning" program and "2019Q1" period for approve requisitions
        Then I should be brought to the product grid screen

        And I should be able to see the Total requisition cost updated to "$102.00"
        And I log out


