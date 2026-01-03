import React, { useCallback, useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { CommunicationRequestItem } from "@/components/theme/CommunicationRequestItem";
import { CommunicationRequestList } from "@/components/theme/CommunicationRequestList";
import { Container } from "@/components/theme/Container";
import { SearchInput } from "@/components/theme/SearchInput";
import useValidateCommunication from "@/hooks/useValidateCommunication";
import { ActionModal } from "@/components/theme/ActionModal";

const { width } = Dimensions.get("window");

export default function Home() {
  const { push } = useRouter();

  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(
    null
  );

  const [refreshKey, setRefreshKey] = useState(0);

  const refresh = useCallback(() => {
    setRefreshKey((prev) => prev + 1);
  }, []);

  const { mutateAsync, isPending } = useValidateCommunication(() => {
    refresh();
  });

  const handleValidation = (status: "ACCEPTED" | "REJECTED") => {
    if (!selectedRequestId) return;

    mutateAsync({
      communicationId: selectedRequestId,
      status: status,
    }).then(() => {
      setSelectedRequestId(null);
    });
  };

  return (
    <Container
      variant="screen"
      containerHeaderProps={{ title: "Conversas", hideBackButton: true }}
    >
      <SearchInput containerProps={{ mb: "m", mt: "l" }} />

      <CommunicationRequestList
        key={refreshKey}
        keyExtractor={(item: any) => item._id}
        renderItem={({ item }: any) => (
          <CommunicationRequestItem
            key={item._id}
            item={item}
            status={item.status}
            onPress={() =>
              item.status === "PENDING"
                ? setSelectedRequestId(item._id)
                : item.status === "ACCEPTED" &&
                  push({
                    pathname: "/chat",
                    params: {
                      chatId: item.chatId,
                      visitorName: item.visitorName,
                      communicationRequestId: item._id,
                    },
                  })
            }
          />
        )}
      />

      <ActionModal
        visible={!!selectedRequestId}
        onClose={() => setSelectedRequestId(null)}
        loading={isPending}
        title="Responder Solicitação"
        description="Deseja permitir ou rejeitar a conversa deste visitante?"
        confirmText="Confirmar"
        rejectText="Rejeitar"
        onConfirm={() => handleValidation("ACCEPTED")}
        onReject={() => handleValidation("REJECTED")}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: width * 0.85,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 12,
    marginBottom: 16,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  rejectButton: {
    backgroundColor: "#EF4444",
  },
  confirmButton: {
    backgroundColor: "#000",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  cancelButton: {
    paddingVertical: 8,
    width: "100%",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#6B7280",
    fontWeight: "500",
  },
});
