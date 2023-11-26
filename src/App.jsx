import Filter from "./components/Filter";
import NavBar from "./components/NavBar";
import SearchResults from "./components/SearchResults";
import Title from "./components/Title";

function App() {
  return (
    <div className="h-[100vh] bg-[color:var(--bg-color)] overflow-hidden">
      <NavBar />
      <aside className="h-32 scrollbar scrollbar-thumb-[color:var(--primary-color)] scrollbar-track-[color:var(--bg-color)] relative z-10 min-h-full flex-1 origin-left bg-[color:var(--bg-color)] text-light-elements shadow-xl transition-all lg:w-1/3 w-4/5 overflow-y-scroll">
        <Title />
        <div className="w-full border border-[#3d3d3d]"></div>
        <Filter />
        <div className="w-full border border-[#3d3d3d]"></div>
        <SearchResults />
      </aside>
      <main></main>
    </div>
  );
}

export default App;
