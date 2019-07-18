import userAPI from '@/api/base/user';
import { userInfo, loginInfo } from '@/interface/user';

export const queryUserInfo = (payload: loginInfo): Promise<userInfo> => userAPI('userAPI.queryUserInfo', payload)
