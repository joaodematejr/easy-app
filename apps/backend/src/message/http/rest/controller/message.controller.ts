import { Body, Controller, Param, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {
  FilterRequest,
  PaginatedResult,
} from "src/@core/services/mongo-query.service";
import { User } from "src/decorators/user.decorator";
import { MessageDocument } from "src/message/core/schemas/message.schema";
import { MessageService } from "src/message/core/services/message.service";

@Controller("api/messages")
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post(":chatId")
  @UseGuards(AuthGuard("jwt"))
  async getMessages(
    @User() user: any,
    @Param("chatId") chatId: string,
    @Body() filterRequest: FilterRequest,
  ): Promise<PaginatedResult<MessageDocument>> {
    return this.messageService.getMessagesByChatId(chatId, filterRequest, user);
  }
}
