# Publish a curated-prompt gist via GitHub API

Purpose: publish new content to our #1 traffic channel autonomously

When to use: .founder/content/gists/ and want it live on gist.github.com/manduks/

---

When to use: Any time we finish drafting content in .founder/content/gists/ and want it live on gist.github.com/manduks/
Requires: GITHUB_GIST_TOKEN env var or .founder/.gh_gist_token file (gitignored)
---
1. Read the markdown file from .founder/content/gists/
2. Extract the H1 title as the gist description
3. Strip the H1 from the file contents (keep H2+ onwards)
4. curl -X POST https://api.github.com/gists with Authorization: token $TOKEN, body {"description":"<title>","public":true,"files":{"<slug>.md":{"content":"<body>"}}}
5. Parse the response JSON to get the gist html_url
6. POST the html_url to IndexNow (https://www.bing.com/indexnow?url=<URL>&key=mt-indexnow-2026) so Google picks it up fast
7. Record the gist URL + date + target product in .founder/MEMORY.md under the Session heading
8. Update the .founder/content/gists/ file with a "Published: <URL>" frontmatter line so we don't re-publish`
