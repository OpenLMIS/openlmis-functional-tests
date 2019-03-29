Feature: Delete Skipped Requisition

  Scenario: Administrator should be able to delete a skipped requisition
    Given I have logged with username "administrator" and password "password"
    And I have initiated a requisition for "Family Planning" program

    When I click on the "Skip" button
    And I confirm the requisition skip
    Then I should see a successful notification saying "Requisition has been skipped!"

    When I go to view requisition screen
    And I search for my requisitions in "Comfort Health Clinic" facility
    And I proceed to requisition with "SKIPPED" status
    And I click on the "Delete" button
    And I confirm the delete
    Then I should see a successful notification saying "Requisition has been deleted!"

  Scenario: Administrator should be able to initiate the requisition for the same facility, program and period after deleting the previously skipped requisition
    When I go to Initiate Report and Requisition screen for "Family Planning" program
    Then I should be able to proceed to a previously deleted requisition with "Not yet started" status

  Scenario: Administrator should be able to skip the requisition for the same facility, program and period as previously and initiate a new one for the same facility and program
    When I click on the "Skip" button
    And I confirm the requisition skip
    Then I should see a successful notification saying "Requisition has been skipped!"

    When I go to Initiate Report and Requisition screen for "Family Planning" program
    And I click on the "Proceed" button
    Then I should be redirected to requisition view screen

  Scenario: Administrator should not be able to delete a skipped requisition when there is a new requisition initiated
    When I go to view requisition screen
    And I search for my requisitions in "Comfort Health Clinic" facility
    Then I should be able to see the requisition with "INITIATED" status inside the table
    When I proceed to requisition with "SKIPPED" status
    And I click on the "Delete" button
    And I confirm the delete
    Then I should get an error message

  Scenario: Administrator should delete the initiated requisition and then the skipped one
    When I click on the "Close" button
    And I proceed to requisition for "Family Planning" program with "INITIATED" status
    Then I delete the requisition

    When I go to view requisition screen
    And I search for my requisitions in "Comfort Health Clinic" facility
    And I proceed to requisition with "SKIPPED" status
    Then I delete the requisition