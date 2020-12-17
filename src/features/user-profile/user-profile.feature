Feature: User Profile

    Background:
        Given I navigate to the login page
        And I have logged with username "vnurse1" and password "password"

    Scenario: User should be able to view its profile
        When I go to the user profile page
        Then I should be brought to the user profile page
