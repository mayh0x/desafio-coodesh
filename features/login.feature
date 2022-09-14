Feature: Login

  Scenario: Checking if the login page loads correctly
    Given I access the Coodesh Beta page
    When I enter the login page
    Then the login page loads its components correctly


  Scenario: Creating an account
    Given I access the Coodesh Beta page
    When I enter the login page
    And I click on the register button
    And I fill in the fields correctly
    Then I can create an account


  Scenario: Creating an account with Google
    Given I access the Coodesh Beta page
    When I enter the login page
    And I click on the register button
    And I click the Google button
    And I log into a Google account
    Then I can create an account