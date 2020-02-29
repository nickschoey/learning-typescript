import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport, HtmlReport } from './Reporters';
import { WinsAnalysis } from './Analyzers';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);
