import React from "react";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";

// TypeScript definition
interface IBlock extends ViewProps {
  flex?: ViewStyle["flex"];
  row?: boolean;
  justify?: ViewStyle["justifyContent"];
  justifyContent?: ViewStyle["justifyContent"];
  align?: ViewStyle["alignItems"];
  alignItems?: ViewStyle["alignItems"];
  content?: ViewStyle["alignContent"];
  alignContent?: ViewStyle["alignContent"];
  wrap?: ViewStyle["flexWrap"];
  width?: ViewStyle["width"];
  height?: ViewStyle["height"];
  position?: ViewStyle["position"];
  top?: ViewStyle["top"];
  right?: ViewStyle["right"];
  bottom?: ViewStyle["bottom"];
  left?: ViewStyle["left"];
  children?: React.ReactNode;
}

const GridBlockSheet = ({
  children,
  style,
  flex = 1,
  row,
  justify,
  justifyContent,
  align,
  alignItems,
  content,
  alignContent,
  wrap,
  width,
  height,
  position,
  top,
  right,
  bottom,
  left,
  ...props
}: IBlock) => { 
  const blockStyle = StyleSheet.flatten([
    flex !== undefined && { flex },
    row && { flexDirection: "row" },
    justify !== undefined && { justifyContent: justify },
    justifyContent !== undefined && { justifyContent },
    align !== undefined && { alignItems: align },
    alignItems !== undefined && { alignItems },
    content !== undefined && { alignContent: content },
    alignContent !== undefined && { alignContent },
    wrap !== undefined && { flexWrap: wrap },
    width !== undefined && { width },
    height !== undefined && { height },
    position !== undefined && { position },
    top !== undefined && { top },
    right !== undefined && { right },
    bottom !== undefined && { bottom },
    left !== undefined && { left },
    style
  ]) as ViewStyle; 

  return (
    <View style={blockStyle} {...props}>
      {children}
    </View>
  );
};

export default GridBlockSheet;