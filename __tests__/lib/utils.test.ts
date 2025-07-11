import { cn, isPageDisabled } from '@/lib/utils';

describe('cn utility function', () => {
  it('should merge class names correctly', () => {
    const result = cn('text-red-500', 'bg-blue-500');
    expect(result).toBe('text-red-500 bg-blue-500');
  });

  it('should handle conditional classes', () => {
    const result = cn('base-class', true && 'conditional-class', false && 'hidden-class');
    expect(result).toBe('base-class conditional-class');
  });

  it('should handle undefined and null values', () => {
    const result = cn('base-class', undefined, null, 'another-class');
    expect(result).toBe('base-class another-class');
  });

  it('should handle empty input', () => {
    const result = cn();
    expect(result).toBe('');
  });

  it('should handle Tailwind class conflicts (twMerge functionality)', () => {
    const result = cn('p-4', 'p-2'); // p-2 should override p-4
    expect(result).toBe('p-2');
  });
});

describe('isPageDisabled utility function', () => {
  it('should return true for disabled pages', () => {
    const result = isPageDisabled('/blog');
    expect(result).toBe(true);
  });

  it('should return false for enabled pages', () => {
    const result = isPageDisabled('/about');
    expect(result).toBe(false);
  });

  it('should return false for non-existent pages', () => {
    const result = isPageDisabled('/non-existent');
    expect(result).toBe(false);
  });
});