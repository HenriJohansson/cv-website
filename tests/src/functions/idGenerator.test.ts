import { getNewId, _test } from "@functions/idGenerator";
import { test, expect } from "vitest";

const idExamples = ["testID", "testsawfdaf", "test1234", "test_ff3_"];
test('Adds new Id to the list', () => {
  getNewId(idExamples[0])
  expect(_test.ids.length).toBe(1)
})

test('Adding same Id multiple times to the list cannot be done', () => {
  getNewId(idExamples[0])
  getNewId(idExamples[0])
  getNewId(idExamples[0])
  expect(_test.ids.length).toBe(1)
})

test('get new id from the idGenerator', () => {
  expect(getNewId(idExamples[0]) === getNewId(idExamples[0])).toBeFalsy()
})

test('get new id from the idGenerator', () => {
  getNewId(idExamples[1]);
  getNewId(idExamples[1]);
  getNewId(idExamples[1]);
  expect(getNewId(idExamples[1])).toBe(idExamples[1]+3)
})
