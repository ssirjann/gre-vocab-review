import React from "react";
import { Icon } from "react-native-elements";

export default ({ navigation }) => ({
  headerLeft: (
    <Icon
      containerStyle={{ marginLeft: 15 }}
      name="bars"
      type="font-awesome"
      iconStyle={{ color: "#fff" }}
      onPress={() => navigation.openDrawer()}
    />
  )
});
