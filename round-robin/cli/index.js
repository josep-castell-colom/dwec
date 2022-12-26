import { stdout } from 'process';
import rdl from 'readline';

class LoadingBar {
  constructor(size) {
    this.size = size;
    this.cursor = 0;
  }
  start() {
    process.stdout.write('\x1B[?25l');
    process.stdout.write('[');
    this.cursor++;
    for (let i = 0; i < this.size; i++) {
      process.stdout.write('-');
      this.cursor++;
    }
    process.stdout.write(']');
    this.cursor = 1;
    rdl.cursorTo(process.stdout, this.cursor);
    this.timer = setInterval(() => {
      process.stdout.write('=');
      this.cursor++;
      if (this.cursor >= this.size) {
        process.stdout.write(']');
        clearTimeout(this.timer);
        process.stdout.write('\x1B[?25h');
      }
    }, 100);
  }
}

const ld = new LoadingBar(50);

ld.start();