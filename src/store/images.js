/* eslint-disable */
import uid from 'uuid4';
import { uploadFile, getDownloadURL, deleteFile } from '@/services/storage';
import { addDocumentWithId, getCollections, deleteDocument } from '@/services/collections';

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
  setImagesLoading(state, loading) {
    state.loading = loading
  },
  setImageCollections(state, collections) {
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
            const id = uid();
            addDocumentWithId(dest.collectionName, id, { id, name, url })
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
    commit('setImagesLoading', true);
    getCollections(dest.collectionName)
      .then(resp => {
        commit('setImagesLoading', false);
        const collections = [];
        resp.forEach(doc => collections.push(doc.data()));
        commit('setImageCollections', collections);
      })
      .catch((err) => {
        commit('setImagesLoading', false);
        console.log(err);
      })
  },
  deleteImage({ commit, dispatch }, { fullpath, id }) {
    deleteFile(fullpath);
    deleteDocument(dest.collectionName, id);
  }
};

export default {
  state,
  mutations,
  actions,
};
