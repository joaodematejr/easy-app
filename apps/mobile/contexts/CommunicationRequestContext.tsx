import { useCommunicationRequestStore } from "@/stores/communicationRequestStore";
import { createContext, useCallback } from "react";

type CommunicationRequestContextValue = {
  setCode: (code: string) => void;
};

const CommunicationRequestContext =
  createContext<CommunicationRequestContextValue | null>(null);

export const CommunicationRequestProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const setCode = useCallback((code: string) => {
    useCommunicationRequestStore.setState({ code: code });
  }, []);

  return (
    <CommunicationRequestContext.Provider value={{ setCode }}>
      {children}
    </CommunicationRequestContext.Provider>
  );
};
