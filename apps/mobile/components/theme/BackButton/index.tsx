import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { IconButton } from "../IconButton";

export const BackButton = () => {
  const { canGoBack, back } = useRouter();
  return (
    <IconButton
      onPress={() => canGoBack() && back()}
      icon={
        <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
      }
    />
  );
};
