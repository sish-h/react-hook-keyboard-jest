import useKeyPress from '../components/UsekeyPress';
import { renderHook, act } from "@testing-library/react";
import { fireEvent } from '@testing-library/react'

test('Fire Enter keyboard event Enter', () => {
  const { result } = renderHook((() => useKeyPress('Enter')))

  act(() => {
    fireEvent.keyDown(window, { key: 'Enter', code: 'Enter' });
  })

  expect(result.current).toBe(true);
});

test('Fire Enter keyboard event M', () => {
  const { result } = renderHook((() => useKeyPress('m')))

  act(() => {
    fireEvent.keyDown(window, { key: 'm', code: 'm' });
  })

  expect(result.current).toBe(true);
});

test('Fire Enter keyboard event any key', () => {
  const { result } = renderHook((() => useKeyPress('Enter')))

  act(() => {
    fireEvent.keyDown(window, { key: 'a', code: 'a' });
  })

  expect(result.current).toBe(false);
});