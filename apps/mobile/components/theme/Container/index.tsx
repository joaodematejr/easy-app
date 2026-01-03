import {
  Box,
  RestyleContainer,
  RestyleContainerProps,
} from "@/components/restyle";
import { ContainerHeader, ContainerHeaderProps } from "../ContainerHeader";

export type ContainerProps = RestyleContainerProps & {
  hideHeader?: boolean;
  containerHeaderProps?: ContainerHeaderProps;
  containerHeaderChildren?: React.ReactNode;
};

export const Container = ({
  children,
  hideHeader,
  containerHeaderProps,
  containerHeaderChildren,
  ...props
}: ContainerProps) => {
  return (
    <RestyleContainer {...props}>
      {!hideHeader && (
        <ContainerHeader
          children={containerHeaderChildren}
          {...containerHeaderProps}
        />
      )}
      <Box mt="xxxl" />
      {children}
    </RestyleContainer>
  );
};
