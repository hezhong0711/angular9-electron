import * as fs from 'fs';
import * as crypto from 'crypto';
import {FileUtil} from "./FileUtil";

export class MD5Util {
  public static md5(path: string): string {
    if (!FileUtil.exists(path)) {
      return '';
    }

    let buffer = fs.readFileSync(path);
    let fsHash = crypto.createHash('md5');
    fsHash.update(buffer);
    return fsHash.digest('hex');
  }

}
