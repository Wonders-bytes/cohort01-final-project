# My Movies Tracker

## Overview

My Movies Tracker is a React application that allows users to search for movies using The Movie Database (TMDB) API, save movies to a personal watchlist, mark movies as watched or unwatched, filter their watchlist, and sort movies by different criteria.

## Features

* Search for movies using the TMDB API
* Add movies to a personal watchlist
* Prevent duplicate movies in the watchlist
* Mark movies as watched or unwatched
* Filter movies by:

  * All
  * Watched
  * Unwatched
* Sort watchlist by:

  * Title (A–Z)
  * Highest Rating
  * Newest Release
  * Oldest Release
* Watchlist is saved using Local Storage

## Bugs Fixed

During this project I fixed several issues, including:

* Fixed React hook import issues
* Fixed movie search behavior
* Fixed debounce cleanup
* Fixed Local Storage persistence
* Prevented duplicate watchlist entries
* Corrected watched/unwatched filter logic
* Fixed browser title
* Added empty search feedback
* Fixed JSX structure issues

## New Feature

I added a sorting feature that allows users to organize their watchlist by title, rating, newest release date, or oldest release date.

## Technologies Used

* React
* JavaScript (ES6+)
* CSS3
* Vite
* TMDB API

## Getting Started

1. Clone the repository.
2. Run:

```bash
npm install
```

3. Create a `.env` file in the project root:

```text
VITE_TMDB_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

## Author

Elijah Attai
