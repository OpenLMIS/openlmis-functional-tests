Feature: Date Physical Stock Count Completed

  Scenario: Administrator should be able to submit form with date physical stock count completed

    Given I have logged with username "administrator" and password "password"
    And I have enabled Date Physical Stock Count Completed for "Family Planning" program
    And I have submitted a requisition for "Family Planning" program for date stock count completed

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

  Scenario: Administrator should delete the authorized requisition

    When I navigate to approve requisitions screen
    Then I should be redirected to approve requisitions screen

    When I select requisition for "Family Planning" program and "Apr2017" period for approve requisitions
    Then I should be brought to the product grid screen

    When I click on the "Reject" button
    And I confirm the reject
    Then I should see a successful notification saying "Requisition has been rejected!"
    And I should be redirected to approve requisitions screen

    When I proceed to requisition for "Family Planning" program with "REJECTED" status
    Then I delete the requisition

  Scenario: Administrator should return to previous program settings
    When I have navigated to the program list page
    And I click edit button for "Family Planning" program
    Then I should be brought to the program edit page

    When I select "Enable field for Date Physical Stock Count Completed" checkbox
    And I click on the "Save" button
    And I confirm saving program
    Then I should be brought to the program list page