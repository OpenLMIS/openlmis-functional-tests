Feature: Date Physical Stock Count Completed

  Scenario: Administrator should be able to submit form with date physical stock count completed

    Given I have logged with username "administrator" and password "password"
    And I have enabled Date Physical Stock Count Completed for "Family Planning" program
    And I have initiated a requisition for "Family Planning" program

    When I clear the form

    And I set "Total received quantity" as "11" for "Levora" product
    And I set "Beginning balance" as "16" for "Levora" product
    And I set "Total consumed quantity" as "2" for "Levora" product
    And I set "Total stockout days" as "2" for "Levora" product
    And I set "Requested quantity" as "10" for "Levora" product
    And I set "Requested quantity explanation" as "1" for "Levora" product

    And I set "Total received quantity" as "11" for "Male Condom" product
    And I set "Beginning balance" as "26" for "Male Condom" product
    And I set "Total consumed quantity" as "2" for "Male Condom" product
    And I set "Total stockout days" as "2" for "Male Condom" product
    And I set "Requested quantity" as "10" for "Male Condom" product
    And I set "Requested quantity explanation" as "1" for "Male Condom" product

    And I skip remaining products
    And I click on the "Submit" button
    And I confirm the submit
    Then I should see Submit Date Physical Stock Count Completed modal

    When I select date in the future on Date Physical Stock Count Completed modal
    And I confirm Submit Date Physical Stock Count Completed modal
    Then I should get an error message

    When I click on the "Close" button
    And I select Today's date on Date Physical Stock Count Completed modal
    And I confirm Submit Date Physical Stock Count Completed modal
    Then I should be brought to the initiate requisition screen

  Scenario: Administrator should be able to authorize form with date physical stock count completed

    When I scroll to Proceed button
    And I click on the "Proceed" button
    Then I should be redirected to requisition view screen
    And I should see Today's date on requisition header

    When I click on the "Authorize" button
    And I confirm the authorize
    Then I should see Authorize Date Physical Stock Count Completed modal

    When I select date in the future on Date Physical Stock Count Completed modal
    And I confirm Authorize Date Physical Stock Count Completed modal
    Then I should get an error message

    When I click on the "Close" button
    And I select Today's date on Date Physical Stock Count Completed modal
    And I confirm Authorize Date Physical Stock Count Completed modal
    Then I should be brought to the initiate requisition screen

    When I have navigated to the program list page
    And I click edit button for "Family Planning" program
    Then I should be brought to the program edit page

    When I select "Enable field for Date Physical Stock Count Completed" checkbox
    And I click on the "Save" button
    And I confirm saving program
    Then I should be brought to the program list page