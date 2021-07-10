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

//add new project //
export const addNewProject = async (uid, project) => {
  const res = await firebase.firestore().collection('projects').add({
    name: project.name,
    uid: uid,
    color: project.color,
    icon: project.icon
  }).then(function(docRef) {
    return updateProjectWithId(docRef.id);
  });
  return res;
}

// update project with its own id //
export const updateProjectWithId = async(projectId) => {
  await firebase.firestore().collection('projects').doc(projectId).update({
    id: projectId
  });
}