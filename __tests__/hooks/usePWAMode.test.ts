import { renderHook } from '@testing-library/react';
import { usePWAMode } from '@/hooks/usePWAMode';

// Mock the various PWA detection APIs
const mockMatchMedia = jest.fn();
const mockNavigator = {} as Navigator & { standalone?: boolean | undefined };
const mockDocument = {} as Document & { referrer: string };

describe('usePWAMode', () => {
  beforeEach(() => {
    // Setup DOM API mocks that Jest config can't handle automatically

    // Mock window.matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: mockMatchMedia,
    });

    // Mock window.navigator with standalone property
    Object.defineProperty(window, 'navigator', {
      writable: true,
      configurable: true,
      value: mockNavigator,
    });

    // Mock document.referrer (read-only property)
    Object.defineProperty(document, 'referrer', {
      configurable: true,
      get: () => mockDocument.referrer,
    });

    // Reset mock implementations
    mockMatchMedia.mockReturnValue({ matches: false });
    delete mockNavigator.standalone;
    mockDocument.referrer = '';
  });

  describe('Standard PWA detection (matchMedia)', () => {
    it('should return true when display-mode is standalone', () => {
      mockMatchMedia.mockReturnValue({ matches: true });

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(true);
      expect(mockMatchMedia).toHaveBeenCalledWith('(display-mode: standalone)');
    });

    it('should return false when display-mode is not standalone', () => {
      mockMatchMedia.mockReturnValue({ matches: false });

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(false);
      expect(mockMatchMedia).toHaveBeenCalledWith('(display-mode: standalone)');
    });

    it('should call matchMedia with correct query', () => {
      renderHook(() => usePWAMode());

      expect(mockMatchMedia).toHaveBeenCalledWith('(display-mode: standalone)');
      expect(mockMatchMedia).toHaveBeenCalledTimes(1);
    });
  });

  describe('iOS Safari detection (navigator.standalone)', () => {
    it('should return true when navigator.standalone is true', () => {
      mockMatchMedia.mockReturnValue({ matches: false });
      mockNavigator.standalone = true;

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(true);
    });

    it('should return false when navigator.standalone is false', () => {
      mockMatchMedia.mockReturnValue({ matches: false });
      mockNavigator.standalone = false;

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(false);
    });

    it('should return false when navigator.standalone is undefined', () => {
      mockMatchMedia.mockReturnValue({ matches: false });
      delete mockNavigator.standalone;

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(false);
    });

    it('should prioritize matchMedia over navigator.standalone when both are available', () => {
      // Both indicate PWA mode
      mockMatchMedia.mockReturnValue({ matches: true });
      mockNavigator.standalone = true;

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(true);
    });

    it('should fallback to navigator.standalone when matchMedia returns false', () => {
      mockMatchMedia.mockReturnValue({ matches: false });
      mockNavigator.standalone = true;

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(true);
    });
  });

  describe('Android app detection (document.referrer)', () => {
    it('should return true when referrer includes android-app://', () => {
      mockMatchMedia.mockReturnValue({ matches: false });
      mockNavigator.standalone = false;
      mockDocument.referrer = 'android-app://com.example.app';

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(true);
    });

    it('should return true when referrer contains android-app:// with additional path', () => {
      mockMatchMedia.mockReturnValue({ matches: false });
      mockNavigator.standalone = false;
      mockDocument.referrer = 'android-app://com.example.app/some/path';

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(true);
    });

    it('should return false when referrer does not contain android-app://', () => {
      mockMatchMedia.mockReturnValue({ matches: false });
      mockNavigator.standalone = false;
      mockDocument.referrer = 'https://example.com';

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(false);
    });

    it('should return false when referrer is empty', () => {
      mockMatchMedia.mockReturnValue({ matches: false });
      mockNavigator.standalone = false;
      mockDocument.referrer = '';

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(false);
    });

    it('should be case sensitive for android-app:// detection', () => {
      mockMatchMedia.mockReturnValue({ matches: false });
      mockNavigator.standalone = false;
      mockDocument.referrer = 'ANDROID-APP://com.example.app';

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(false);
    });
  });

  describe('Combined detection scenarios', () => {
    it('should return true when any detection method indicates PWA mode', () => {
      // Test each method individually
      const scenarios = [
        { matchMedia: true, standalone: false, referrer: '' },
        { matchMedia: false, standalone: true, referrer: '' },
        { matchMedia: false, standalone: false, referrer: 'android-app://test' },
      ];

      scenarios.forEach((scenario) => {
        mockMatchMedia.mockReturnValue({ matches: scenario.matchMedia });
        mockNavigator.standalone = scenario.standalone;
        mockDocument.referrer = scenario.referrer;

        const { result } = renderHook(() => usePWAMode());

        expect(result.current).toBe(true);
      });
    });

    it('should return false when all detection methods indicate non-PWA mode', () => {
      mockMatchMedia.mockReturnValue({ matches: false });
      mockNavigator.standalone = false;
      mockDocument.referrer = 'https://regular-website.com';

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(false);
    });

    it('should return true when multiple detection methods indicate PWA mode', () => {
      mockMatchMedia.mockReturnValue({ matches: true });
      mockNavigator.standalone = true;
      mockDocument.referrer = 'android-app://com.example.app';

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(true);
    });
  });

  describe('Edge cases and error handling', () => {
    it('should handle missing navigator.standalone gracefully', () => {
      mockMatchMedia.mockReturnValue({ matches: false });
      delete mockNavigator.standalone;
      mockDocument.referrer = '';

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(false);
    });

    it('should handle unusual referrer values', () => {
      mockMatchMedia.mockReturnValue({ matches: false });
      mockNavigator.standalone = false;

      const unusualReferrers = [
        'android-app://',
        'not-android-app://test',
        'android-app',
        'malformed-android-app:///',
      ];

      unusualReferrers.forEach((referrer) => {
        mockDocument.referrer = referrer;
        const { result } = renderHook(() => usePWAMode());

        const expected = referrer.includes('android-app://');
        expect(result.current).toBe(expected);
      });
    });
  });

  describe('Hook behavior and lifecycle', () => {
    it('should only run detection once on mount', () => {
      mockMatchMedia.mockReturnValue({ matches: false });

      const { rerender } = renderHook(() => usePWAMode());

      expect(mockMatchMedia).toHaveBeenCalledTimes(1);

      // Re-render shouldn't trigger another check
      rerender();
      expect(mockMatchMedia).toHaveBeenCalledTimes(1);
    });

    it('should maintain state across re-renders', () => {
      mockMatchMedia.mockReturnValue({ matches: true });

      const { result, rerender } = renderHook(() => usePWAMode());

      expect(result.current).toBe(true);

      rerender();
      expect(result.current).toBe(true);
    });

    it('should start with false and update after effect runs', () => {
      mockMatchMedia.mockReturnValue({ matches: true });

      const { result } = renderHook(() => usePWAMode());

      // After effect runs, should be true
      expect(result.current).toBe(true);
    });
  });

  describe('Real-world scenarios', () => {
    it('should detect Chrome PWA on desktop', () => {
      mockMatchMedia.mockReturnValue({ matches: true });
      delete mockNavigator.standalone;
      mockDocument.referrer = '';

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(true);
    });

    it('should detect Safari PWA on iOS', () => {
      mockMatchMedia.mockReturnValue({ matches: false });
      mockNavigator.standalone = true;
      mockDocument.referrer = '';

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(true);
    });

    it('should detect TWA (Trusted Web Activity) on Android', () => {
      mockMatchMedia.mockReturnValue({ matches: false });
      mockNavigator.standalone = false;
      mockDocument.referrer = 'android-app://com.example.twa';

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(true);
    });

    it('should not detect regular browser usage', () => {
      mockMatchMedia.mockReturnValue({ matches: false });
      mockNavigator.standalone = false;
      mockDocument.referrer = 'https://google.com';

      const { result } = renderHook(() => usePWAMode());

      expect(result.current).toBe(false);
    });
  });
}); 