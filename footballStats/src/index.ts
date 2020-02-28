import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResults';

const reader = new CsvFileReader('football.csv');
reader.read();

let manUWins = 0;

for (const match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUWins++;
  }
}

console.log(manUWins);
console.log(reader.data);
