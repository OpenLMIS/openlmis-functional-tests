Feature: Reason Add

    Background:
        Given I have logged with username "administrator" and password "password"
        Given I have navigated to the reason list page

    Scenario: Administrator should be able to add new reason
        When I click on the "Add Reason" button
        Then I should be brought to the reason creation page

        When I select "Family Planning" from the "Program" list
        And I select "Warehouse" from the "Facility Type" list
        And I click on the "Add" button
        Then I should see assignment for "Family Planning" program and "Warehouse" facility type

        When I enter "Functional Test Reason 2" as "Name"
        And I select "Transfer" from the "Category" list
        And I select "Debit" as "Type"
        And I enter "adjustment" as "Tags"
        And I click on the "Add New Reason" button
        Then I should see a reason with "Functional Test Reason 2" name, "Transfer" category and "Debit" type inside the table
        And I should see a successful notification saying "Reason created successfully"
