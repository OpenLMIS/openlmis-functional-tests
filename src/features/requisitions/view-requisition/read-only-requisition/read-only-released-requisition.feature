Feature: Read-only released requisition

    Scenario: Storeroom Manager should not be able to see requisition on Initiate Report and Requisition screen
        Given I have logged with username "srmanager4" and password "password"

        When I go to Initiate Report and Requisition screen for "Family Planning" program
        Then I should not be able to see "2017Q1" period inside the table
        And I log out

    Scenario: Program Supervisor should not be able to see requisition on Approve Requisition screen
        Given I have logged with username "psupervisor" and password "password"

        When I navigate to approve requisitions screen
        Then I should be redirected to approve requisitions screen
        And I should not see a requisition for "Family Planning" program, "2017Q1" period inside the table

    Scenario: Program Supervisor should be able to see requisition on View Requisitions screen
        When I go to view requisition screen
        And I search for my requisitions in "Kankao Health Facility" facility
        Then I should be able to see a requisition for "Family Planning" program, "2017Q1" period inside the table

    Scenario: Program Supervisor should not be able to edit requisition or skip products
        When I select requisition initiated at "14/01/2017" for program "Family Planning" and period "2017Q1"
        Then I should not be able to edit the requisition
        And I should not be able to skip any products

    Scenario: Program Supervisor should not be able to see action buttons     
        And I should not see "Sync with Server" button
        And I should not see "Submit" button
        And I should not see "Authorize" button
        And I should not see "Approve" button

    Scenario: Program Supervisor should not be able to update adjustments
        When I click on the Total losses and adjustments icon for "Male Condom" product
        Then I should see the Total losses and adjustments modal
        And I should not see "Add" button
        And I should not see "Update" button
        
    Scenario: Program Supervisor should not be able to edit requisition on Non full supply products tab        
        When I navigate to the Non full supply products tab
        Then I should not be able to edit the requisition
        And I should not see "Add Product" button
