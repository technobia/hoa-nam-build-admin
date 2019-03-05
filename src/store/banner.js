import uid from 'uuid4';
import { addDocumentWithId, getCollections, deleteDocument } from '@/services/collections';

export default {
  state: {
    collectionName: 'banner',
    loading: false,
    adding: false,
    collections: [],
  },
  mutations: {
    setBannerLoading(state, loading) {
      state.loading = loading;
    },
    setBannerAdding(state, loading) {
      state.loading = loading;
    },
    setBannerCollections(state, collections) {
      state.collections = collections;
    },
  },
  actions: {
    saveBanner({ commit, state, dispatch }, data) {
      commit('setBannerAdding', true);
      const id = uid();
      addDocumentWithId(state.collectionName, id, { ...data, id })
        .then((resp) => {
          commit('setBannerAdding', false);
          dispatch('getBannerData');
        })
        .catch((err) => {
          commit('setBannerAdding', false);
        });
    },
    getBannerData({ commit, state }) {
      commit('setBannerLoading', true);
      getCollections(state.collectionName)
        .then((resp) => {
          commit('setBannerLoading', false);
          const collections = [];
          resp.forEach(doc => collections.push(doc.data()));
          commit('setBannerCollections', collections);
        })
        .catch((err) => {
          commit('setBannerLoading', false);
          console.log(err);
        });
    },
    deleteBanner({ state }, id) {
      deleteDocument(state.collectionName, id);
    },
  },
};
