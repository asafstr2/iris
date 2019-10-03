import { correctComponentStructure } from '../../../_tests';
import path from 'path';

const p = path.resolve(__dirname);

describe('CategoryCard', () => {
  test('component has correct structure', () => {
    expect(correctComponentStructure(p, 'CategoryCard')).toBe(true);
  });
});
