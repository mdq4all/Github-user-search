import SearchIcon from "./SearchIcon";

interface Props {
  getUser: (username:string) => Promise<void>
}
export default function Searchbar({ getUser }: Props) {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    if (!username) return;
    await getUser(username)
  };

  return (
    <form
      className="flex items-center flex-wrap bg-[#08182E] w-full p-2 rounded-2xl mb-4"
      onSubmit={handleSubmit}
    >
      <div className="px-2">
        <SearchIcon />
      </div>
      <input
        type="search"
        placeholder="Search Github username..."
        className="focus:outline-none flex-1 bg-transparent"
        name="username"
      />
      <button className="p-4 bg-sky-800 rounded-2xl">Search</button>
    </form>
  );
}
