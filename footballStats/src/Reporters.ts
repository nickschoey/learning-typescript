import { OutputTarget } from './Summary';

export class ConsoleReport implements OutputTarget {
  constructor(public report: string) {}
  print(): void {
    console.log(report);
  }
}
