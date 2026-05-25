# Pep's Albums

A Vue 3 app showing Pep Guardiola's favourite albums and his reviews of them.

All reviews are taken from Pep's own words in this BBC Sport article:
https://www.bbc.co.uk/sport/football/45918581

## Running the app

This frontend talks to the **soundblobs-backend** API, which must be running on `http://localhost:3000` before you start the frontend.

### 1. Start the backend

From the `soundblobs-backend` directory:

```bash
make up       # start Docker services (MySQL + Redis)
make migrate  # run database migrations
make seed     # seed Pep's albums and reviews
make dev      # start the API server on :3000
```

### 2. Start the frontend

From this directory:

```bash
npm install
npm run dev   # starts on http://localhost:3002
```
