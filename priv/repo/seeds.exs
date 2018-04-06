# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Issues.Repo.insert!(%Issues.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

defmodule Seeds do
  alias Issues.Repo
  alias Issues.Accounts.User
  alias Issues.Social.Task

  def run do
    p = Comeonin.Argon2.hashpwsalt("xiangshi")

    Repo.delete_all(User)
    a = Repo.insert!(%User{ name: "alice", password_hash: p })
    b = Repo.insert!(%User{ name: "bob", password_hash: p })
    c = Repo.insert!(%User{ name: "carol", password_hash: p })
    d = Repo.insert!(%User{ name: "dave", password_hash: p })

    Repo.delete_all(Task)
    Repo.insert!(%Task{ title: "Read", description: "Read Algorithms", work_time: 30, done: 0, assignee_id: 2 })
    Repo.insert!(%Task{ title: "Play Game", description: "Play PUBG, Fortnite NBA2K 18", work_time: 150, done: 1, assignee_id: 3 })
    Repo.insert!(%Task{ title: "Sleep", description: "Sleep continuously 20 hours", work_time: 0, done: 0, assignee_id: 4 })
    Repo.insert!(%Task{ title: "Relax", description: "Go visit some museums", work_time: 75, done: 1, assignee_id: 1 })
    Repo.insert!(%Task{ title: "Eat", description: "Cook for a fried rice and big mac and EAT!", work_time: 15, done: 1, assignee_id: 3 })
    Repo.insert!(%Task{ title: "Exercise", description: "Do some boxing and swimming", work_time: 210, done: 0, assignee_id: 4 })

  end
end

Seeds.run
