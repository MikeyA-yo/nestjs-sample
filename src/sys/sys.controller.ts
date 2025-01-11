import { Controller, Get } from '@nestjs/common';
import * as os from "node:os"
@Controller('sys')
export class SysController {
    @Get()
    sysCall(){
        return process.platform
    }
    @Get("bit")
    getBit(){
      return  process.memoryUsage()
    }
    @Get("arch")
    getPid(){
        return process.arch
    }
    @Get("os")
    OS(){
        return os.cpus()
    }
}
