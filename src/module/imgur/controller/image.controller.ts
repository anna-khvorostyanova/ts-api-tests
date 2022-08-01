import { AccountBaseControllerResponse } from './../api-models/account.response';
import { ApiController } from '../../../api/api-controller';
import { PostImageControllerResponse } from '../api-models/image.response';

export class ImageController extends ApiController {
    static async postImage(image: any, token?: string, params?:any): Promise<PostImageControllerResponse> {
        return this.postMethod({
            path: `image/`,
            body: {"image": image},
            options: {
                headers: {
                    'Authorization': `${token}`
                  },
            }
        })
    }
    static async deleteImage(id: string, token?: string, clientId?: string ): Promise<PostImageControllerResponse> {
        return this.deleteMethod({
            path: `image/${id}`,
            options: {
                headers: {
                    'Authorization': `${token}`
                  },
            }
        })
    }
}