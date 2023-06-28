import { auth } from './firebase-config';
import { setUser } from './reducer';

export const onAuthStateChanged = () => (dispatch) => {
  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      dispatch(
        setUser({
          uid: authUser.uid,
          email: authUser.email,
          displayName: authUser.displayName,
          photoURL: authUser.photoURL,
        })
      );
    } else {
      dispatch(setUser(null));
    }
  });
};