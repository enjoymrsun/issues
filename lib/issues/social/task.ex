defmodule Issues.Social.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :description, :string
    field :done, :integer
    field :title, :string
    field :work_time, :integer
    belongs_to :assignee, Issues.Accounts.User
    belongs_to :issuer, Issues.Accounts.User

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :description, :work_time, :done, :assignee_id, :issuer_id])
    |> validate_required([:title, :description, :assignee_id, :issuer_id])
  end
end
