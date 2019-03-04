/* eslint-disable */
import uid from 'uuid4';
import { addDocumentWithId, getCollections, deleteDocument } from '@/services/collections';

export default {
  state: {
    collectionName: 'projects',
    collections: [],
    loading: false,
    adding: false,
  },
  mutations: {
    setProjectCollections(state, collections) {
      state.collections = collections
    },
    setProjectLoading(state, loading) {
      state.loading = loading
    },
    setProjectAdding(state, adding) {
      state.adding = adding
    }
  },
  actions: {
    getProjects({ commit, state }) {
      commit('setProjectLoading', true);
      getCollections(state.collectionName)
        .then(resp => {
          commit('setProjectLoading', false);
          const collections = [];
          resp.forEach(doc => collections.push(doc.data()));
          commit('setProjectCollections', collections);
        })
        .catch(err => {
          commit('setProjectLoading', false);
          console.log(err);
        })
    },
    addProject({ commit, state, dispatch }, data) {
      const id = uid();
      commit('setProjectAdding', true);
      addDocumentWithId(state.collectionName, id, { ...data, id })
        .then(() => {
          commit('setProjectAdding', false);
          dispatch('getProjects')
        })
        .catch((err) => {
          commit('setProjectAdding', false);
          console.log(err);
        })
    },
    deleteProject({ commit, state, dispatch }, id) {
      deleteDocument(state.collectionName, id)
        .then(() => dispatch('getProjects'))
    },
    updateProject({ commit, state, dispatch }, data) {
      commit('setProjectAdding', true);
      addDocumentWithId(state.collectionName, data.id, data)
        .then(() => {
          commit('setProjectAdding', false);
          dispatch('getProjects')
        })
        .catch((err) => {
          commit('setProjectAdding', false);
          console.log(err);
        })
    }
  }
};
