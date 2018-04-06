defmodule Issues.Social.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :description, :string
    field :done, :integer
    field :title, :string
    field :work_time, :integer
    field :assignee_id, :integer
    # belongs_to :assignee, Issues.Accounts.User

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :description, :work_time, :done, :assignee_id])
    |> validate_required([:title, :description, :assignee_id])
  end
end
