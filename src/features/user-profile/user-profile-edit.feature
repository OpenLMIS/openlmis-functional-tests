Feature: User Profile Edit

    Background:
        Given I navigate to the login page
        Given I have logged with username "vnurse1" and password "password"
        Given I have navigated to the user profile page

    Scenario: User should be able to edit its own profile
        When I enter "Luke" as "First Name"
        And I click on the "Cancel" button
        Then I should see a successful notification saying "Basic information restored successfully"
        And Value of the "First Name" should be "Lucky"

        When I enter "Luke" as "First Name"
        And I enter "Skywalker" as "Last Name"
        And I enter "luksky@away.com" as "Email"
        And I enter "123 456 789" as "Phone Number"
        And I click on the "Update Profile" button
        Then I should see a successful notification saying "Basic information updated successfully"

        When I click on the "Cancel" button
        Then I should see a successful notification saying "Basic information restored successfully"
        And Value of the "First Name" should be "Luke"
        And Value of the "Last Name" should be "Skywalker"
        And There should be the pending verification note for "luksky@away.com"
        And Value of the "Phone Number" should be "123 456 789"
