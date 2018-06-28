import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

/*
database.ref().set({
  name: 'Matheus',
  age: '24',
  isSingle: false,
  job: {
    company: 'Google',
    location: 'sei lá'
  },
  location: {
    city: 'Campo Grande',
    country: 'Brazil'
  }
}).then(() => {
  console.log('data is saved');
}).catch((e) => {
  console.log('failed', e);
});

database.ref('age').set(30);
database.ref('location/city').set('Rio de Janeiro');
database.ref('atributes').set({height: '1,80m', weight: '70kg'});
database.ref('location/city').remove();
database.ref().update({
  'job/company': 'Amazon',
  'job/location': 'Brazil'
});

database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
});
*/
