import React from "react";
import { Text, View } from "react-native";
import { style } from "./app.styles";
import { Card } from "./src/components";
function App() {
  return (
    <View style={style.root}>
      <Card />
    </View>
  );
}

export default App;
