import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation';

import * as firebase from 'firebase';
import { firebaseConfig } from './src/utils/fireConfig';

if (firebase.apps.length === 0) {
  console.log('firebase inicializado');
  firebase.initializeApp(firebaseConfig);
} else {
  console.log('firebase já iniciado');
}

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
