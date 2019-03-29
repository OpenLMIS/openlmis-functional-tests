Feature: Skipping the authorization step

    Scenario: Administrator should be able to set Skipping Authorization Step option
        Given I have logged with username "administrator" and password "password"

        When I navigate to the program list page
        And I click edit button for "Family Planning" program
        Then I should be brought to the program edit page

        When I select "Skip Authorization Step" checkbox
        And I click on the "Save" button
        And I confirm saving program
        Then I should be brought to the program list page

    Scenario: Administrator should be able to submit and authorize a requisition at the same time
        Given I have initiated a requisition for "Family Planning" program
        And I have completed all required fields of the requisition

        When I click on the "Submit & Authorize" button
        And I confirm the submit
        Then I should see a successful notification saying "Requisition has been submitted!"

    Scenario: Administrator should be able to approve the authorized requisition
        When I navigate to approve requisitions screen
        And I select requisition for "Family Planning" program and "Apr2017" period for approve requisitions
        Then I should be brought to the product grid screen

        When I click on the "Approve" button
        And I confirm the approval
        Then I should see a successful notification saying "Requisition has been approved!"
        And I should be redirected to approve requisitions screen

    Scenario: Administrator should be able to convert the approved requisition to order
        When I navigate to Convert Requisitions to Order screen
        Then I should be brought to Convert Requisitions to Order screen

        When I select the requisition for "Family Planning" program and "Apr2017" period to convert to order
        And I select "Ntcheu District Warehouse" as the supplying depot for "Family Planning" program and "Apr2017" period
        And I click on the "Convert to Order" button
        And I confirm the convert
        Then I should see a successful notification saying "The requisition(s) have been successfully converted to an order(s)"

    Scenario: Administrator should be able to find the previously converted to order requisition in orders view
        When I navigate to View Orders screen
        Then I should be brought to View Orders screen

        When I search for "Ntcheu District Warehouse" supplying facility
        Then I should see order for "Family Planning" program and "Apr2017" period inside the table

    Scenario: Administrator should be able to navigate to the released requisition
        When I proceed to requisition for "Comfort Health Clinic" facility, "Family Planning" program, "Apr2017" period and "RELEASED" status
        Then I should be brought to the product grid screen

    Scenario: Administrator should be able to turn off the Skipping Authorization Step option
        When I navigate to the program list page
        And I click edit button for "Family Planning" program
        Then I should be brought to the program edit page

        When I select "Skip Authorization Step" checkbox
        And I click on the "Save" button
        And I confirm saving program
        Then I should be brought to the program list page

    Scenario: Administrator should be able to submit a requisition
        Given I have initiated a requisition for "Family Planning" program
        And I have completed all required fields of the requisition

        When I click on the "Submit" button
        And I confirm the submit
        Then I should see a successful notification saying "Requisition has been submitted!"

    Scenario: Administrator should be able to authorize the requisition
        When I proceed to "Regular" requisition for "Family Planning" program with "SUBMITTED" status
        And I click on the "Authorize" button
        And I confirm the authorize
        Then I should see a successful notification saying "Requisition has been authorized!"

    Scenario: Administrator should be able to approve the requisition
        When I navigate to approve requisitions screen
        And I select requisition for "Family Planning" program and "May2017" period for approve requisitions
        Then I should be brought to the product grid screen

        When I click on the "Approve" button
        And I confirm the approval
        Then I should see a successful notification saying "Requisition has been approved!"
        And I should be redirected to approve requisitions screen

    Scenario: Administrator should be able to convert the approved requisition to order
        When I navigate to Convert Requisitions to Order screen
        Then I should be brought to Convert Requisitions to Order screen

        When I select the requisition for "Family Planning" program and "May2017" period to convert to order
        And I select "Ntcheu District Warehouse" as the supplying depot for "Family Planning" program and "May2017" period
        And I click on the "Convert to Order" button
        And I confirm the convert
        Then I should see a successful notification saying "The requisition(s) have been successfully converted to an order(s)"

    Scenario: Administrator should be able to find the previously converted to order requisition in orders view
        When I navigate to View Orders screen
        Then I should be brought to View Orders screen

        When I search for "Ntcheu District Warehouse" supplying facility
        Then I should see order for "Family Planning" program and "May2017" period inside the table

    Scenario: Administrator should be able to navigate to the released requisition
        When I proceed to requisition for "Comfort Health Clinic" facility, "Family Planning" program, "May2017" period and "RELEASED" status
        Then I should be brought to the product grid screen