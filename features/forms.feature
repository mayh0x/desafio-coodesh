Feature: Forms

  Scenario: Checking if the forms are correct
    Given I access the Coodesh Beta page
    When I enter the login page
    And I enter on my account
    And I go to the profile fill page (https://beta.coodesh.com/onboarding/developer/profile)
    And I fill the fields correctly
    Then I finish filling my profile correctly