import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Animated,
  ColorValue,
  DimensionValue,
  Platform,
  ViewStyle,
} from "react-native";
import { wp, heightPixel, widthPixel } from "utils";
import { RFSpacingSize, spacingSize } from "./sizes";
import { useThemeMode } from "@providers/hooks";

export interface StyledViewProps extends ViewStyle {}

const colors = useThemeMode();

const ViewStyles = (rest: StyledViewProps) => ({
  paddingHorizontal: rest?.paddingHorizontal,
  paddingVertical: rest?.paddingVertical,
  borderRadius: rest?.borderRadius,
  alignItems: rest?.alignItems,
  justifyContent: rest?.justifyContent,
  backgroundColor: rest?.backgroundColor,
  width: rest?.width,
  height: rest?.height,
  borderColor: rest?.borderColor,
  borderWidth: rest?.borderWidth,
  marginTop: rest?.marginTop,
  marginBottom: rest?.marginBottom,
  marginLeft: rest?.marginLeft,
  marginRight: rest?.marginRight,
  opacity: rest?.opacity,
  padding: rest?.padding,
  zIndex: rest?.zIndex,
  position: rest?.position,
  flex: rest?.flex,
  flexGrow: rest?.flexGrow,
  paddingLeft: rest.paddingLeft,
  borderBottomWidth: rest.borderBottomWidth,
  paddingBottom: rest.paddingBottom,
});

export const StyledView = styled(Animated.View)<StyledViewProps>(
  ({ ...rest }) => ({
    ...ViewStyles(rest),
  })
);

export const StyledTouchableOpacity = styled.TouchableOpacity<StyledViewProps>(
  ({ ...rest }) => ({
    ...ViewStyles(rest),
  })
);

export const StyledKeyboardAvoidingView =
  styled.KeyboardAvoidingView<StyledViewProps>(({ ...rest }) => ({
    ...ViewStyles(rest),
  }));

// export const Row = styled(StyledTouchableOpacity)(({
export const Row = styled(StyledTouchableOpacity)<StyledViewProps>(
  ({
    justifyContent,
    alignItems,
    flexGrow,
    flexDirection = "row",
    position = "relative",
    paddingLeft,
    borderBottomWidth,
    paddingBottom,
  }) => ({
    flexDirection,
    position,
  })
);

export const Card = styled.Pressable<{
  backgroundColor?: ColorValue;
  paddingVertical?: number;
  paddingHorizontal?: number;
  borderRadius?: number;
  width?: DimensionValue;
}>(
  ({
    theme,
    width = "100%",
    backgroundColor = colors.colors.white,
    paddingVertical = 15,
    paddingHorizontal = 15,
    borderRadius = 12,
  }) => ({
    width,
    backgroundColor: backgroundColor ?? "#fff",
    borderWidth: 0,
    borderColor: "transparent",
    shadowColor: "transparent",
    paddingHorizontal: paddingHorizontal,
    paddingVertical: paddingVertical,
    borderRadius: borderRadius,
    position: "relative",
    display: "flex",
  })
);

export const ViewContainer = styled(StyledView)(
  ({
    paddingVertical = 0,
    paddingHorizontal = RFSpacingSize.i20,
    backgroundColor,
    ...rest
  }) => ({
    paddingHorizontal,
    paddingVertical,
    backgroundColor,
  })
);

export const ActionSheetViewContainer = styled(StyledKeyboardAvoidingView)(
  ({
    paddingHorizontal = widthPixel(20),
    paddingTop = heightPixel(25),
    paddingBottom = heightPixel(50),
  }) => ({
    paddingHorizontal,
    paddingTop,
    paddingBottom,
  })
);

export const BaseViewContainer = styled(StyledKeyboardAvoidingView)<{
  backgroundColor?: string | ColorValue;
}>(({ backgroundColor }) => ({
  backgroundColor,
  flex: 1,
}));

export const CenterViewContainer = styled.KeyboardAvoidingView<{
  backgroundColor?: string;
}>(({ backgroundColor }) => ({
  backgroundColor,
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}));

export const BaseLGView = styled(LinearGradient)({
  flex: 1,
});

export const RoundedActionSheet = {
  borderTopLeftRadius: widthPixel(30),
  borderTopRightRadius: widthPixel(30),
};

export const Divider = styled(StyledView)(
  ({ height = spacingSize.i20, backgroundColor = "#b5b6b7", ...rest }) => ({
    height: typeof height === "number" ? heightPixel(height) : height,
    backgroundColor,
    ...rest,
  })
);

export const Spacer = styled(StyledView)<{
  height?: number;
}>(({ height = spacingSize.i20 }) => ({
  height: heightPixel(height),
}));

export const HSpacer = styled(StyledView)<{
  width?: number;
}>(({ width = spacingSize.i20 }) => ({
  width: widthPixel(width),
}));

export const BottomContainer = styled(ViewContainer)<{
  relative?: boolean;
  display?: boolean;
  backgroundColor?: ColorValue;
}>(({ relative, display = true, backgroundColor }) => ({
  paddingTop: heightPixel(spacingSize.i10),
  paddingBottom: heightPixel(
    Platform.OS === "android" ? spacingSize.i40 : spacingSize.i32
  ),
  bottom: 0,
  position: relative ? "relative" : "absolute",
  display: display ? "flex" : "none",
  width: wp("100"),
  backgroundColor,
}));
