import { RestyleTouchableOpacity, Text } from "@/components/restyle";
import { Container } from "@/components/theme/Container";
import { Form, FormButton, FormTextInput } from "@/components/theme/Form";
import { useAuthActions } from "@/contexts/AuthProvider";
import { useUserForm } from "@/hooks/useUserForm";
import { userFormValidation } from "@/utils/schemaValidation";
import { Alert } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { PressableCopyPaste } from "@/components/theme/PressableCopyPaste";

const LogoutButton = () => {
  const { logout } = useAuthActions();
  return (
    <RestyleTouchableOpacity onPress={() => logout()} variant="icon">
      <MaterialIcons name="logout" size={24} color="black" />
    </RestyleTouchableOpacity>
  );
};

export default function User() {
  const { initialValues, handleSubmit, isEditing, isLoading } = useUserForm();

  const onSubmit = async (values: any) => {
    try {
      await handleSubmit(values);
      Alert.alert("Sucesso", "Informações salvas com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar as alterações.");
    }
  };

  return (
    <Container
      variant="screen"
      containerHeaderProps={{
        title: "Seu Perfil",
        hideBackButton: true,
        children: <LogoutButton />,
      }}
    >
      <Text
        width="100%"
        maxWidth={450}
        textAlign="left"
        variant="infoTitle"
        my="l"
      >
        Usuário
      </Text>
      <Form
        initialValues={initialValues}
        validate={userFormValidation}
        onSubmit={onSubmit}
        enableReinitialize
      >
        <FormTextInput name="name" label="Nome" placeholder="Seu Nome" />

        <FormTextInput
          containerProps={{ marginTop: "s" }}
          name="email"
          label="Email"
          placeholder="Seu Email"
          keyboardType="email-address"
        />

        <FormTextInput
          containerProps={{ marginTop: "s" }}
          name="phone"
          label="Telefone"
          placeholder="Seu Telefone"
        />

        {initialValues.code && (
          <PressableCopyPaste
            label="Código"
            value={initialValues.code}
            containerProps={{ marginTop: "s" }}
          />
        )}

        <FormButton
          text={isEditing ? "Atualizar Dados" : "Salvar Tudo"}
          marginTop="xxxl"
        />
      </Form>
    </Container>
  );
}
