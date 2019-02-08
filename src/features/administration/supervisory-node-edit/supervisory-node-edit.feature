Feature: Supervisory Node Edit

    Scenario: Administrator should be able to edit supervisory node basic properties
        Given I have logged with username "administrator" and password "password"
        Given I have navigated to the supervisory node list page

        When I select "SN-NIASSA-PROV" supervisory node for edition
        Then I should be brought to the supervisory node edit page

        When I enter "SN-NIASSA-PROV-FT" as "Code"
        And I enter "Niassa province approval point (EPI) (Functional Test)" as "Supervisory Node Name"
        And I enter "Functional Test" as "Description"
        And I select nothing from the "Associated Facility" list
        And I remove "Cuamba district approval point (EPI)" supervisory node from child nodes
        And I click on the "Update Supervisory Node" button
        Then I should be brought to the supervisory node list page

        When I select "SN-NIASSA-PROV-FT" supervisory node for edition
        Then I should be brought to the supervisory node edit page
        And Value of the "Code" should be "SN-NIASSA-PROV-FT"
        And Value of the "Supervisory Node Name" should be "Niassa province approval point (EPI) (Functional Test)"
        And Value of the "Description" should be "Functional Test"
        And Value of the "Associated Facility" list should be an empty value
        And I should not see "Cuamba district approval point (EPI)" supervisory node in child nodes

        When I enter "SN-NIASSA-PROV" as "Code"
        And I enter "Niassa province approval point (EPI)" as "Supervisory Node Name"
        And I enter an empty value as "Description"
        And I select "Depósito Provincial Niassa" from the "Associated Facility" list
        And I add "Cuamba district approval point (EPI)" supervisory node to child nodes
        And I click on the "Update Supervisory Node" button
        Then I should be brought to the supervisory node list page

        When I select "SN-NIASSA-PROV" supervisory node for edition
        Then I should be brought to the supervisory node edit page
        And Value of the "Code" should be "SN-NIASSA-PROV"
        And Value of the "Supervisory Node Name" should be "Niassa province approval point (EPI)"
        And Value of the "Description" should be an empty value
        And Value of the "Associated Facility" list should be "Depósito Provincial Niassa"
        And I should see "Cuamba district approval point (EPI)" supervisory node in child nodes

    Scenario: Administrator should not be able to change supervisory node code to existing one
        When I enter "SN2" as "Code"
        And I click on the "Update Supervisory Node" button
        Then I should get an error message
        And I click on the "Close" button

    Scenario: Administrator should not be able to save supervisory node without code and/or name
        When I enter an empty value as "Code"
        And I enter an empty value as "Supervisory Node Name"
        And I click on the "Update Supervisory Node" button
        Then I should get an error message
        And I click on the "Close" button

        When I enter an empty value as "Code"
        And I enter "Niassa province approval point (EPI)" as "Supervisory Node Name"
        And I click on the "Update Supervisory Node" button
        Then I should get an error message
        And I click on the "Close" button

        When I enter "SN-NIASSA-PROV" as "Code"
        And I enter an empty value as "Supervisory Node Name"
        And I click on the "Update Supervisory Node" button
        Then I should get an error message
        And I click on the "Close" button

    Scenario: Administrator should be able to remove parent node
        Given I have navigated to the supervisory node list page

        When I select "SN-CUAMBA-DIST" supervisory node for edition
        Then I should be brought to the supervisory node edit page

        When I select nothing from the "Parent Node" list
        And I click on the "Update Supervisory Node" button
        Then I should be brought to the supervisory node list page

        When I select "SN-CUAMBA-DIST" supervisory node for edition
        Then I should be brought to the supervisory node edit page
        And Value of the "Parent Node" list should be an empty value

    Scenario: Administrator should be able to set parent node
        When I select "Niassa province approval point (EPI)" from the "Parent Node" list
        And I click on the "Update Supervisory Node" button
        Then I should be brought to the supervisory node list page

        When I select "SN-CUAMBA-DIST" supervisory node for edition
        Then I should be brought to the supervisory node edit page
        And Value of the "Parent Node" list should be "Niassa province approval point (EPI)"

    Scenario: Administrator should be able to remove partner nodes
        Given I have navigated to the supervisory node list page

        When I select "SN-LILONGWE-DIST-ARV-1" supervisory node for edition
        Then I should be brought to the supervisory node edit page

        When I remove "CHAZ Lilongwe sub point" supervisory node from partner nodes
        And I click on the "Update Supervisory Node" button
        Then I should be brought to the supervisory node list page

        When I select "SN-LILONGWE-DIST-ARV-1" supervisory node for edition
        Then I should be brought to the supervisory node edit page
        And I should not see "CHAZ Lilongwe sub point" supervisory node in partner nodes

    Scenario: Administrator should be able to add partner nodes
        When I add "CHAZ Lilongwe sub point" supervisory node to partner nodes
        And I click on the "Update Supervisory Node" button
        Then I should be brought to the supervisory node list page

        When I select "SN-LILONGWE-DIST-ARV-1" supervisory node for edition
        Then I should be brought to the supervisory node edit page
        And I should see "CHAZ Lilongwe sub point" supervisory node in partner nodes
