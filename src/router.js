import { createRouter, createWebHistory } from 'vue-router';

// containers //
import ApplicationContainer from './application/ApplicationContainer.vue';
import AuthenticationContainer from './authentication/AuthenticationContainer.vue';

// writing pages //
import Writing from './application/writing/Writing.vue';
import WritingDashboard from './application/writing/views/WritingDashboard.vue';
import WritingDocument from './application/writing/views/WritingDocument.vue';

// authentication pages //
import Login from './authentication/views/Login.vue';

// import vuex store //
import { store } from './store';

const loadDefaultProject = function() {
  const selectedProject = store.getters['application/getProjectSelected'];
  const projects = store.getters['application/getProjects'];
  if (!selectedProject) return projects[0];
  return selectedProject;
}

const loadDefaultDocument = function() {
  const selectedDocument = store.getters['writing/getDocumentSelected'];
  const documents = store.getters['writing/getDocuments'];

  const project = loadDefaultProject();
  

  const result = documents.find(obj => {
    return obj.project === project.id;
  });

  console.log(selectedDocument)

  if (!selectedDocument) return result;

  return selectedDocument;

  
}

const routes = [
  {
    path: '/',
    name: 'ApplicationContainer',
    meta: { requiresAuth: true },
    component: ApplicationContainer,
    redirect: '/writing',
    children: [
      {
        path: '/writing',
        name: 'Writing',
        component: Writing,
        redirect: '/writing/' + loadDefaultProject().id,
        children: [
          {
            path: '/writing/:project',
            name: 'WritingDashboard',
            component: WritingDashboard,
            redirect: '/writing/' + loadDefaultProject().id + '/' + loadDefaultDocument().id,
            meta: { title: 'Project Dashboard' }
          },
          {
            path: '/writing/:project/:id',
            name: 'WritingDocument',
            component: WritingDocument,
            meta: { title: 'Document' }
          }
        ]
      }
    ]
  },
  {
    path: '/auth',
    name: 'AuthenticationContainer',
    component: AuthenticationContainer,
    redirect: '/auth/login',
    children: [
      {
        path: '/auth/login',
        name: 'Login',
        component: Login
      }
    ]
  }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router