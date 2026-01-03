import { Box, Text } from "@/components/restyle";

export type EmptyListProps = {
  text?: string;
  children?: React.ReactNode;
};

export const EmptyList = ({
  text = "Você ainda não possui um gerenciador e uma residência cadastrada, que tal criar uma?",
  children,
}: EmptyListProps) => {
  return (
    <Box>
      <Text textAlign="center">{text}</Text>
      {children}
    </Box>
  );
};
