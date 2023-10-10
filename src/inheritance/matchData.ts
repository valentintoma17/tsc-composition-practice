// import { CsvFileReader } from './CsvFileReader';
// import { IMatchResults } from './matchResult';
// import { dateStringToDate } from './utils';

// type MatchInfo = [Date, string, string, number, number, IMatchResults, string];

// export class MatchData extends CsvFileReader<MatchInfo> {
//   constructor(public filename: string) {
//     super(filename);
//   }

//   row(row: string[]): MatchInfo {
//     return [
//       dateStringToDate(row[0]),
//       row[1],
//       row[2],
//       parseInt(row[3]),
//       parseInt(row[4]),
//       row[5] as IMatchResults,
//       row[6],
//     ];
//   }
// }
