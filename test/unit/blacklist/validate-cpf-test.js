const { assert } = require('chai');
const dataDriven = require('data-driven');

const { validateCPF } = require('../../../lib/blacklist/service');

describe('validate-cpf unit tests', () => {
  const dataCases = [
    {
      testName: 'Valid cpf with mask - Should return cpf without mask',
      cpf: '097.062.456-50',
      expectedResult: '09706245650'
    },
    {
      testName: 'Valid cpf without mask - Should return cpf without mask',
      cpf: '09706245650',
      expectedResult: '09706245650'
    },
    {
      testName: 'Invalid cpf with mask - Should return false',
      cpf: '123.321.123-32',
      expectedResult: false
    },
    {
      testName: 'Invalid cpf without mask - Should return false',
      cpf: '12332112332',
      expectedResult: false
    }
  ];
  dataDriven(dataCases, () => {
    it('{testName}', (ctx) => {
      const result = validateCPF(ctx.cpf);
      assert.strictEqual(result, ctx.expectedResult);
    });
  });
});
