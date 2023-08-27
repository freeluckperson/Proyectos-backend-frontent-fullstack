import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
  const tasks = useSelector((state) => state.task);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6 ">
      <header className="flex justify-between items-center py-4">
        <h1>Task total {tasks.length}</h1>
        <Link
          className="bg-indigo-600 hover:bg-zinc-600 px-2 py-1 rounded-sm text-sm"
          to="/create-task"
        >
          Create task
        </Link>
        <Link className="bg-indigo-600 hover:bg-zinc-600 px-2 py-1 rounded-sm text-sm" to="/appp">
          appp
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-4 ">
        {tasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-1">
                <button className="bg-red-600 hover:bg-zinc-600 px-2 py-1 text-xs rounded-md " onClick={() => handleDelete(task.id)}>Delete</button>
                <Link className="bg-indigo-600 hover:bg-zinc-600 px-2 py-1 text-xs rounded-md" to={`/edit-task/${task.id}`}>edit</Link>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
