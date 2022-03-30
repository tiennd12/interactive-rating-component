import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <header>How did we do?</header>
        <div className="description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </div>
        <div className="rating">
          <span className="number">1</span>
          <span className="number">2</span>
          <span className="number">3</span>
          <span className="number">4</span>
          <span className="number">5</span>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
