
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";

import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";


function App() {

  const handleSelect = (selectedButtons) => {
    // selectedButtons => Components, JSX, Props, State
    console.log(selectedButtons);
    };
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title="Components"
              description="The core UI building block - compose the user interface by combining multiple components."
              image={componentsImg}
            />
            <CoreConcepts title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} />
            {/* Spread operator can be used when custom component key name and data key are same */}
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/* dynamic content */}
        </section>
      </main>
    </div>
  );
}

export default App;
