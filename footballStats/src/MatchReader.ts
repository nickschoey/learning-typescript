import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResults';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader {
  mapRow(match: string[]): MatchData {
    return [
      dateStringToDate(match[0]),
      match[1],
      match[2],
      parseInt(match[3]),
      parseInt(match[4]),
      match[5] as MatchResult,
      match[6]
    ];
  }
}
