import { RestyleFlashListProps, Text } from "@/components/restyle";
import { FlashList } from "../FlashList";
import { MessageOption } from "../MessageOption";
import { Dispatch } from "react";

export type MessageOptionsProps = Partial<RestyleFlashListProps> & {
  messageSelected?: string;
  setMessageSelected: Dispatch<React.SetStateAction<string | undefined>>;
};

const options = [
  "Olá! Sou o entregador e já estou na portaria.",
  "Oi! Cheguei na portaria para fazer a entrega.",
  "Olá! Entregador aqui na portaria aguardando.",
  "Oi! Sou o entregador e estou aqui na portaria.",
  "Olá! A entrega chegou, estou na portaria.",
  "Oi! Entregador aqui, estou na portaria.",
  "Olá! Estou na portaria com a sua entrega.",
  "Oi! Já estou na portaria com o pedido.",
  "Olá! Sou o entregador, estou na portaria esperando.",
  "Oi! Estou na portaria para entregar seu pedido.",
];

export const MessageOptions = ({
  messageSelected,
  setMessageSelected,
  ...props
}: MessageOptionsProps) => {
  return (
    <>
      <Text maxWidth={450} width="100%" textAlign="left" variant="label" mb="s">
        Sugestões:
      </Text>
      <FlashList
        variant="messageOptions"
        data={options}
        renderItem={({ item }: any) => (
          <MessageOption
            option={item}
            setMessageSelected={setMessageSelected}
            disabled={item === messageSelected}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        marginBottom="s"
        {...props}
      />
    </>
  );
};
