import { AccountBaseControllerResponse } from './../api-models/account.response';
import { ApiController } from '../../../api/api-controller';

export class AccountController extends ApiController {
    static async getAccountBaseInfo(username: string, token: string): Promise<AccountBaseControllerResponse> {
        return this.getMethod({
            path: `account/${username}`,
            options: {
                headers: {
                    'Authorization': `${token}`
                  },
            }
        })
    }
}