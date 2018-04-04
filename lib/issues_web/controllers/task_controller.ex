defmodule IssuesWeb.TaskController do
  use IssuesWeb, :controller

  alias Issues.Social
  alias Issues.Social.Task

  action_fallback IssuesWeb.FallbackController

  def index(conn, _params) do
    tasks = Social.list_tasks()
    render(conn, "index.json", tasks: tasks)
  end

  def create(conn, %{"task" => task_params}) do
    with {:ok, %Task{} = task} <- Social.create_task(task_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", task_path(conn, :show, task))
      |> render("show.json", task: task)
    end
  end

  def show(conn, %{"id" => id}) do
    task = Social.get_task!(id)
    render(conn, "show.json", task: task)
  end

  def update(conn, %{"id" => id, "task" => task_params}) do
    task = Social.get_task!(id)

    with {:ok, %Task{} = task} <- Social.update_task(task, task_params) do
      render(conn, "show.json", task: task)
    end
  end

  def delete(conn, %{"id" => id}) do
    task = Social.get_task!(id)
    with {:ok, %Task{}} <- Social.delete_task(task) do
      send_resp(conn, :no_content, "")
    end
  end
end