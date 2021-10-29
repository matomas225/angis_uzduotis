import { useEffect, useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [error, setError] = useState();
  const [itemList, setItemList] = useState([]);
  const [counter, setCounter] = useState(null);

  useEffect(() => {
    setCounter(itemList.filter((item) => item.completed).length);
  }, [itemList]);

  const completeHandle = (event) => {
    setItemList(
      itemList.map((item, index) => {
        if (index == event.target.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      })
    );
  };

  const deleteHandle = (event) => {
    setItemList(
      itemList.filter((element, index) => {
        return index != event.target.id;
      })
    );
  };
  const submitHandle = (event) => {
    event.preventDefault();
    if (item === "") {
      setError("Input is Empty!");
    } else {
      setError("");
      setItemList([
        ...itemList,
        {
          text: item,
          completed: false,
        },
      ]);
      setItem("");
    }
  };
  const changeHandle = (event) => {
    setItem(event.target.value);
  };

  return (
    <div className="App w-75 mx-auto">
      <h2 className="text-center mt-5 pb-3 border-bottom">THINGS TO DO:</h2>
      <ul class="list-group w-50 mx-auto">
        {itemList.map((item, index) => (
          <li
            style={{ textDecoration: item.completed ? "line-through" : "" }}
            class={`list-group-item border-0 `}
            key={index}
          >
            <input
              class="form-check-input me-1"
              type="checkbox"
              id={index}
              value=""
              aria-label="..."
              onClick={completeHandle}
            />
            {item.text}
            <button
              className="float-end border-0 p-2 .bg-light"
              onClick={deleteHandle}
              id={index}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <h2 className="text-center border-top p-2">DONE: {counter}</h2>
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
            value={item}
            onChange={changeHandle}
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
