import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { Education } from './components/Education';
import { Skills } from './components/Skills';

export default function App() {
    return (
        <main 
            className="
                my-10 mx-auto p-10 max-w-200 bg-base1 
                border-solid rounded-2xl 
                shadow-[0px_0px_32px_16px_hsla(240,70%,30%,0.75)]
            "
        >
            <Header />
            <hr className="h-0.5 my-7 border-0 bg-accent1" />
            <Summary />
            <Education />
            <Skills />
        </main>
    );
}
