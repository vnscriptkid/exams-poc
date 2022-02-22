import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();

    // fake user
    req.user = {
      organizationId: '61a62dfeed7de1002347c8a1',
    };

    return req.user ?? null;
  },
);
