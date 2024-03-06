import { Image, Text, View } from "react-native";
import { style } from "./card.styles.js";
import { cardData } from "../../constants/index.js";

function Card() {
  return (
    <>
      {cardData.map((card, index) => (
        <View style={style.optionContainer} key={index}>
          <Image
            source={{ uri: card.uri }}
            resizeMode="contain"
            style={style.optionImage}
          />
          <Text style={style.optionText}>Glass</Text>
        </View>
      ))}
    </>
  );
}

export default Card;
