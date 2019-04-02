Feature: Splitting requisitions for multiple suppliers

   The goal is to verify that OpenLMIS enables to split products within a requisition by supply partner
   so that each partner only supplies the products they are configured by the administrator to supply.

   Scenario: District Store Manager should be able to approve a requisition which will be split
      Given I have logged with username "dsrmanager" and password "password"

      When I navigate to approve requisitions screen
      Then I should be redirected to approve requisitions screen
      And I should see a requisition for "ARV" program, "Feb2017" period inside the table

      When I select requisition for "ARV" program and "Feb2017" period for approve requisitions
      Then I should be brought to the product grid screen
      And I should be able to see the input value of "Approved quantity" column for "Abacavir 300mg Tables" product equal to "40"
      And I should be able to see the input value of "Approved quantity" column for "Lamivudine/Zidovudine/Nevirapine 30/60/50mg" product equal to "40"
      And I should be able to see the input value of "Approved quantity" column for "Tenofovir/Emitricitabine/Efavirenz 300mg/200mg/600mg" product equal to "40"
      And I should be able to see the input value of "Approved quantity" column for "Abacavir oral solution 20mg/ml" product equal to "25"
      And I should be able to see the input value of "Approved quantity" column for "Zidovudine/Lamivudine 300/150mg Tablets" product equal to "5"
      And I should be able to see the input value of "Approved quantity" column for "Efavirenz 200mg" product equal to "37"
      And I should be able to see the input value of "Approved quantity" column for "Nevirapine Tablets for Oral Susp 50mg" product equal to "10"
      And I should be able to see the input value of "Approved quantity" column for "Abacavir/Lamivudine 60/30mg" product equal to "10"
      And I should be able to see the input value of "Approved quantity" column for "Tenofovir 300mg Tablets" product equal to "60"
      And I should be able to see the input value of "Approved quantity" column for "Co-trimoxazole 120mg Tablets" product equal to "65"

      When I go to the "2" page
      Then I should be able to see the input value of "Approved quantity" column for "Efavirenz 50mg" product equal to "45"
      And I should be able to see the input value of "Approved quantity" column for "Lamivudine/Zidovudine 30/60mg (Pead)" product equal to "40"

      When I click on the "Approve" button
      And I confirm the approval
      Then I should see a successful notification saying "Requisition has been approved!"
      And I should be redirected to approve requisitions screen
      And I log out

   Scenario: Program Supervisor should be able to approve split requisition
      Given I have logged with username "psupervisor" and password "password"

      When I navigate to approve requisitions screen
      Then I should be redirected to approve requisitions screen
      And I should see a requisition for "ARV" program, "Feb2017" period inside the table

      When I select requisition for "ARV" program and "Feb2017" period for approve requisitions
      Then I should be brought to the product grid screen
      And I should be able to see the input value of "Approved quantity" column for "Abacavir 300mg Tables" product equal to "40"
      And I should be able to see the input value of "Remarks" column for "Lamivudine/Zidovudine/Nevirapine 30/60/50mg" product equal to "Supplied by other warehouse/partner."
      And I should be able to see the input value of "Approved quantity" column for "Tenofovir/Emitricitabine/Efavirenz 300mg/200mg/600mg" product equal to "40"
      And I should be able to see the input value of "Remarks" column for "Abacavir oral solution 20mg/ml" product equal to "Supplied by other warehouse/partner."
      And I should be able to see the input value of "Approved quantity" column for "Zidovudine/Lamivudine 300/150mg Tablets" product equal to "5"
      And I should be able to see the input value of "Remarks" column for "Efavirenz 200mg" product equal to "Supplied by other warehouse/partner."
      And I should be able to see the input value of "Approved quantity" column for "Nevirapine Tablets for Oral Susp 50mg" product equal to "10"
      And I should be able to see the input value of "Remarks" column for "Abacavir/Lamivudine 60/30mg" product equal to "Supplied by other warehouse/partner."
      And I should be able to see the input value of "Approved quantity" column for "Tenofovir 300mg Tablets" product equal to "60"
      And I should be able to see the input value of "Remarks" column for "Co-trimoxazole 120mg Tablets" product equal to "Supplied by other warehouse/partner."

      When I go to the "2" page
      Then I should be able to see the input value of "Approved quantity" column for "Efavirenz 50mg" product equal to "45"
      And I should be able to see the input value of "Remarks" column for "Lamivudine/Zidovudine 30/60mg (Pead)" product equal to "Supplied by other warehouse/partner."

      When I click on the "Approve" button
      And I confirm the approval
      Then I should see a successful notification saying "Requisition has been approved!"
      And I should be redirected to approve requisitions screen
      And I log out

   Scenario: Partner user should be able to see partner requisition
      Given I have logged with username "chaz" and password "password"

      When I navigate to approve requisitions screen
      Then I should be redirected to approve requisitions screen
      And I should see a requisition for "ARV" program, "Feb2017" period inside the table

      When I select requisition for "ARV" program and "Feb2017" period for approve requisitions
      Then I should be brought to the product grid screen
      And I should be able to see the input value of "Approved quantity" column for "Lamivudine/Zidovudine/Nevirapine 30/60/50mg" product equal to "40"
      And I should be able to see the input value of "Approved quantity" column for "Abacavir oral solution 20mg/ml" product equal to "25"
      And I should be able to see the input value of "Approved quantity" column for "Efavirenz 200mg" product equal to "37"
      And I should be able to see the input value of "Approved quantity" column for "Abacavir/Lamivudine 60/30mg" product equal to "10"
      And I should be able to see the input value of "Approved quantity" column for "Co-trimoxazole 120mg Tablets" product equal to "65"
      And I should be able to see the input value of "Approved quantity" column for "Lamivudine/Zidovudine 30/60mg (Pead)" product equal to "40"

   Scenario: Partner user should be able to approve partner requisition
      When I click on the "Approve" button
      And I confirm the approval
      Then I should see a successful notification saying "Requisition has been approved!"
      And I should be redirected to approve requisitions screen
      And I log out
