function NavBar() {
  return (
    <header className="z-20 flex w-full flex-col items-start gap-4 bg-[color:var(--bg-color)] p-4 text-[28px] shadow-md transition-colors lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center text-[color:var(--light-elements)] hover:text-[color:var(--primary-color)]">
        <span className="pr-2">🍻</span>
        <p>
          Brest{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[--pink] to-[--primary-color] ...]">
            bar
          </span>
        </p>
      </div>
    </header>
  );
}

export default NavBar;
