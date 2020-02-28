import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResults';


export class MatchReader extends CsvFileReader {

  mapRow(): MatchResult[]
}
