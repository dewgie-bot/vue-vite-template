#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
LOG_FILE=".ralph/ralph.log"
MAX_ITERS=${MAX_ITERS:-25}
MODEL=${MODEL:-gpt-5.2-codex}

for i in $(seq 1 "$MAX_ITERS"); do
  echo -e "\n=== Ralph BUILD (vue-vite-ts) iteration $i/$MAX_ITERS ===" | tee -a "$LOG_FILE"
  codex -m "$MODEL" -s workspace-write -a on-request exec "$(cat PROMPT.md)" 2>&1 | tee -a "$LOG_FILE"

  if grep -q "^STATUS: COMPLETE" IMPLEMENTATION_PLAN.md; then
    echo "✅ STATUS: COMPLETE detected. Stopping." | tee -a "$LOG_FILE"
    exit 0
  fi

done

echo "❌ Max iterations reached without STATUS: COMPLETE" | tee -a "$LOG_FILE"
exit 1
