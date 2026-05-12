import {formatCurrency} from '../../scripts/utils/money.js';
// test suite
describe('test suite: formatCurrency',() =>{
  it('converts cents into dollars',() => {
    expect(formatCurrency(2095)).toEqual('20.95');
  }); // test case creation

  it('works with zero', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds to the nearest cents', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00');
  });
});
