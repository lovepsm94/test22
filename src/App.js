import logo from "./logo.svg";
import "./App.css";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { useEffect } from "react";

import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

function App() {
  useEffect(() => {
    console.log("first2");
    const firebaseConfig = {
      apiKey: "AIzaSyD1lkubC3FzV-_5yw03FqLnXTTcaM4Fv-w",
      authDomain: "piscale-chat-sampleapp.firebaseapp.com",
      projectId: "piscale-chat-sampleapp",
      storageBucket: "piscale-chat-sampleapp.appspot.com",
      messagingSenderId: "293101118448",
      appId: "1:293101118448:web:b9ea191b613a3f8568b335",
    };

    // Initialize Firebase
    let app;
    if (getApps().length === 0) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApp();
    }
    const messaging = getMessaging(app);

    getToken(messaging, {
      vapidKey:
        "BKnGk0_VHjLjPCHeH8pfCdguPZ61vyhbL8vZM_s1Q2iAbkPB6D3hnSSBZe2woFpv5I97rnf3_7-0-YmGomhOYdw",
    }).then((token) => {
      console.log(token, "<- token");
    });
  }, []);
  const showNoti = () => {
    window.navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification("áđâs", { body: "qweqweqwe" });
    });
  };
  return (
    <div className="App">
      <button onClick={showNoti}>click</button>
    </div>
  );
}

export default App;
