import firebase from 'firebase/app';

// get all projects //
export const getProjects = async uid => {
  const projectsQuery = await firebase.firestore().collection('projects').where('uid', '==', uid).get();
  const projects = projectsQuery.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }));
  return projects;
};