import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation';

import * as firebase from 'firebase';
import { firebaseConfig } from './src/utils/config';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
