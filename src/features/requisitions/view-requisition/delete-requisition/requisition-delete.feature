Feature: Delete Requisition

  Scenario: Store Manager should be able to delete a submitted requisition for home facility
    Given I have logged with username "srmanager3" and password "password"
    And I have submitted a requisition for "Family Planning" program
    And I have logged out
    And I have logged with username "smanager3" and password "password"

    When I proceed to requisition for "Family Planning" program with "Submitted" status
    And I click on the "Delete" button
    And I confirm the delete
    Then I should see a successful notification saying "Requisition has been deleted!"
    And I log out

  Scenario: Storeroom Manager should be able to initiate a new requisition for a previously deleted program and period
    Given I have logged with username "srmanager3" and password "password"

    When I go to Initiate Report and Requisition screen for "Family Planning" program
    And I proceed to the requisition with "Not yet started" status
    Then I should be redirected to requisition view screen