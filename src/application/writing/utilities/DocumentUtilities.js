import firebase from 'firebase/app';

// get all documents //
export const getDocuments = async uid => {
  const documentsQuery = await firebase.firestore().collection('documents').where('uid', '==', uid).get();
  const documents = documentsQuery.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }));
  return documents;
}

//add new document //
export const addNewDocument = async uid => {
  const res = await firebase.firestore().collection('documents').add({
    name: 'New Document',
    uid: uid,
    body: '',
    type: 'Page'
  }).then(function(docRef) {
    return updateDocumentWithId(docRef.id);
  });
  return res;
}

// update document with its own id //
export const updateDocumentWithId = async(documentId) => {
  await firebase.firestore().collection('documents').doc(documentId).update({
    id: documentId
  });
}