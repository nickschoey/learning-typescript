import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResults';

export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map((match: string[]): any => {
        return [
          dateStringToDate(match[0]),
          match[1],
          match[2],
          parseInt(match[3]),
          parseInt(match[4]),
          match[5] as MatchResult,
          match[6]
        ];
      });
  }
}
