Feature: Reason List

    Background:
        Given I navigate to the login page
        And I have logged with username "administrator" and password "password"

    Scenario: Administrator should be able to view reasons
        When I go to the reason list page
        Then I should be brought to the reason list page
