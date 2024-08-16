import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

export class LogCommand {
  readonly message: string;

  constructor(message: string) {
    this.message = message;
  }
}

@CommandHandler(LogCommand)
export class LogHandler implements ICommandHandler<LogCommand> {
  async execute(command: LogCommand): Promise<any> {
    console.log('LogHandler -> command', command);
    return Promise.resolve('Log saved');
  }
}
