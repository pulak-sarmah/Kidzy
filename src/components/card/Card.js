import { Image, Text, View } from "react-native";
import { style } from "./card.styles.js";
import { cardData } from "../../constants/index.js";

function Card() {
  return (
    <>
      <Text style={style.title}>{cardData.Question}</Text>
      <View style={style.optionsContainer}>
        {cardData.options.map((card) => (
          <View style={style.optionContainer} key={card.id}>
            <Image
              source={{ uri: card.uri }}
              resizeMode="contain"
              style={style.optionImage}
            />
            <Text style={style.optionText}>Glass</Text>
          </View>
        ))}
      </View>
    </>
  );
}

export default Card;
