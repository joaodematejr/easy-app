import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export type UserJwt = { id: string; email: string };

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
