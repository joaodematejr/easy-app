import { Box, Text } from "@/components/restyle";
import Button from "@/components/theme/Button";
import { Container } from "@/components/theme/Container";
import { Image } from "@/components/theme/Image";
import { useAppStore } from "@/stores/appStore";
import { useAuthStore } from "@/stores/authStore";
import { useCommunicationRequestStore } from "@/stores/communicationRequestStore";
import { Redirect, useRouter } from "expo-router";

export default function App() {
  const token = useAuthStore((s) => s.token);
  const chatId = useAppStore((s) => s.chatId);
  const visitorToken = useCommunicationRequestStore((s) => s.visitorToken);

  if (token) {
    return <Redirect href="/(tabs)/user" />;
  }

  if (visitorToken && chatId) {
    return (
      <Redirect
        href={{
          pathname: "/chat",
          params: {
            chatId: chatId,
            blockBack: "true",
          },
        }}
      />
    );
  }

  const { push } = useRouter();

  return (
    <Container variant="screen" hideHeader>
      <Image
        source={require("@/assets/images/init-image.svg")}
        variant="init"
        contentFit="cover"
        cachePolicy="memory"
      />
      <Box
        width="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        px="l"
        mt={{
          smallPhone: "l",
          phone: "xl",
        }}
        mb="xl"
      >
        <Text
          variant="header"
          textAlign="center"
          flex={1}
          px="s"
          maxWidth={600}
        >
          Conecte-se de forma simples e rápida com qualquer pessoa.
        </Text>
      </Box>

      <Box
        width="100%"
        flex={1}
        alignItems="center"
        justifyContent="flex-end"
        mb="m"
      >
        <Text variant="body" textAlign="center" px="s">
          Termos e Política de Privacidade
        </Text>
        <Button
          text="Começar a conversar"
          marginVertical="s"
          onPress={() => {
            push("/(communication-request)/(steps)/code");
          }}
        />
        <Button
          text="Fazer Login"
          variant="secondary"
          onPress={() => {
            push("/login");
          }}
        />
      </Box>
    </Container>
  );
}
