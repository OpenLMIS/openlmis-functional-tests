Feature: Requisition workflow validations

    Scenario: Storeroom manager should not be able to submit the requisition with one required column omitted
        Given I have logged with username "srmanager4" and password "password"
        When I go to initiate requisition screen
        Then I should be brought to the initiate requisition screen
        And I should not be able to remove the selected facility in "Facility" dropdown

        When I select "Family Planning" from the "Program" list
        And I click on the "Search" button
        Then I should see periods table

        When I click on the "Proceed" button
        Then I should be redirected to requisition view screen

        When I clear the form
        And I go to the "2" page
        And I clear the form
        And I go to the "1" page
        And I set "Total received quantity" as "11" for "Levora" product
        And I set "Total consumed quantity" as "2" for "Levora" product
        And I set "Total stockout days" as "2" for "Levora" product
        And I set "Requested quantity" as "10" for "Levora" product
        And I set "Requested quantity explanation" as "1" for "Levora" product
        And I set "Beginning balance" as empty for "Levora" product
        And I skip remaining products
        And I navigate to the Non full supply products tab
        Then I should be brought to the non-full supply products list page

        When I add a new product with "C500" as code
        Then I should see a product with "C500" code and "Implanon" product name inside the table
        When I set "Requested quantity" as "10" for "Implanon" product
        And I click on the "Submit" button
        And I confirm the submit
        Then I should get an error message

        When I click on the "Close" button
        And I navigate to the Full supply products tab
        Then I can set "Beginning balance" as "16" for "Levora" product

    Scenario: Storeroom manager should not be able to submit the requisition with Requested quantity explanation column omitted
        When I set "Requested quantity explanation" as empty for "Levora" product
        And I click on the "Submit" button
        And I confirm the submit
        Then I should get an error message

    Scenario: Storeroom Manager should be able to submit the completed requisition
        When I click on the "Close" button
        And I set "Requested quantity explanation" as "1" for "Levora" product
        And I click on the "Submit" button
        And I confirm the submit
        Then I should see a successful notification saying "Requisition has been submitted!"
        And I should see periods table

    Scenario: Storeroom Manager should not be able to edit the submitted requisition nor to authorize/delete the requisition
        When I proceed to the requisition with "SUBMITTED" status
        Then I should be redirected to requisition view screen
        And I should not be able to edit the requisition
        And I log out

    Scenario: Store Manager should be able to skip remaining products and unskip all products
        Given I have logged with username "smanager4" and password "password"
        When I proceed to requisition for "Kankao Health Facility" facility ,"Family Planning" program, "2018Q3" period and "SUBMITTED" status

        When I unskip all products
        Then I can set "Total received quantity" as "10" for "Tonica" product

        When I skip remaining products
        And I set "Total received quantity" as empty for "Tonica" product
        Then I can skip all remaining products

    Scenario: Store Manager should not be able to authorize the requisition with one required column omitted
        When I navigate to the Non full supply products tab
        Then I should be able to see the input value of "Requested quantity" column for "Implanon" product equal to "10"

        When I navigate to the Full supply products tab
        Then I should be able to see the input value of "Total received quantity" column for "Levora" product equal to "11"
        And I should be able to see the input value of "Total consumed quantity" column for "Levora" product equal to "2"
        And I should be able to see the input value of "Total stockout days" column for "Levora" product equal to "2"
        And I should be able to see the input value of "Requested quantity" column for "Levora" product equal to "10"
        And I should be able to see the input value of "Requested quantity explanation" column for "Levora" product equal to "1"
        And I should be able to see the input value of "Beginning balance" column for "Levora" product equal to "16"

        When I set "Total received quantity" as empty for "Levora" product
        And I click on the "Authorize" button
        And I confirm the authorize
        Then I should get an error message

        When I click on the "Close" button
        Then I can set "Total received quantity" as "11" for "Levora" product

    Scenario: Store manager should not be able to authorize the requisition with Requested quantity explanation column omitted
        When I set "Requested quantity explanation" as empty for "Levora" product
        And I click on the "Authorize" button
        And I confirm the authorize
        Then I should get an error message

    Scenario: Store Manager should be able to authorize the completed requisition
        When I click on the "Close" button
        And I set "Requested quantity explanation" as "1" for "Levora" product
        And I click on the "Authorize" button
        And I confirm the authorize
        Then I should see a successful notification saying "Requisition has been authorized!"
        And I log out

    Scenario: District Stroreroom Manager should be able to approve the requisition with correct Approved quantity value
        Given I have logged with username "dsrmanager" and password "password"

        When I navigate to approve requisitions screen
        Then I should be redirected to approve requisitions screen
        When I select requisition for "Family Planning" program and "2018Q3" period for approve requisitions
        Then I should be brought to the product grid screen
        And I should not be able to skip any products

        When I navigate to the Non full supply products tab
        Then I should be able to see the input value of "Approved quantity" column for "Implanon" product equal to "10"

        When I navigate to the Full supply products tab
        Then I should be able to see the input value of "Approved quantity" column for "Levora" product equal to "10"
        
        When I click on the "Approve" button
        And I confirm the approval
        Then I should see a successful notification saying "Requisition has been approved!"
        And I should be redirected to approve requisitions screen
        And I log out

    Scenario: Program Supervisor should be able to approve the requisition when Approved quantity column is completed
        Given I have logged with username "psupervisor" and password "password"

        When I navigate to approve requisitions screen
        Then I should be redirected to approve requisitions screen
        When I select requisition for "Family Planning" program and "2018Q3" period for approve requisitions
        Then I should be brought to the product grid screen

        When I navigate to the Non full supply products tab
        Then I should be able to see the input value of "Approved quantity" column for "Implanon" product equal to "10"

        When I navigate to the Full supply products tab
        Then I should be able to see the input value of "Approved quantity" column for "Levora" product equal to "10"
        
        When I set "Approved quantity" as empty for "Levora" product
        And I click on the "Approve" button
        And I confirm the approval
        Then I should get an error message

        When I click on the "Close" button
        And I set "Approved quantity" as "10" for "Levora" product
        And I click on the "Approve" button
        And I confirm the approval
        Then I should see a successful notification saying "Requisition has been approved!"
        And I should be redirected to approve requisitions screen
        And I should not see a requisition for "Family Planning" program, "2018Q3" period inside the table

    Scenario: Program Supervisor should be able to navigate to the requisition with APPROVED status
        When I proceed to requisition for "Kankao Health Facility" facility ,"Family Planning" program, "2018Q3" period and "APPROVED" status
        Then I should be brought to the product grid screen
