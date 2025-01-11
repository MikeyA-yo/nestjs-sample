import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SysController } from './sys/sys.controller';
import { SysService } from './sys/sys.service';
import { SysModule } from './sys/sys.module';

@Module({
  imports: [SysModule],
  controllers: [AppController, SysController],
  providers: [AppService, SysService],
})
export class AppModule {}
