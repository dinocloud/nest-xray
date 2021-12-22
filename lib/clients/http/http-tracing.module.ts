import { DynamicModule, Module } from "@nestjs/common";
import { HttpModule, HttpService, HttpModuleAsyncOptions } from "@nestjs/axios";

import { TracingAxiosInterceptor } from "./tracing.axios-interceptor";

@Module({
  providers: [HttpService, TracingAxiosInterceptor],
  exports: [HttpService],
})
export class HttpTracingModule {
  public static registerAsync(options: HttpModuleAsyncOptions): DynamicModule {
    const httpModule = HttpModule.registerAsync(options);

    return {
      ...httpModule,
      module: HttpTracingModule,
    };
  }
}
