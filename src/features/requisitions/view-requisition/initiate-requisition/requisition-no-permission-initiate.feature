Feature: Initiate Requisition No Permission

    Scenario: District Storeroom Manager should not be able to initiate requisition
        Given I navigate to the login page
        And I have logged with username "dsrmanager" and password "password"
        Then I should not see "Create/Authorize" tab under "Requisitions"
