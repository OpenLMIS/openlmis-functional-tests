Feature: Supply Partner List

    Background:
        Given I have logged with username "administrator" and password "password"

    Scenario: Administrator should be able to view supply partners
        When I go to the supply partner list page
        Then I should be brought to the supply partner list page
