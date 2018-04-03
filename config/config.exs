# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :issues,
  ecto_repos: [Issues.Repo]

# Configures the endpoint
config :issues, IssuesWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "5O0sKGfzOJNUs8VGkFKQKTA6A4hueMJr9TscihJTpL8fQaBaLSxljeW1TmxIP7jD",
  render_errors: [view: IssuesWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Issues.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
