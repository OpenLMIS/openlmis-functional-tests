Feature: Program List

    Background:
        Given I have logged with username "administrator" and password "password"

    Scenario: Administrator should be able to view programs
        When I go to the program list page
        Then I should be brought to the program list page
