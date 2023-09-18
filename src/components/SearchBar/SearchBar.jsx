import { useSearchParams } from 'react-router-dom';

export const SearchBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const updateSP = e => {
    const search = e.target.value;
    if (search === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: search });
  };

  return (
    <form
      onSubmit={evt => {
        const value = evt.target.elements.search.value;
        if (!value) {
          evt.preventDefault();
          return alert('Enter querry!');
        }
        evt.preventDefault();
        onSearch(value);
      }}
    >
      <input
        type="text"
        name="search"
        onChange={updateSP}
        value={query ? query : ''}
      />
      <button type="submit">Search</button>
    </form>
  );
};
