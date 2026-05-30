import { logs } from "../utils/logs";

import Page from "./page";

class LoginPage extends Page {
  
  /////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////// define selectors using getter methods //////////////////
  /////////////////////////////////////////////////////////////////////////////////////////

  private get inputUsername() { return $("#username") }

  private get inputPassword() { return $("#password") }

  private get btnSubmit() { return $('button[type="submit"]') }

  /////////////////////////////////////////////////////////////////////////////////////////
  //////////////// a method to encapsule automation code to interact with the page ////////
  /////////////////////////////////////////////////////////////////////////////////////////

  /**
   * Login to application
   * @param username 
   * @param password 
   */
  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    logs(`Entered username: ${username}`);
    await this.inputPassword.setValue(password);
    logs(`Entered password: ${password}`);
    await this.btnSubmit.click();
    logs(`Clicked on submit button!!!`);
  }

  // overwrite specific options to adapt it to page object
  public open() {
    return super.open("login");
  }
}

export default new LoginPage();
