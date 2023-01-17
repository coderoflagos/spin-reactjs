import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
   <div className="container">
        <h1 className="App-intro">
         <b> Welcome to <a href="#" class="link-blue">Spin</a> and <a href="#" class="link-blue">React JS </a> 👋🏽</b>
        </h1>

<br/>
<p className="description">
 You can now get started by editing <code>src/App.js</code> and save to reload. When you are done, you can run <code>npm run dev</code> to execute the <code>spin build</code> and <code>spin up</code> commands - to statically export your React application and start Spin! 
</p>
        </div>

<div class="main">
   
        <div className="grid">
          <a href="https://reactjs.org/docs/getting-started.html" className="card">
            <h3>React Documentation &rarr;</h3>
            <p>Overview of the React documentation and related resources.</p>
          </a>

          <a href="https://developer.fermyon.com/spin" className="card">
            <h3>Spin documentation &rarr;</h3>
            <p>Learn about Wasm serverless applications with Spin.</p>
          </a>

          <a href="https://fermyon.com/cloud" className="card">
            <h3>Meet Fermyon Cloud &rarr;</h3>
            <p>Learn about the fastest way to run your Spin applications!</p>
          </a>

          <a
            href="https://developer.fermyon.com/cloud/index"
            className="card">
            <h3>Deploy your apps &rarr;</h3>
            <p>Deploy your Spin applications with Fermyon Cloud.</p>
          </a>

</div>
</div>
      </header>
    </div>

  );
}

export default App;
