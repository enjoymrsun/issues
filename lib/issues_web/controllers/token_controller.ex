defmodule IssuesWeb.TokenController do
  use IssuesWeb, :controller
  alias Issues.Accounts.User

  action_fallback IssuesWeb.FallbackController

  def create(conn, %{"name" => name, "pass" => pass}) do
    with {:ok, %User{} = user} <- Issues.Accounts.get_and_auth_user(name, pass) do
      token = Phoenix.Token.sign(conn, "auth token", user.id)
      conn
      |> put_status(:created)
      |> render("token.json", user: user, token: token)
    end
  end
end
