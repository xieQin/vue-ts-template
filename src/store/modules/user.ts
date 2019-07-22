import {
  GetterTree,
  ActionTree,
  MutationTree,
} from 'vuex';
import * as type from '@/store/types';
import { queryUserInfo } from '@/api/apis/user';
import * as users from '@/interface/user';

const state:users.user = {
  userInfo: {
    phoneNo: '',
  },
  loginInfo: {
    accessKey: '',
    thirdUserNo: '',
    userId: '',
  },
};

const getters:GetterTree<users.user, any> = {
  userInfo: state => state.userInfo,
  loginInfo: state => state.loginInfo,
};

const actions:ActionTree<users.user, any> = {
  async [type.GET__USER__INFO]({ commit }, payload) {
    const user = await queryUserInfo(payload);
    commit(type.GET__USER__INFO, user);
  },
};

const mutations:MutationTree<users.user> = {
  [type.GET__USER__INFO](state, data: users.userInfo) {
    state.userInfo = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
