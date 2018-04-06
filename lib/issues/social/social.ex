defmodule Issues.Social do
  @moduledoc """
  The Social context.
  """

  import Ecto.Query, warn: false
  alias Issues.Repo

  alias Issues.Social.Task

  @doc """
  Returns the list of tasks.

  ## Examples

      iex> list_tasks()
      [%Task{}, ...]

  """
  def list_tasks do
    Repo.all(Task)
    # |> Repo.preload([:assignee])
  end

  @doc """
  Gets a single task.

  Raises `Ecto.NoResultsError` if the Task does not exist.

  ## Examples

      iex> get_task!(123)
      %Task{}

      iex> get_task!(456)
      ** (Ecto.NoResultsError)

  """
  def get_task!(id) do
    Repo.get!(Task, id)
    # |> Repo.preload([:assignee])
  end

  def get_my_tasks(current_user) do
    %{"id": id} = current_user
    query = from t in Task, where: t.assignee_id == ^id

    Repo.all(query)
    # |> Repo.preload([:assignee])
  end

  # def get_my_send_out_tasks(current_user) do
  #   %{"id": id} = current_user
  #   query = from t in Task, where: t.issuer_id == ^id
  #
  #   Repo.all(query)
  #   |> Repo.preload([:assignee, :issuer])
  # end

  @doc """
  Creates a task.

  ## Examples

      iex> create_task(%{field: value})
      {:ok, %Task{}}

      iex> create_task(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_task(attrs \\ %{}) do
    {:ok, task} = %Task{}
    |> Task.changeset(attrs)
    |> Repo.insert()
    {:ok, task}
  end

  @doc """
  Updates a task.

  ## Examples

      iex> update_task(task, %{field: new_value})
      {:ok, %Task{}}

      iex> update_task(task, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_task(%Task{} = task, attrs) do
    task
    |> Task.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Task.

  ## Examples

      iex> delete_task(task)
      {:ok, %Task{}}

      iex> delete_task(task)
      {:error, %Ecto.Changeset{}}

  """
  def delete_task(%Task{} = task) do
    Repo.delete(task)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking task changes.

  ## Examples

      iex> change_task(task)
      %Ecto.Changeset{source: %Task{}}

  """
  def change_task(%Task{} = task) do
    Task.changeset(task, %{})
  end
end
