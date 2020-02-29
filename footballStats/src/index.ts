import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const summary = Summary.winsAnalysisWithConsoleReport('Liverpool');
const matchReader = MatchReader.readFromCsv('football.csv');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
