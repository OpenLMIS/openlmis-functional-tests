Feature: Read-only approved requisition

    Scenario: Storeroom Manager should not be able to see requisition on Initiate Report and Requisition screen
        Given I navigate to the login page
        And I have logged with username "psupervisor" and password "password"
        And I have approved a requisition for "Family Planning" program and "Jan2017" period
        And I have logged out

        Given I have logged with username "srmanager2" and password "password"

        When I go to Initiate Report and Requisition screen for "Family Planning" program
        Then I should not be able to see "Jan2017" period inside the table
        And I log out

    Scenario: Program Supervisor should not be able to see requisition on Approve Requisitions screen
        Given I have logged with username "psupervisor" and password "password"

        When I navigate to approve requisitions screen
        Then I should be redirected to approve requisitions screen
        And I should not see a requisition for "Family Planning" program, "Jan2017" period inside the table

    Scenario: Program Supervisor should be able to see requisition on View Requisitions screen
        When I go to view requisition screen
        And I search for my requisitions in "Comfort Health Clinic" facility
        Then I should be able to see a requisition for "Family Planning" program, "Jan2017" period inside the table

    Scenario: Program Supervisor should not be able to edit requisition or skip products
        When I select requisition initiated at "01/01/2017" for program "Family Planning" and period "Jan2017"
        And I wait "1" seconds for UI adjustment
        Then I should not be able to edit the requisition
        And I should not be able to skip any products

    Scenario: Program Supervisor should not be able to see action buttons
        And I should not see "Sync with Server" button
        And I should not see "Submit" button
        And I should not see "Authorize" button
        And I should not see "Approve" button
        And I should not see "Skip" button
        And I should not see "Delete" button
        And I should not see "Reject" button
        And I should not see "Add Comment" button

    Scenario: Program Supervisor should not be able to update adjustments
        When I click on the Total losses and adjustments icon for "Levonorgestrel" product
        Then I should see the Total losses and adjustments modal
        And I should not see "Add" button
        And I should not see "Update" button

    Scenario: Program Supervisor should not be able to edit requisition on Non full supply products tab
        When I navigate to the Non full supply products tab
        Then I should not be able to neither edit any field in the requisition, nor add any product
