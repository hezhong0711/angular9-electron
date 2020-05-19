import {expect} from 'chai';
import {MD5Util} from '../../../main/src/common/MD5Util';

describe('MD5Util', () => {
  const testPath = `${__dirname}/../..`;
  console.log(testPath);

  it('should calculate md5 for none exists file', async () => {
    const filePath = `${testPath}/test-resource/files/file`;
    console.log(filePath);
    const md5 = MD5Util.md5(filePath);
    expect(md5).to.equal('');
  });

  it('should calculate md5 for single file', async () => {
    const filePath = `${testPath}/test-resource/files/file1`;
    console.log(filePath);
    const md5 = MD5Util.md5(filePath);
    expect(md5).to.equal('16235eb847d659cc33227ed79e5f413f');
  });

});
