async function search(api_key, language, query) {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=${language}-US&query=${query}`;
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (err) {
    return null;
  }
}

export { search };
