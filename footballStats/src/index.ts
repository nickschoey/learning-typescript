import { MatchResult } from './MatchResults';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

// Create an object that satisfies the DataReader Interface
const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of MatchReader and pass something that satisifies the DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
let manUWins = 0;

console.log(manUWins);
