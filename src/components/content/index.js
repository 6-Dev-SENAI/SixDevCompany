import { View } from "react-native";
import Styles from "./style";

function Content(props) {
  return <View style={Styles.container}>{props.children}</View>;
}

export default Content;
