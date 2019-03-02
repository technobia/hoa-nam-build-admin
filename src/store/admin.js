/* eslint-disable */
import _ from 'lodash'
import { getDocuments, setDocuments } from '@/services/collections'

const dest = {
  collectionName: 'root',
  documentName: 'home'
};

const state = {
  homepage: {},
  homepageLoading: false,
  homepageUpdated: false,
};

const mutations = {
  setHomepage(state, homepage) {
    state.homepage = homepage;
  },
  updateHomepageField(state, { path, text }) {
    state.homepage = _.set(state.homepage, [path], text)
  },
  setHomepageLoading(state, loading) {
    state.homepageLoading = loading;
  },
  setHomepageUpdated(state, updated) {
    state.homepageUpdated = updated;
  },
};

const actions = {
  getHomepage({ commit }) {
    commit('setHomepageLoading', true);
    getDocuments(dest.collectionName, dest.documentName)
      .then(resp => {
        commit('setHomepageLoading', false);
        commit('setHomepage', resp);
      })
      .catch(err => {
        commit('setHomepageLoading', false);
      })
  },
  setHomepage({ commit, state }) {
    commit('setHomepageLoading', true);
    commit('setHomepageUpdated', false);
    setDocuments(dest.collectionName, dest.documentName, state.homepage)
      .then(resp => {
        commit('setHomepageLoading', false);
        commit('setHomepageUpdated', true);
      })
      .catch(err => {
        commit('setHomepageLoading', false);
      })
  }
};

export default {
  state,
  mutations,
  actions
};
