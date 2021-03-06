Feature: Skipping the authorization step

    Scenario: Administrator should be able to set Skipping Authorization Step option
        Given I navigate to the login page
        And I have logged with username "administrator" and password "password"

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

    Scenario: Administrator should be able to navigate to the released requisition
        When I proceed to requisition for "Comfort Health Clinic" facility, "Family Planning" program, "Apr2017" period and "Authorized" status
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
        When I proceed to "Regular" requisition for "Family Planning" program with "Submitted" status
        And I click on the "Authorize" button
        And I confirm the authorize
        Then I should see a successful notification saying "Requisition has been authorized!"

    Scenario: Administrator should be able to navigate to the released requisition
        When I proceed to requisition for "Comfort Health Clinic" facility, "Family Planning" program, "May2017" period and "Authorized" status
        Then I should be brought to the product grid screen
