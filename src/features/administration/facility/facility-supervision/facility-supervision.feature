Feature: Supervised facility selection

 Scenario: Storeroom Manager should not be able to select the "Supervised Facility" option because he has no supervision roles
        Given I have logged with username "srmanager4" and password "password"

        When I go to initiate requisition screen
        Then I should be brought to the initiate requisition screen
        And I should not be able to select "Supervised Facility" checkbox
        And I log out

     Scenario: Administrator should be able to add a supervision role to the Storeroom Manager
        Given I have logged with username "administrator" and password "password"

        When I go to the user list page
        Then I should be brought to the user list page
        When I click on the "Filter" button without waiting for loading modal
        And I enter "srmanager4" as "Username"
        And I click on the "Search" button
        Then I should be brought to the user list page

        When I click on the "Roles" button
        Then I should be brought to the user edit page

        When I select "Essential Meds" from the "Program" list
        And I select "EM approval point (Balaka District Hospital)" from the "Supervisory node" list
        And I select "Storeroom Manager" from the "Role" list
        And I click on the "Add Role" button
        And I click on the "Save User Roles" button
        Then I should be brought to the user list page
        And I log out

     Scenario: Storeroom Manager should be able to select the "Supervised Facility" option because he has been assigned a supervision role
        Given I have logged with username "srmanager4" and password "password"

        When I go to initiate requisition screen
        Then I should be brought to the initiate requisition screen
        And I select "Supervised Facility" checkbox
        Then checkbox with label "Supervised Facility" should be checked
        And I log out


     Scenario: Administrator should be able to un-assign the supervision role from the Storeroom Manager
        Given I have logged with username "administrator" and password "password"

        When I go to the user list page
        Then I should be brought to the user list page
        When I click on the "Filter" button without waiting for loading modal
        And I enter "srmanager4" as "Username"
        And I click on the "Search" button
        Then I should be brought to the user list page

        When I click on the "Roles" button
        Then I should be brought to the user edit page

        When I remove role "Storeroom Manager" for program "Essential Meds" and supervisory node "EM approval point (Balaka District Hospital)"
        And I confirm remove role modal
        And I click on the "Save User Roles" button
        Then I should see a successful notification saying "User roles updated successfully!"
        And I log out

 Scenario: Storeroom Manager should not be able to select the "Supervised Facility" option because he has no supervision roles
        Given I have logged with username "srmanager4" and password "password"

        When I go to initiate requisition screen
        Then I should be brought to the initiate requisition screen
        And I should not be able to select "Supervised Facility" checkbox
        And I log out
