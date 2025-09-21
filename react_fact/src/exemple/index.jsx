import { createRoot } from 'react-dom/client';
//import { Fragment } from 'react'; -- Evite d'insérer une <div> pour entourer le code et donc d'ajouter un nouveau noeud html, possibilité d'utiliser <></> pour ne pas importer Fragment (fait la même chose)
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const root = createRoot(document.getElementById('root'));
root.render(
    <main>
        <img src="src/assets/react.svg" width="40px" />
        <h1>Fun Fact about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <Page />
    </main>
    
)

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}