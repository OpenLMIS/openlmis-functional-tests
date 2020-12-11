Feature: Offline requisition workflow: Printing a requisition

  Scenario: Storeroom Manager should not be able to print a requisition when in offline mode
    Given I have logged with username "srmanager1" and password "password"

    When I initiate a requisition for "Family Planning" program
#    And I enable offline mode
#    Then the offline indicator should be visible
    Then I should be able to see "Print" button
#    And I should not be able to click on the "Print" button

    When I go to view requisition screen
    And I search for my requisitions in "Nandumbo Health Center" facility
    Then I should see requisition table
    And I should be able to see check icon for "Family Planning" program and "Jan2017" period in the "Offline" column

    When I select requisition for program "Family Planning" and period "Jan2017"
    Then I should be brought to the product grid screen

#    When I disable offline mode
#    Then the offline indicator should not be visible
    And I should be able to see "Print" button
    And I should be able to click on the "Print" button
    And I delete the requisition
