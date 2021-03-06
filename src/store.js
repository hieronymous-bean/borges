import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import firebase from "firebase/app";

import { getDocuments } from './application/writing/utilities/DocumentUtilities.js';
import { getProjects } from './application/general/utilities/ProjectUtilities.js';

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
        projects: localStorage.getItem('projects') || '',
        projectstatus: '',
        projectSelected: ''
      }),
      mutations: {
        projectRequest: (state) => {
          state.projectstatus = 'loading'
        },
        projectSuccess: (state, payload) => {
          state.projects = payload.projects,
          state.projectstatus = 'success'
        },
        projectSelected: (state, project) => {
          state.projectSelected = project
        },
        projectCreate: (state, newProject) => {
          state.projects.push(newProject);
        }
      },
      getters: {
        getProjects: state => state.projects,
        getProjectSelected: state => state.projectSelected
      },
      actions: {
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
    },
    writing: {
      plugins: [createPersistedState()],
      namespaced: true,
      state: () => ({
        documents: localStorage.getItem('documents') || '',
        documentstatus: '',
        documentSelected: ''
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
        documentCreate: (state, newDocument) => {
          state.documents.push(newDocument);
        },
        documentUpdateName: (state, documentName) => {
          state.documentSelected.name = documentName
        }
      },
      getters: {
        getDocuments: state => state.documents,
        getSelectedDocument: state => state.documentSelected
      },
      actions: {
        getDocuments: ({ commit, state }) => {
          commit('documentRequest', { });
          const uid = store.state.authentication.user.uid;
          const project = store.state.application.projectSelected;
          return getDocuments(uid, project).then((response) => {
            return response;
          }).then(loadedDocuments => {
            commit('documentSuccess', { documents: loadedDocuments });
            return loadedDocuments;
          });
        }
      }
    }
  }
})