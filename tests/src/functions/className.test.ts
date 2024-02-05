import { expect, test } from 'vitest'
import className from "@functions/className"

test('className returns newValue when true', () => {
  expect(className("default", true, "newVal")).toBe('newVal')
})
test('className returns newValue when true', () => {
  expect(className("default", false, "newVal")).toBe('default')
})
