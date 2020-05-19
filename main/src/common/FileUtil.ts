import * as fs from 'fs';

export class FileUtil {

  public static isFile(path) {
    return this.exists(path) && fs.statSync(path).isFile();
  }

  public static isDir(path) {
    return this.exists(path) && fs.statSync(path).isDirectory();
  }

  public static exists(path): boolean {
    return fs.existsSync(path);
  }
}
