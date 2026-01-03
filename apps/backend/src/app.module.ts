import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "src/auth/auth.module";
import { UserModule } from "./user/user.module";
import { CommunicationRequestModule } from "./communication-request/communication-request.module";
import { ChatModule } from "./chat/chat.module";
import { MessageModule } from "./message/message.module";
import { EventEmitterModule } from "@nestjs/event-emitter";

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL ?? ""),
    AuthModule,
    UserModule,
    CommunicationRequestModule,
    ChatModule,
    MessageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
