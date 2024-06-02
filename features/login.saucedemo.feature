Feature: Test Login Functionality

  Scenario Outline: check login with invalid credentials
    Given user is on login page
    When user login with <username> and <password>
    Then the message <message> is displayed
   
    Examples:
      | username      | password     | message                                                                   |
      |               |              | Epic sadface: Username is required                                        |
      | standard_user |              | Epic sadface: Password is required                                        |
      | standard_user | qwerty       | Epic sadface: Username and password do not match any user in this service |
      | standarD_user | secret_sauce | Epic sadface: Username and password do not match any user in this service |
