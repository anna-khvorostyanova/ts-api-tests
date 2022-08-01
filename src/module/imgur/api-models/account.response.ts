import { ApiResponse } from '../../../api/request-interfaces.d';

export interface AccountBaseControllerResponseBody {
    data: Data;
    success: boolean;
    status: number;
}
export interface Data {
    id: number;
    url: string;
    bio?: any;
    avatar: string;
    avatar_name: string;
    cover: string;
    cover_name: string;
    reputation: number;
    reputation_name: string;
    created: number;
    pro_expiration: boolean;
    user_follow: UserFollow;
    is_blocked: boolean;
}

export interface UserFollow {
    status: boolean;
}
export interface AccountBaseControllerResponse extends ApiResponse {
    body: AccountBaseControllerResponseBody;
}