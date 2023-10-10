import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  constructor(public nameOfFile: string) {}

  print(report: string): void {
    const html = `
            <div>
                <h1>Report Output</h1>
                <div>${report}<div>
            </div>
        `;
    fs.writeFileSync(`${this.nameOfFile}.html`, html);
  }
}
