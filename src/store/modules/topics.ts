import {
  GetterTree,
  ActionTree,
  MutationTree,
} from 'vuex';
import * as type from '@/store/types';
import { getTopics } from '@/api/apis/cnnode';
import * as topics from '@/interface/cnnodeApi';

const state:topics.cnnodeTopics = {
  topics: [],
};

const getters:GetterTree<topics.cnnodeTopics, any> = {
  topics: state => state.topics,
};

const actions:ActionTree<topics.cnnodeTopics, any> = {
  async [type.GET__TOPICS]({ commit }) {
    const topics = await getTopics();
    commit(type.GET__TOPICS, topics);
  },
};

const mutations:MutationTree<topics.cnnodeTopics> = {
  [type.GET__TOPICS](state, data: Array<topics.cnnodeTopicsItem>) {
    state.topics = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
