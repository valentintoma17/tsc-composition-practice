import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';
import { IMatchResults } from '../matchResult';

export class WinsAnalyzer implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]) {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === IMatchResults.homeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === IMatchResults.awayWin) {
        wins++;
      }
    }

    return `${this.team} won ${wins} games`;
  }
}
