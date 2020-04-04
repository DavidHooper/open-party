import { Console, Command, createSpinner } from 'nestjs-console';

@Console()
export class Example {
  @Command({
    command: 'example',
    description: 'Example cli task',
  })
  add(emails: string[]): Promise<void> {
    return new Promise(resolve => {
      const spinner = createSpinner({ text: 'Doing some work' });
      setTimeout(() => {}, 3000);
      spinner.succeed('Done some work');
    });
  }
}
