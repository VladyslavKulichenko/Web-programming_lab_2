import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { Education } from './components/Education';
import { Skills } from './components/Skills';

export default function App() {
    return (
        <main>
            <Header />
            <hr />
            <Summary />
            <Education />
            <Skills />
        </main>
    );
}
