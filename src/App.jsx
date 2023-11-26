import Filter from "./components/Filter";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="h-[100vh] bg-[color:var(--bg-color)]">
      <NavBar />
      <aside className="custom-scrollbar relative z-10 min-h-full flex-1 origin-left bg-bg text-light-elements shadow-xl transition-all lg:w-1/3 w-4/5 overflow-y-scroll">
        <div className="w-full border border-[#3d3d3d]"></div>
        <Filter />
      </aside>
      <main></main>
    </div>
  );
}

export default App;
