import { auth } from '@/connectDb';

export const logout = () => auth.signOut();

export const login = (email, password) => auth.signInWithEmailAndPassword(email, password);

export default {};
