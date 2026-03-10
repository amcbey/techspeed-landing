# CLAUDE.md — TechSpeed Landing

## What is the Dokumen MCP?

Dokumen is an AI-powered documentation testing platform. Its core purpose is to enable **requirement-driven development** — requirements are written as documentation, and testing workflows validate that code actually satisfies those requirements.

The Dokumen MCP server gives Claude direct access to this loop: read requirements from documentation, run tests that validate behavior against those requirements, check results, and view coverage. Instead of manually navigating the web UI or CI pipelines, use the MCP tools to get answers and take action directly.

## Setting Up Claude Code with the Dokumen MCP

### Step 1 — Get Your GitLab PAT

You need your Personal Access Token for `gitlab.dokumen.app`. This is the same PAT you use to log into the Dokumen web app. If you don't have one, ask your Dokumen admin.

### Step 2 — Create `.mcp.json`

Create a file called `.mcp.json` in this project's root directory:

```json
{
  "mcpServers": {
    "dokumen": {
      "type": "streamable-http",
      "url": "https://api.dokumen.app/api/mcp/stream/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_GITLAB_PAT_HERE"
      }
    }
  }
}
```

Replace `YOUR_GITLAB_PAT_HERE` with your actual PAT (starts with `glpat-`).

**Do not commit `.mcp.json`** — it contains your personal token. Add it to `.gitignore` if not already there.

### Step 3 — Verify Connection

Restart Claude Code (or open a new session), then run:

```bash
claude mcp list
```

You should see `dokumen` listed as "connected".

### Available Tools

Once connected, Claude Code can use these 10 tools automatically:

| Tool | Purpose |
|------|---------|
| `ask` | Ask questions about your documentation — returns answers with sources and related test names |
| `list_files` | Browse files and folders in your docs repo |
| `get_repo` | Get repository metadata (name, branch, URL) |
| `list_tests` | List all test definitions |
| `run_test` | Trigger a test in CI — returns pipeline ID |
| `get_pipeline_status` | Check test status and judge verdicts |
| `get_test_history` | Get past runs and results for a test |
| `list_code_repos` | List linked code repositories (like this landing page) |
| `read_code_file` | Read a file from a linked code repo |
| `search_code` | Search across linked code repos by keyword |

## Dokumen MCP Workflows (Required)

**Always use the Dokumen MCP tools** for the following workflows. Do not bypass them with manual alternatives.

### Answering Questions
- Before answering questions about the codebase, use Dokumen MCP to search for relevant context, documentation, and test coverage.

### Running Tests
- Use Dokumen MCP to trigger and run tests. Do not run tests manually unless the MCP is unavailable.

### Checking Test Results
- Use Dokumen MCP to retrieve and review test results. Verify pass/fail status and coverage through the MCP interface.

### Before Fixing Code
- **Stop and check for requirements and clarifications first.** Before writing any fix:
  1. Use Dokumen MCP `ask` to look up related documentation and requirements
  2. Use `list_tests` and `get_test_history` to review existing test assertions and understand expected behavior
  3. Ask the user for clarification if the requirement is ambiguous
  4. Only proceed with the fix after requirements are confirmed

### After Fixing Code
- Run the relevant tests via `run_test` to validate the fix matches requirements
- Check results with `get_pipeline_status` — don't assume it passed

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Session not found" errors | Restart Claude Code to create a fresh MCP session |
| "Invalid or missing authentication" | Check your PAT is correct and not expired |
| `ask` returns empty results | Docs repo may not have documentation seeded yet |
| `run_test` fails | Use `list_tests` first to check exact test names |
| Tools not appearing | Run `claude mcp list` to verify connection status |
