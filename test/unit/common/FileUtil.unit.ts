import {expect} from 'chai';
import {FileUtil} from '../../../main/src/common/FileUtil';

describe('FileUtil', () => {
  const testPath = `${__dirname}/../..`;
  console.log(testPath);

  it('should be directory', async () => {
    const filePath = `${testPath}/test-resource/files`;
    const isDir = FileUtil.isDir(filePath);
    const isFile = FileUtil.isFile(filePath);
    expect(isDir).to.equal(true);
    expect(isFile).to.equal(false);
  });

  it('should be file', async () => {
    const filePath = `${testPath}/test-resource/files/file1`;
    const isDir = FileUtil.isDir(filePath);
    const isFile = FileUtil.isFile(filePath);
    expect(isDir).to.equal(false);
    expect(isFile).to.equal(true);
  });

});
