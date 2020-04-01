import firebase from 'firebase/app';
import 'firebase/auth';
import { Config } from '../configs/firebase.config';

firebase.initializeApp(Config);

export default firebase;
