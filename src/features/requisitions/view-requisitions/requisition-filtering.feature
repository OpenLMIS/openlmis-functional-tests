Feature: Requisition filtering

  Scenario: Storeroom Manager should be able to filter requisitions by date
    Given I have logged with username "srmanager2" and password "password"

    When I go to view requisition screen
    Then I should be brought to the view requisition screen

    When I click on the "Filter" button without waiting for loading modal
    Then I should see filter popover
    And I should see "From" datepicker empty
    And I should see "To" datepicker empty

    When I click on the "From" datepicker
    Then I should see opened "From" datepicker

    When I select today's date on "From" datepicker
    Then I should see today's date on "From" datepicker input

    When I enter "21/12/2018" date on "From" datepicker
    Then I should see "21/12/2018" date on "From" datepicker

    When I click clear button on "From" datepicker
    Then I should see "From" datepicker empty
    And I should not see "From" datepicker opened

    When I enter "21/12/2018" date on "From" datepicker
    And I enter "21/12/2018" date on "To" datepicker
    Then I should see "22" day disabled on "From" datepicker
    And I should see "22" day enabled on "To" datepicker
    And I should see "20" day disabled on "To" datepicker
    And I should see "20" day enabled on "From" datepicker
