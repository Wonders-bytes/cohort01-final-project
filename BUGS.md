# BUGS.md

## Bug 1: Missing React Hook Import

* **What was broken:** The app failed to compile because React couldn't find `useState`.
* **Where:** `App.jsx`
* **Why:** The required React hook was not imported.
* **How I fixed it:** Added `useState` to the React import statement.

## Bug 2: Search Was Not Updating

* **What was broken:** Typing into the search box did not always trigger a new search.
* **Where:** `App.jsx`
* **Why:** The `useEffect` responsible for searching was not correctly watching the search query.
* **How I fixed it:** Updated the dependency array so the effect runs whenever the search query changes.

## Bug 3: Search Requests Were Not Cleaned Up

* **What was broken:** Multiple API requests could be made while typing quickly.
* **Where:** `App.jsx`
* **Why:** The debounce timer was not properly cleaned up.
* **How I fixed it:** Returned `clearTimeout()` from the effect to cancel previous timers.

## Bug 4: Watchlist Was Not Saved Correctly

* **What was broken:** Movies disappeared after refreshing the page.
* **Where:** `App.jsx`
* **Why:** Different localStorage keys were used when saving and loading the watchlist.
* **How I fixed it:** Used the same key (`movieWatchlist`) for both saving and loading.

## Bug 5: Watchlist Was Overwritten on Startup

* **What was broken:** Saved movies were erased immediately after the app loaded.
* **Where:** `App.jsx`
* **Why:** The save effect ran before the watchlist finished loading from localStorage.
* **How I fixed it:** Added an `isLoaded` state so saving only starts after the initial load is complete.

## Bug 6: Duplicate Movies Could Be Added

* **What was broken:** The same movie could be added to the watchlist multiple times.
* **Where:** `App.jsx`
* **Why:** There was no duplicate check before adding a movie.
* **How I fixed it:** Checked whether the movie already exists before adding it.

## Bug 7: Watchlist Filters Returned Incorrect Results

* **What was broken:** The Watched and Unwatched filters displayed the wrong movies.
* **Where:** `App.jsx`
* **Why:** The filter conditions were reversed.
* **How I fixed it:** Corrected the filter logic so each button displays the correct movies.

## Bug 8: Browser Title Was Incorrect

* **What was broken:** The browser tab showed the default Vite title instead of the application name.
* **Where:** `index.html`
* **Why:** The starter project still used the default title.
* **How I fixed it:** Changed the title to **My Movies Tracker**.


## Bug 9: No Feedback When Search Returned Nothing

* **What was broken:** Users saw a blank page when no movies matched the search.
* **Where:** `App.jsx`
* **Why:** There was no message for empty search results.
* **How I fixed it:** Added a "No movies found" message.

## Bug 10: New Feature: Watchlist Sorting

* **Feature Added:** Users can now sort their watchlist by title, rating, newest release, or oldest release.
* **Where:** `App.jsx`
* **Why:** This improves usability and makes it easier to organize saved movies.
* **How I implemented it:** Added a new `sortBy` state and sorted the filtered watchlist before rendering it.

# AI Usage

I used ChatGPT during this project to:

* Understand debugging techniques.
* Help identify bugs in the starter code.
* Explain why the bugs happened.
* Verify possible fixes before applying them.

I tested every suggested fix myself before keeping it in the project. Some suggestions needed adjustments after testing, especially around localStorage and JSX structure, and I verified the final solution by running and testing the application.

### What I used it for
I used ChatGPT to help me understand the existing React code, debug errors, explain concepts, and suggest possible fixes for bugs.

### What prompts I gave it
Some examples of prompts I used were:
- "Why does my watchlist disappear after refreshing the page?"
- "Help me fix this React JSX parse error."
- "How do I save my watchlist to localStorage?"

### What it got right
ChatGPT correctly identified several issues, including:
- The mismatch between the `localStorage` save and load keys.
- The need to prevent overwriting `localStorage` before loading existing data.
- The reversed watched/unwatched filter logic.
- JSX syntax issues.
- Suggestions for implementing the sorting feature.

### What it got wrong
Some suggestions required testing and adjustment before they worked correctly. For example, the initial `localStorage` solution needed an additional loading state to prevent saved data from being overwritten, and some JSX changes had to be adapted to fit the project's structure.

### How I verified its output
I tested every suggested fix in the browser, checked the console for errors, refreshed the page to verify persistence, and confirmed that all features worked correctly before keeping the changes.