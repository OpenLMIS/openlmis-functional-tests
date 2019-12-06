Feature: Emergency requisition

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

    Scenario: Storeroom Manager should be able to add full supply products
        When I click on the "Add Product" button
        Then I should be brought to the add products list page

        # When I click on the "Add Products" button
        # Then I should get an error message

        # When I click on the "Close" button
        And I check a product with "C101" as code
        And I click on the "Add Products" button
        Then I should see a product with "C101" code and "Abortiva" product name inside the table

        When I set "Requested quantity" as empty for "Abortiva" product
        And I set "Requested quantity explanation" as empty for "Abortiva" product
        And I click on the "Submit" button
        And I confirm the submit
        Then I should get an error message

        When I click on the "Close" button
        And I set "Requested quantity" as "10" for "Abortiva" product
        And I set "Requested quantity explanation" as "test" for "Abortiva" product
        Then I should be able to see the Total requisition cost updated to "$51.00"
        And I should not be able to edit "Product code" column for "Abortiva" product
        And I should not be able to edit "Product" column for "Abortiva" product

        When I click on the "Add Product" button
        Then I should be brought to the add products list page

        When I check a product with "C102" as code
        And I click on the "Add Products" button
        Then I should see a product with "C102" code and "Adiuvantia" product name inside the table

        When I set "Requested quantity" as "10" for "Adiuvantia" product
        And I set "Requested quantity explanation" as "test" for "Adiuvantia" product
        And I wait "10" seconds for UI adjustment
        Then I should be able to see the Total requisition cost updated to "$102.00"

    Scenario: Storeroom Manager should be able to add non full supply products
        When I navigate to the Non full supply products tab
        And I wait "4" seconds for UI adjustment
        Then I should be brought to the non-full supply products list page

        When I click on the "Add Product" button
        Then I should be brought to the add products list page

        # When I click on the "Add Products" button
        # Then I should get an error message

        # When I click on the "Close" button
        And I check a product with "C500" as code
        And I click on the "Add Products" button
        Then I should see a product with "C500" code and "Implanon" product name inside the table

        When I set "Requested quantity" as empty for "Implanon" product
        And I set "Requested quantity explanation" as empty for "Implanon" product
        And I click on the "Submit" button
        And I confirm the submit
        Then I should get an error message

        When I click on the "Close" button
        And I set "Requested quantity" as "10" for "Implanon" product
        Then I can set "Requested quantity explanation" as empty for "Implanon" product
        And I should be able to see the Total requisition cost updated to "$411.80"
        And I should not be able to edit "Product code" column for "Implanon" product
        And I should not be able to edit "Product" column for "Implanon" product

    Scenario: Storeroom Manager should be able to submit the emergency requisition
        When I click on the "Submit" button
        And I confirm the submit
        Then I should see a successful notification saying "Requisition has been submitted!"

    Scenario: Storeroom Manager should be able to check whether the total requisition cost is the same as before the requisition's submission
        When I proceed to "Emergency" requisition for "Family Planning" program with "Submitted" status
        Then I should be able to see the Total requisition cost updated to "$411.80"
        And I log out

    Scenario: Store Manager should be able to authorize the emergency requisition
        Given I have logged with username "smanager4" and password "password"

        When I proceed to "Emergency" requisition for "Family Planning" program with "Submitted" status
        Then I should be able to see the Total requisition cost updated to "$411.80"

        And I click on the "Authorize" button
        And I confirm the authorize
        Then I should see a successful notification saying "Requisition has been authorized!"
        And I log out

    Scenario: District Stroreroom Manager should be able to approve the emergency requisition
        Given I have logged with username "dsrmanager" and password "password"

        When I navigate to approve requisitions screen
        And I select requisition for "Family Planning" program and current quarterly period for approve requisitions
        Then I should be brought to the product grid screen
        And I should be able to see the Total requisition cost updated to "$411.80"

        When I click on the "Approve" button
        And I confirm the approval
        Then I should see a successful notification saying "Requisition has been approved!"
        And I should be redirected to approve requisitions screen
        And I log out

    Scenario: Program Supervisor should be able to approve the emergency requisition
        Given I have logged with username "psupervisor" and password "password"

        When I proceed to requisition for "Kankao Health Facility" facility, "Family Planning" program, current quarterly period and "In approval" status
        And I set "Approved quantity" as "10" for "Abortiva" product
        And I click on the "Approve" button
        And I confirm the approval
        Then I should see a successful notification saying "Requisition has been approved!"
        And I log out

    Scenario: Warehouse Clerk should be able to convert the emergency requisition to order
        Given I have logged with username "wclerk1" and password "password"

        When I navigate to Convert Requisitions to Order screen
        Then I should be brought to Convert Requisitions to Order screen

        When I select the requisition for "Family Planning" program and current quarterly period to convert to order
        And I select "Ntcheu District Warehouse" as the supplying depot for "Family Planning" program and current quarterly period
        And I click on the "Convert to Order" button
        And I confirm the convert
        Then I should see a successful notification saying "The requisition(s) have been successfully converted to an order(s)"
