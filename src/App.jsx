import Header from "./components/Header";
import Search from "./components/Search";
import { ChartsProvider } from "./context/ChartsssContext";

const App = () => {
    return (
        <ChartsProvider>
            <main className="min-h-screen font-Work bg-[#fcf7f8] pb-12">
                <section className="w-[90%] mx-auto">
                    <Header />
                    <Search />
                </section>
            </main>
        </ChartsProvider>
    );
};

export default App;
