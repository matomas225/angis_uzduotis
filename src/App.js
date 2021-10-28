import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [error, setError] = useState();

  const submitHandle = (event) => {
    event.preventDefault();
    if (item === "") {
      setError("Input is Empty!");
    } else {
      console.log(item);
      setError("");
    }
  };
  return (
    <div className="App w-75 mx-auto">
      <h2 className="text-center mt-5 pb-3 border-bottom">THINGS TO DO:</h2>
      <ul class="list-group w-50 mx-auto">
        <li class="list-group-item border-0">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          First checkbox
          <button className="float-end border-0 p-2 .bg-light">X</button>
        </li>
        <li class="list-group-item border-0">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          First checkbox
          <button className="float-end border-0 p-2 .bg-light">X</button>
        </li>
        <li class="list-group-item border-0">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          First checkbox
          <button className="float-end border-0 p-2 .bg-light">X</button>
        </li>
        <li class="list-group-item border-0">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          First checkbox
          <button className="float-end border-0 p-2 .bg-light">X</button>
        </li>
        <li class="list-group-item border-0">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          First checkbox
          <button className="float-end border-0 p-2 .bg-light">X</button>
        </li>
      </ul>
      <h2 className="text-center border-top p-2">DONE: </h2>
      {error ? (
        <div class="alert alert-danger w-50 text-center mx-auto" role="alert">
          Input is empty
        </div>
      ) : (
        ""
      )}
      <form action="" className="">
        <div className="task w-50 mx-auto">
          <input
            type="text"
            className="form-control w-75 float-start p-2"
            placeholder="Enter new task"
            onChange={(event) => setItem(event.target.value)}
          />
          <button
            className="btn btn-primary w-25 float-end p-2"
            onClick={submitHandle}
          >
            ADD TASK
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
