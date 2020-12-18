Feature: Login
  As an Administrator
  I want to be able to Login and Logout
  so that I may access the home page

  Scenario: administrator user logs in and is brought to the home page
    Given I navigate to the login page
    Given I enter the username "administrator"
    Given I enter the password "password"
    When I submit the form
    Then I should be brought to the home page

  Scenario: I logout from the home page
    Given I am on the home page
    When I logout
    Then I should be brought to the login page

  Scenario: Administrator logs in using keyboard and is brought to the home page
    Given I enter the username "administrator"
    Given I enter the password "password"
    When I press enter in the form
    Then I should be brought to the home page
