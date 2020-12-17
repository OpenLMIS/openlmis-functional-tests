Feature: Stock-based requisitions: Calc Order Qty ISA with entered Requested quantity column values

    Scenario: Vsrmanager should be able to submit and authorize a requisition with entered Requested quantity values
        Given I navigate to the login page
        And I have logged with username "vsrmanager1" and password "password"

        When I go to initiate requisition screen
        Then I should be brought to the initiate requisition screen

        When I select a "Cuamba, Cuamba" facility
        And I click on the "Search" button
        Then I should see periods table

        When I click on the "Proceed" button
        Then I should be redirected to requisition view screen

        When I set "Requested quantity" as "10" for "BCG" product
        And I set "Requested quantity" as "10" for "IPV" product
        And I set "Requested quantity" as "10" for "Measles" product
        And I set "Requested quantity" as "10" for "PCV10" product
        And I set "Requested quantity" as "10" for "Pentavalent (1 dose)" product
        And I set "Requested quantity" as "10" for "Pentavalent (10 dose)" product
        And I set "Requested quantity" as "10" for "Polio (20 dose)" product
        And I set "Requested quantity" as "10" for "Rotavirus" product
        And I set "Requested quantity" as "10" for "Safety Box" product
        And I set "Requested quantity" as "10" for "Syringe 0.05ml" product
        And I wait "4" seconds for UI adjustment
        And I go to the "2" page
        And I wait "4" seconds for UI adjustment
        And I set "Requested quantity" as "10" for "Syringe 0.5ml" product
        And I set "Requested quantity" as "10" for "Syringe 5ml" product
        And I set "Requested quantity" as "10" for "VAT" product
        And I click on the "Submit & Authorize" button
        And I confirm the submit
        Then I should get an error message

        When I click on the "Close" button
        And I set "Requested quantity explanation" as "test" for "Syringe 0.5ml" product
        And I set "Requested quantity explanation" as "test" for "Syringe 5ml" product
        And I set "Requested quantity explanation" as "test" for "VAT" product
        And I wait "4" seconds for UI adjustment
        And I go to the "1" page
        And I wait "4" seconds for UI adjustment
        And I set "Requested quantity explanation" as "test" for "BCG" product
        And I set "Requested quantity explanation" as "test" for "IPV" product
        And I set "Requested quantity explanation" as "test" for "Measles" product
        And I set "Requested quantity explanation" as "test" for "PCV10" product
        And I set "Requested quantity explanation" as "test" for "Pentavalent (1 dose)" product
        And I set "Requested quantity explanation" as "test" for "Pentavalent (10 dose)" product
        And I set "Requested quantity explanation" as "test" for "Polio (20 dose)" product
        And I set "Requested quantity explanation" as "test" for "Rotavirus" product
        And I set "Requested quantity explanation" as "test" for "Safety Box" product
        And I set "Requested quantity explanation" as "test" for "Syringe 0.05ml" product

        And I click on the "Submit & Authorize" button
        And I confirm the submit
        Then I should see a successful notification saying "Requisition has been submitted!"
        And I log out

    Scenario: Divo should be able to approve the requisition with Approved quantity value equal to Requested quantity value and Calc Order Qty ISA value equal to the difference between ISA and SOH values
        Given I have logged with username "divo1" and password "password"

        When I navigate to approve requisitions screen
        And I select requisition for "EPI" program and "Mar2017" period for approve requisitions
        Then I should be brought to the product grid screen

        And I should be able to see the input value for "Approved quantity" column for "BCG" product equal to "Requested quantity" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "BCG" product

        And I should be able to see the input value for "Approved quantity" column for "IPV" product equal to "Requested quantity" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "IPV" product

        And I should be able to see the input value for "Approved quantity" column for "Measles" product equal to "Requested quantity" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "Measles" product

        And I should be able to see the input value for "Approved quantity" column for "PCV10" product equal to "Requested quantity" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "PCV10" product

        And I should be able to see the input value for "Approved quantity" column for "Pentavalent (1 dose)" product equal to "Requested quantity" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "Pentavalent (1 dose)" product

        And I should be able to see the input value for "Approved quantity" column for "Pentavalent (10 dose)" product equal to "Requested quantity" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "Pentavalent (10 dose)" product

        And I should be able to see the input value for "Approved quantity" column for "Polio (20 dose)" product equal to "Requested quantity" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "Polio (20 dose)" product

        And I should be able to see the input value for "Approved quantity" column for "Rotavirus" product equal to "Requested quantity" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "Rotavirus" product

        And I should be able to see the input value for "Approved quantity" column for "Safety Box" product equal to "Requested quantity" column

        And I should be able to see the input value for "Approved quantity" column for "Syringe 0.05ml" product equal to "Requested quantity" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "Syringe 0.05ml" product

        When I go to the "2" page
        And I wait "4" seconds for UI adjustment
        Then I should be able to see the input value for "Approved quantity" column for "Syringe 0.5ml" product equal to "Requested quantity" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "Syringe 0.5ml" product

        And I should be able to see the input value for "Approved quantity" column for "Syringe 5ml" product equal to "Requested quantity" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "Syringe 5ml" product

        And I should be able to see the input value for "Approved quantity" column for "VAT" product equal to "Requested quantity" column
        And I should be able to see the value for "Calc Order Qty ISA" equal to a difference between "Ideal Stock Amount" and "Stock on hand" columns for "VAT" product

        When I click on the "Approve" button
        And I confirm the approval
        Then I should see a successful notification saying "Requisition has been approved!"
