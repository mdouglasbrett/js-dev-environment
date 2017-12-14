import { expect } from 'chai';
import fs from 'fs';
import jsdom from 'jsdom';

describe('Our first test', () => {
  it('should pass', () => expect(true).to.equal(true));
});

describe('index.html', () =>  {
  it('should say hello', () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, (err, window) => {

    });
  })
});
