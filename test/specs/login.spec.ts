import { data } from '../env/data';
import loginPage from  '../pages/login.page';
import securePage from '../pages/secure.page';

describe('Login Example Test Suite', () => {

    it('Should login with valid credentials', async () => {
        await loginPage.open();

        await loginPage.login(data.user, data.password);
        await expect(securePage.flashAlert).toBeExisting();
        await expect(securePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

});


