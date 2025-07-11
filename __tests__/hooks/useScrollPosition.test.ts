import { renderHook, act } from '@testing-library/react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const mockAddEventListener = jest.fn();
const mockRemoveEventListener = jest.fn();

describe('useScrollPosition', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 0,
    });

    Object.defineProperty(window, 'addEventListener', {
      writable: true,
      configurable: true,
      value: mockAddEventListener,
    });

    Object.defineProperty(window, 'removeEventListener', {
      writable: true,
      configurable: true,
      value: mockRemoveEventListener,
    });
  });

  describe('Initial state and setup', () => {
    it('should return false initially when page is not scrolled', () => {
      window.scrollY = 0;

      const { result } = renderHook(() => useScrollPosition());

      expect(result.current).toBe(false);
    });

    it('should return true initially when page is already scrolled', () => {
      window.scrollY = 100;

      const { result } = renderHook(() => useScrollPosition());

      expect(result.current).toBe(true);
    });

    it('should add scroll event listener on mount', () => {
      renderHook(() => useScrollPosition());

      expect(mockAddEventListener).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function),
        { passive: true }
      );
      expect(mockAddEventListener).toHaveBeenCalledTimes(1);
    });
  });

  describe('Scroll behavior', () => {
    it('should update to true when scrolling from top', () => {
      window.scrollY = 0;

      const { result } = renderHook(() => useScrollPosition());
      expect(result.current).toBe(false);

      // Simulate scroll event
      act(() => {
        window.scrollY = 100;
        // Get the scroll handler from the addEventListener call
        const scrollHandler = mockAddEventListener.mock.calls[0][1];
        scrollHandler();
      });

      expect(result.current).toBe(true);
    });

    it('should update to false when scrolling back to top', () => {
      window.scrollY = 100;

      const { result } = renderHook(() => useScrollPosition());
      expect(result.current).toBe(true);

      // Simulate scrolling back to top
      act(() => {
        window.scrollY = 0;
        const scrollHandler = mockAddEventListener.mock.calls[0][1];
        scrollHandler();
      });

      expect(result.current).toBe(false);
    });

    it('should handle multiple scroll events correctly', () => {
      window.scrollY = 0;

      const { result } = renderHook(() => useScrollPosition());
      const scrollHandler = mockAddEventListener.mock.calls[0][1];

      // Initial state
      expect(result.current).toBe(false);

      // Scroll down
      act(() => {
        window.scrollY = 50;
        scrollHandler();
      });
      expect(result.current).toBe(true);

      // Scroll further down (should remain true)
      act(() => {
        window.scrollY = 200;
        scrollHandler();
      });
      expect(result.current).toBe(true);

      // Scroll back to top
      act(() => {
        window.scrollY = 0;
        scrollHandler();
      });
      expect(result.current).toBe(false);
    });
  });

  describe('Edge cases', () => {
    it('should handle scrollY = 1 (just barely scrolled)', () => {
      window.scrollY = 1;

      const { result } = renderHook(() => useScrollPosition());

      expect(result.current).toBe(true);
    });

    it('should handle negative scrollY values (edge case)', () => {
      window.scrollY = -10;

      const { result } = renderHook(() => useScrollPosition());

      expect(result.current).toBe(false);
    });

    it('should handle very large scrollY values', () => {
      window.scrollY = 999999;

      const { result } = renderHook(() => useScrollPosition());

      expect(result.current).toBe(true);
    });

    it('should handle rapid scroll changes', () => {
      window.scrollY = 0;

      const { result } = renderHook(() => useScrollPosition());
      const scrollHandler = mockAddEventListener.mock.calls[0][1];

      // Simulate rapid scrolling
      act(() => {
        window.scrollY = 100;
        scrollHandler();
        window.scrollY = 0;
        scrollHandler();
        window.scrollY = 50;
        scrollHandler();
      });

      expect(result.current).toBe(true);
    });
  });

  describe('Cleanup and unmounting', () => {
    it('should remove scroll event listener on unmount', () => {
      const { unmount } = renderHook(() => useScrollPosition());

      // Verify listener was added
      expect(mockAddEventListener).toHaveBeenCalledTimes(1);

      unmount();

      // Verify listener was removed with the same handler
      expect(mockRemoveEventListener).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function)
      );
      expect(mockRemoveEventListener).toHaveBeenCalledTimes(1);
    });

    it('should remove the same handler that was added', () => {
      const { unmount } = renderHook(() => useScrollPosition());

      const addedHandler = mockAddEventListener.mock.calls[0][1];

      unmount();

      const removedHandler = mockRemoveEventListener.mock.calls[0][1];
      expect(addedHandler).toBe(removedHandler);
    });

    it('should not cause memory leaks with multiple mount/unmount cycles', () => {
      // Mount and unmount multiple times
      for (let i = 0; i < 3; i++) {
        const { unmount } = renderHook(() => useScrollPosition());
        unmount();
      }

      // Each mount should add a listener and each unmount should remove it
      expect(mockAddEventListener).toHaveBeenCalledTimes(3);
      expect(mockRemoveEventListener).toHaveBeenCalledTimes(3);
    });
  });

  describe('Event listener options', () => {
    it('should use passive event listener for performance', () => {
      renderHook(() => useScrollPosition());

      expect(mockAddEventListener).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function),
        { passive: true }
      );
    });
  });

  describe('Hook stability', () => {
    it('should not recreate event handlers on re-renders', () => {
      const { rerender } = renderHook(() => useScrollPosition());

      const firstHandler = mockAddEventListener.mock.calls[0][1];

      // Force re-render
      rerender();

      // Should not add another event listener
      expect(mockAddEventListener).toHaveBeenCalledTimes(1);

      // Handler should be the same
      expect(mockAddEventListener.mock.calls[0][1]).toBe(firstHandler);
    });

    it('should maintain state across re-renders', () => {
      window.scrollY = 100;

      const { result, rerender } = renderHook(() => useScrollPosition());

      expect(result.current).toBe(true);

      rerender();

      expect(result.current).toBe(true);
    });
  });
}); 