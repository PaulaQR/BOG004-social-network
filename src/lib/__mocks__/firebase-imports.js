export const getAuth = () => Promise.resolve({});
export const createUserWithEmailAndPassword = jest.fn((email, password) => {
  const userCredentials = {
    user: { uid: '123' },
  };
  const error = {
    status: false,
    code: 'ERROR USER YA TIENE CUENTA auth/email-already-in-use',
  };
  return new Promise((resolve, reject) => {
    if (email !== 'ana1@gmail.com' && password !== 'ana123456') { // caso en el que ya existe usuario
      resolve(userCredentials.user);
    } else {
      reject(error.code);
    }
  });
});
export const signInWithEmailAndPassword = () => Promise.resolve({});
export const sendEmailVerification = () => Promise.resolve({ user: '' });
export const signInWithPopup = () => Promise.resolve({});
export class GoogleAuthProvider {}
export const signOut = () => Promise.resolve({});
export const initializeApp = () => Promise.resolve({});
export const getFirestore = () => Promise.resolve({});
export const collection = () => Promise.resolve({});
export const addDoc = () => Promise.resolve({});
export const getDatabase = () => Promise.resolve({});
export const getDocs = () => Promise.resolve({});
export const onSnapshot = () => Promise.resolve({});
export const deleteDoc = () => Promise.resolve({});
export const doc = () => Promise.resolve({});
export const getDoc = () => Promise.resolve({});
export const updateDoc = () => Promise.resolve({});
