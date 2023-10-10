import { MatchData } from './MatchData';
import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { HtmlReport } from './reports/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static htmlReportWins(team: string, nameOfFile: string) {
    return new Summary(new WinsAnalyzer(team), new HtmlReport(nameOfFile));
  }

  constructor(public analyzer: Analyzer, public report: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]) {
    const output = this.analyzer.run(matches);
    this.report.print(output);
  }
}
