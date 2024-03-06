import React from "react";
import { Text, View } from "react-native";
import { style } from "./app.styles";
import { Card } from "./src/components";
function App() {
  return (
    <View style={style.root}>
      <Text style={style.title}>Which is the "glass"?</Text>
      <View style={style.optionsContainer}>
        <Card />
      </View>
    </View>
  );
}

export default App;
