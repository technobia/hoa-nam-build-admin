/* eslint-disable */
import { uploadFile, getDownloadURL } from '@/services/storage';
import { addDocument, getCollections } from '@/services/collections';

const dest = {
  collectionName: 'images'
};

const state = {
  collections: [],
  loading: false,
  uploading: false,
  uploadSuccess: null,
};

const mutations = {
  setUploading(state, uploading) {
    state.uploading = uploading;
  },
  setUploadSuccess(state, success) {
    state.uploadSuccess = success
  },
  setLoading(state, loading) {
    state.loading = loading
  },
  setCollections(state, collections) {
    state.collections = collections
  },
};

const actions = {
  upload({ commit }, data) {
    commit('setUploading', true);
    commit('setUploadSuccess', null);
    uploadFile(data)
      .then(resp => {
        const name = data.name;
        getDownloadURL(name)
          .then(url => {
            addDocument(dest.collectionName, { name, url })
              .then(resp => {
                commit('setUploading', false);
                commit('setUploadSuccess', true);
              })
              .catch(() => {
                commit('setUploading', false);
                commit('setUploadSuccess', false);
              });
          })
          .catch(() => {
            commit('setUploading', false);
            commit('setUploadSuccess', false);
          })
      })
      .catch(err => {
        commit('setUploading', false);
        commit('setUploadSuccess', false);
      })
  },
  getImages({ commit }) {
    commit('setLoading', true);
    getCollections(dest.collectionName)
      .then(resp => {
        commit('setLoading', false);
        const collections = [];
        resp.forEach(doc => collections.push(doc.data()));
        commit('setCollections', collections);
      })
      .catch((err) => {
        commit('setLoading', false);
        console.log(err);
      })
  }
};

export default {
  state,
  mutations,
  actions,
};
