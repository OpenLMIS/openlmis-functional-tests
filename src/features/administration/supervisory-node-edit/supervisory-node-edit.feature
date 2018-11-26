Feature: Supervisory Node Edit

    Scenario: Administrator should be able to edit supervisory node basic properties
        Given I have logged with username "administrator" and password "password"
        Given I have navigated to the supervisory node list page

        When I select "SN1" supervisory node for edition
        Then I should be brought to the supervisory node edit page

        When I enter "SN1-FT" as "Code"
        And I enter "FP approval point (Functional Test)" as "Supervisory Node Name"
        And I enter "Functional Test" as "Description"
        And I select nothing from the "Associated Facility" list
        And I click on the "Update Supervisory Node" button
        Then I should be brought to the supervisory node list page

        When I select "SN1-FT" supervisory node for edition
        Then I should be brought to the supervisory node edit page
        And Value of the "Code" should be "SN1-FT"
        And Value of the "Supervisory Node Name" should be "FP approval point (Functional Test)"
        And Value of the "Description" should be "Functional Test"
        And Value of the "Associated Facility" list should be an empty value

        When I enter "SN1" as "Code"
        And I enter "FP approval point" as "Supervisory Node Name"
        And I enter an empty value as "Description"
        And I select "Comfort Health Clinic" from the "Associated Facility" list
        And I click on the "Update Supervisory Node" button
        Then I should be brought to the supervisory node list page

        When I select "SN1" supervisory node for edition
        Then I should be brought to the supervisory node edit page
        And Value of the "Code" should be "SN1"
        And Value of the "Supervisory Node Name" should be "FP approval point"
        And Value of the "Description" should be an empty value
        And Value of the "Associated Facility" list should be "Comfort Health Clinic"

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
        And I enter "FP approval point" as "Supervisory Node Name"
        And I click on the "Update Supervisory Node" button
        Then I should get an error message
        And I click on the "Close" button

        When I enter "SN1" as "Code"
        And I enter an empty value as "Supervisory Node Name"
        And I click on the "Update Supervisory Node" button
        Then I should get an error message
        And I click on the "Close" button
