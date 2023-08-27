import { Separator } from "@/components/ui/separator";
import logo from "@/assets/images/logo.svg";
import { ChartsContainer } from "./components/ChartsContainer";

function App() {
  return (
    <div className="bg-slate-900 bg-[url(/blur.svg)] min-h-screen bg-cover py-4 px-4">
      <div className="mx-auto w-full">
        <header className="py-2 md:py-5 px-6 md:px-10 rounded-lg outline outline-1 outline-slate-700 bg-opacity-10 bg-slate-500 shadow-lg">
          <a
            href="https://unidex.exchange"
            className="flex items-center w-fit mx-auto md:mx-0 gap-4"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={logo}
              alt="UniDex Logo"
              width="147"
              height="50"
              className="scale-75 md:scale-100"
            />
            <Separator orientation="vertical" className="h-12" />
            <p className="uppercase text-sm md:text-md">Analytics</p>
          </a>
        </header>
        <main>
          <h1 className="w-full text-center text-6xl md:text-7xl py-10 font-header tracking-widest">
            UniDex Stats
          </h1>

          <ChartsContainer />
        </main>
      </div>
    </div>
  );
}

export default App;
