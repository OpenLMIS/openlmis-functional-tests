Feature: Adding new cold chain equipment with a proper rights

The goal is to verify that OpenLMIS enables to add cold chain equipment by a given proper rights

    Scenario: Administrator should be able to see cce inventory list page
          Given I have logged with username "administrator" and password "password"

          When I navigate to the cce inventory list page
          Then I should be brought to the cce inventory list page
          And I should see "Add Equipment" button

          When I click on the "Add Equipment" button
          Then I should be brought to the cold chain equipment creation page
          And I select "Gas" from the "Equipment Type" list
          And I select "B Medical RCW 50 EG" from the "Make/Model" list





















