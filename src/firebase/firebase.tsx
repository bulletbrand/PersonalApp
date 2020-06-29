import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBKIsA62o-ytqiI1alfylwXiqm0dDbUclY',
  authDomain: 'personalapp-bda8e.firebaseapp.com',
  databaseURL: 'https://personalapp-bda8e.firebaseio.com',
  projectId: 'personalapp-bda8e',
  storageBucket: 'personalapp-bda8e.appspot.com',
  messagingSenderId: '91112351439',
  appId: '1:91112351439:web:f301d6fd633e16f44479ba',
  measurementId: 'G-01007V6T8V',
}

firebase.initializeApp(firebaseConfig)
export default firebase
