export const SearchBar = ({ onSearch }) => {
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
      <input type="text" name="search" />
      <button type="submit">Search</button>
    </form>
  );
};
