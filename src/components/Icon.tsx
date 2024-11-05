import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export interface IIconProps {
  disabled?: boolean;
  iconID: React.ComponentProps<typeof MaterialIcons>["name"];
  color?: string
  text?:string
}

export function Icon(props: IIconProps) {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name={props.iconID}
        size={24}
        color={props.color || "grey"}
      />
      {props.text && <Text style={[styles.text, props.disabled && { color: "grey" }]}>
        {props.text}
      </Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 250,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
});
