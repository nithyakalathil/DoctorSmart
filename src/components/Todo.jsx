import { useState } from "react";
import {

useDispatch,
useSelector
} from "react-redux";
import {
addTodo,
toggleTodo,
deleteTodo
} from "../features/todo/todoSlice";
function Todo() {
const [text, setText] = useState("");
const todos = useSelector(
(state) => state.todo.todos
);
const dispatch = useDispatch();
const handleSubmit = (e) => {
e.preventDefault();
if (!text.trim()) {
return;
}
dispatch(addTodo(text));
setText("");
};
return (
<div>
<h1>Redux Todo</h1>
<form onSubmit={handleSubmit}>

<input
value={text}
onChange={(e) =>
setText(e.target.value)
}
placeholder="Enter todo"
/>
<button type="submit">
Add
</button>
</form>
{todos.map((todo) => (
<div key={todo.id}>
<span>
{todo.completed
? "✅"
: "⬜"}
{todo.text}
</span>
<button
onClick={() =>
dispatch(toggleTodo(todo.id))
}
>
Complete
</button>
<button
onClick={() =>
dispatch(deleteTodo(todo.id))
}
>
Delete

</button>
</div>
))}
</div>
);
}
export default Todo;