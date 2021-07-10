import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import firebase from "firebase/app";

import { getDocuments } from './application/writing/utilities/DocumentUtilities.js';
import { getProjects } from './application/writing/utilities/ProjectUtilities.js';

// init store //
export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    authentication: {
      namespaced: true,
      state: () => ({
        user: '',
        token: localStorage.getItem('user-token') || '',
        status: '',
      }),
      mutations: {
        AUTH_REQUEST: (state) => {
          state.status = 'loading'
        },
        AUTH_SUCCESS: (state, payload) => {
          state.user = payload.user,
          state.status = 'success',
          state.token = payload.token
        },
        AUTH_ERROR: (state) => {
          state.status = 'error authenticating'
        },
        AUTH_LOGOUT: (state) => {
          state.user = '',
          state.token = '',
          state.status = ''
        }
      },
      getters: {
        getUser: (state) => state.user,
        isAuthenticated: state => !!state.token,
        authStatus: state => state.status,
      },
      actions: {
        login: ({ commit }) => {
          var provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider).then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            localStorage.setItem('user-token', token);
            commit('AUTH_SUCCESS', { token: token, user: user });
            return user;
          }).catch((error) => {
            commit('AUTH_ERROR', error);
            localStorage.removeItem('user-token');
            return error;
          });
        },
        logout: ({ commit }) => {
          firebase.auth().signOut().then(() => {
            commit('AUTH_LOGOUT');
            localStorage.removeItem('user-token');
          });
        },
      }
    },
    application: {
      plugins: [createPersistedState()],
      namespaced: true,
      state: () => ({
        
      }),
      mutations: {

      },
      getters: {

      },
      actions: {
        
      }
    },
    writing: {
      plugins: [createPersistedState()],
      namespaced: true,
      state: () => ({
        documents: localStorage.getItem('documents') || '',
        documentstatus: '',
        documentSelected: '',
        projects: localStorage.getItem('projects') || '',
        projectstatus: '',
        projectSelected: ''
      }),
      mutations: {
        documentRequest: (state) => {
          state.documentstatus = 'loading'
        },
        documentSuccess: (state, payload) => {
          state.documents = payload.documents,
          state.documentstatus = 'success'
        },
        documentSelected: (state, document) => {
          state.documentSelected = document
        },
        projectRequest: (state) => {
          state.projectstatus = 'loading'
        },
        projectSuccess: (state, payload) => {
          state.projects = payload.projects,
          state.projectstatus = 'success'
        },
        projectSelected: (state, payload) => {
          state.projectSelected = payload.project
        }
      },
      getters: {
        getProjects: state => state.projects,
        getDocuments: state => state.documents,
        getSelectedDocument: state => state.documentSelected
      },
      actions: {
        getDocuments: ({ commit, state }) => {
          commit('documentRequest', { });
          const uid = store.state.authentication.user.uid;
          return getDocuments(uid).then((response) => {
            return response;
          }).then(loadedDocuments => {
            commit('documentSuccess', { documents: loadedDocuments });
            return loadedDocuments;
          });
        },
        getProjects: ({ commit, state }) => {
          commit('projectRequest', { });
          const uid = store.state.authentication.user.uid;
          return getProjects(uid).then((response) => {
            return response;
          }).then(loadedProjects => {
            commit('projectSuccess', { projects: loadedProjects });
            return loadedProjects;
          });
        },
      }
    }
  }
})