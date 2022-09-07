import { Component, createSignal, Show } from 'solid-js';

import logo from './logo.svg';
import './App.scss';

const App: Component = () => {
  const [count, setCount] = createSignal<number>(0);

  return (
    <div class="App">
      <header class="App-header">
        <img src={logo} class="App-logo" alt="logo" />
        <p>Hello Vite + Solid!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count()}
          </button>
        </p>
        <Show when={count() > 0} keyed>
          <p>
            <code>The count is now: {count()}</code>
          </p>
        </Show>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            class="App-link"
            href="https://www.solidjs.com/tutorial"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Solid
          </a>
          {' | '}
          <a
            class="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
