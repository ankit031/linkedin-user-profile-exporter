
> An extremely easy-to-use browser extension for exporting your full LinkedIn Profile to a JSON Resume file or string.

## Chrome Extension 📦 - 

## Usage / Installation Options:
There are (or *were*) a few different options for how to use this:
 - **Fast and simple**: Chrome Extension - 
     - Feel free to install, use, and then immediately uninstall if you just need a single export
     - No data is collected


### Export Options
There are several main buttons in the browser extension, with different effects. You can hover over each button to see the alt text describing what they do, or read below:
 - *LinkedIn Profile to JSON*: Converts the profile to the JSON Resume format, and then displays it in a popup modal for easy copying and pasting
 - *Download JSON Resume Export*: Same as above, but prompts you to download the result as an actual `.json` file.
 - *Download vCard File*: Export and download the profile as a Virtual Contact File (`.vcf`) (aka *vCard*)
     - There are some caveats with this format; see below


## Troubleshooting
When in doubt, refresh the profile page before using this tool.

### Troubleshooting - Debug Log
If I'm trying to assist you in solving an issue with this tool, I might have you share some debug info. Currently, the easiest way to do this is to use the Chrome developer's console:

1. Append `?li2jr_debug=true` to the end of the URL of the profile you are on
2. Open Chrome dev tools, and specifically, the console ([instructions](https://developers.google.com/web/tools/chrome-devtools/open#console))
3. Run the extension (try to export the profile), and then look for red messages that show up in the console (these are errors, as opposed to warnings or info logs).
    - You can filter to just `error` messages, in the filter dropdown above the console.


## Development
> With the rewrite to a browser extension, I actually configured the build scripts to be able to still create a bookmarklet from the same codebase, in case the bookmarklet ever becomes a viable option again.

### Building the browser extension
`npm run build:browserext` will transpile and copy all the right files to `./build-browserext`, which you can then side-load into your browser. If you want to produce a single ZIP archive for the extension, `npm run package-browserext` will do that.

> Use `build-browserext-debug` for a source-map debug version. To get more console output, append `li2jr_debug=true` to the query string of the LI profile you are using the tool with.


### Debugging
Debugging the extension is a little cumbersome, because of the way Chrome sandboxes extension scripts and how code has to be injected. An alternative to setting breakpoints in the extension code itself, is to copy the output of `/build/main.js` and run it via the console.

---
