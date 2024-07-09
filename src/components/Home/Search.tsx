
const Search = () => {
  return (
    <label className="input bg-transparent input-bordered flex items-center gap-2">
      <input type="text" className="grow" placeholder="Search" />
      <kbd className="kbd kbd-sm">⌘</kbd>
      <kbd className="kbd kbd-sm">K</kbd>
    </label>
  );
};

export default Search;
