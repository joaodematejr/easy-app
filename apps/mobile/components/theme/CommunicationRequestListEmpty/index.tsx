import { RestylePressable, Text } from "@/components/restyle";
import { useRouter } from "expo-router";
import { EmptyList } from "../EmptyList";

export type CommunicationRequestListEmptyProps = {
  text?: string;
  showRedirect?: boolean;
};

export const CommunicationRequestListEmpty = ({
  text = "Você ainda não possui um gerenciador e uma residência cadastrada, que tal criar uma?",
  showRedirect = true,
}: CommunicationRequestListEmptyProps) => {
  const { push } = useRouter();

  return (
    <EmptyList text={text}>
      {showRedirect && (
        <RestylePressable
          onPress={() => push("/(tabs)")}
          variant="transparent"
          marginTop="l"
        >
          <Text
            textAlign="center"
            variant="infoTitle"
            textDecorationStyle="solid"
            textDecorationLine="underline"
          >
            Criar uma residência
          </Text>
        </RestylePressable>
      )}
    </EmptyList>
  );
};
