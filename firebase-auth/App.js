import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyD-25cWr3VMewAMR25uLDFG25mABm94FoE",
      authDomain: "one-time-password-db445.firebaseapp.com",
      databaseURL: "https://one-time-password-db445.firebaseio.com",
      projectId: "one-time-password-db445",
      storageBucket: "one-time-password-db445.appspot.com",
      messagingSenderId: "626002185324"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
