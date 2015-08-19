# Vinculum

** Warning: This code is *pre-proof of concept* quality! I don't even know what I'm doing here.**

## Rationale

Vinculum (named after the Borg central control node) is meant to be a replacement for how I use Emacs' org-mode for life logging, note taking and general organisational tasks, driven by the frustrations of synchronising text-only files and the poverty of an Emacs UI. It's great for text, but it's *awful* for everything else. It intends to log, manage and present data about your life, in the ways that org-mode does and in several others, including rich charts.

Currently, only a very rough REST interface, a small and hackish web front-end and, and a command-line Python client have been implemented.

## Development

From the standard Chestnut README:

Open a terminal and type `lein repl` to start a Clojure REPL
(interactive prompt).

In the REPL, type

```clojure
(run)
(browser-repl)
```

The call to `(run)` does two things, it starts the webserver at port
3000, and also the Figwheel server which takes care of live reloading
ClojureScript code and CSS. Give them some time to start.

Running `(browser-repl)` starts the Weasel REPL server, and drops you
into a ClojureScript REPL. Evaluating expressions here will only work
once you've loaded the page, so the browser can connect to Weasel.

When you see the line `Successfully compiled "resources/public/app.js"
in 21.36 seconds.`, you're ready to go. Browse to
`http://localhost:3000` and enjoy.

## Usage

Uh, please don't.

## Chestnut

Created with [Chestnut](http://plexus.github.io/chestnut/) 0.7.0.
