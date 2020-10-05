import { search } from './search';

beforeEach(() => {
  fetch.resetMocks();
});

it('gets movies correctly', async () => {
  fetch.mockResponseOnce(JSON.stringify('Marvel Movies'));
  const data = await search('0559217f931948d53686513322d626c7', 'en', 'marvel');

  expect(data).toEqual('Marvel Movies');
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    'https://api.themoviedb.org/3/search/movie?api_key=0559217f931948d53686513322d626c7&language=en-US&query=marvel'
  );
});

it('catches errors and returns null', async () => {
  fetch.mockReject(() => 'API failure');
  const data = await search('0559217f931948d53686513322d626c7', 'en', 'marvel');

  expect(data).toEqual(null);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    'https://api.themoviedb.org/3/search/movie?api_key=0559217f931948d53686513322d626c7&language=en-US&query=marvel'
  );
});
