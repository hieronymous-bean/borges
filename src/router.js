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
        meta: { defaultProjectId: 1 },
        redirect: '/writing/:project',
        children: [
          {
            path: '/writing/:project',
            name: 'WritingDashboard',
            component: WritingDashboard,
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