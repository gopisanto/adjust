import { apiCall, clickHandler, secondsArray } from './main';

global.fetch = require('jest-fetch-mock');

beforeEach(() => {
  fetch.resetMocks();
});

test("API call is success", () => {
  fetch.mockResponseOnce(JSON.stringify({ id: 1 }), { status: 200 });
  const onResponse = jest.fn();
  const onError = jest.fn();

  return apiCall(20, 'https://jsonplaceholder.typicode.com/getposts')
    .then(onResponse)
    .catch(onError)
    .finally(() => {
      expect(onResponse).toHaveBeenCalled();
      expect(onError).not.toHaveBeenCalled();
      expect(onResponse.mock.calls[0][0]).toEqual({ id: 1 });
    });
});

test("API call fails if url is wrong", () => {
  fetch.mockResponseOnce(JSON.stringify({}), { status: 404 });
  const onResponse = jest.fn();
  const onError = jest.fn();

  return apiCall(20)
    .then(onResponse)
    .catch(onError)
    .finally(() => {
      expect(onResponse).not.toHaveBeenCalled();
      expect(onError).toHaveBeenCalled();
    });
});

test("Click handler should update secondsArray variable with seconds at which button is clicked", async () => {
  global.Date.now = jest.fn(() => new Date('2019-04-07T10:20:30Z').getTime())
  fetch.mockResponseOnce(JSON.stringify({ id: '101' }), { status: 200 });

  await clickHandler();

  expect(secondsArray.length).toBe(1);
});