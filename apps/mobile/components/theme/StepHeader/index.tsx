import { Text } from "@/components/restyle";

export const StepHeader = ({
  title = "",
  subtitle = "",
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <>
      <Text variant="header" mt={{ smallPhone: "l", phone: "xxxl" }}>
        {title}
      </Text>
      <Text
        variant="header2"
        mt="m"
        px="xl"
        mb={{ smallPhone: "xl", phone: "xxl" }}
      >
        {subtitle}
      </Text>
    </>
  );
};
