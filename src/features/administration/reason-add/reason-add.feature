Feature: Reason Add

    Background:
        Given I have logged with username "administrator" and password "password"
        Given I have navigated to the reason list page

    Scenario: Administrator should be able to add new reason
        When I click on the "Add Reason" button
        Then I should be brought to the reason creation page

        When I enter "Functional Test Reason" as "Name"
        When I select "Transfer" from the "Category" list
        When I select "Debit" as "Type"
        When I enter "adjustment" as "Tags"

        When I select "Family Planning" from the "Program" list
        When I select "Warehouse" from the "Facility Type" list
        When I click on the "Add" button
        Then I should see assignment for "Family Planning" program and "Warehouse" facility type

        When I click on the "Add New Reason" button
        Then I should see a reason with "Functional Test Reason" name, "Transfer" category and "Debit" type inside the table
        Then I should see a successful notification saying "Reason created successfully"
