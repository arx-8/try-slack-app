# try-slack-app

## Available endpoints

### `https://{FQDN}/healthz`

- For health check

### `https://{FQDN}/slack/events`

- For
  - Event Subscriptions
  - Interactivity & Shortcuts
  - Slash commands

#### Appendix

ref. https://github.com/slackapi/bolt-js/blob/%40slack/bolt%403.10.0/README.md#listening-for-events

> ## Listening for events
>
> The Slack **Request URL** for a Bolt app must have the path set to `/slack/events`.  
> For example: `https://my-slack-app.example.com/slack/events`.  
> Otherwise, all incoming requests from Slack won't be handled.

## For developer

### Run for development

```s
cp .env.sample .env
# Edit to your environment.
vi .env

# Install npm packages
yarn

# Run
yarn dev

# Check
curl http://127.0.0.1:3000/healthz
```

### And with ngrok

```s
ngrok http 3000

# Check
curl https://{FQDN}.ngrok.io/healthz
```

### With Docker

```s
# Create your environment
cp .env.sample .env
vi .env

# Build container
docker build -f dockerfiles/Dockerfile -t try-slack-app .

# Run
docker run -d --env-file .env -p 3000:3000 try-slack-app

# Check
curl http://127.0.0.1:3000/healthz
```

#### Docker debug snippets

```s
docker logs {CONTAINER_ID}

# Use sh (Replace "Runtime container" with "gcr.io/distroless/nodejs" to "node")
docker run --rm -it try-slack-app sh
```

## Debug (VSCode)

Run `yarn dev`, Then attach vscode debugger.

# Tools

- [Slack | Block Kit Builder](https://app.slack.com/block-kit-builder)
