DIST_DIR   := dist
STATIC_YML := .github/workflows/static.yml
STATIC_BAK := /tmp/portfolio_static_yml.bak

.PHONY: deploy

# Usage: make deploy MSG="your commit message"
deploy:
	@if [ -z "$(MSG)" ]; then echo "Error: MSG is required.  Usage: make deploy MSG=\"your message\""; exit 1; fi
	@echo ">>> Committing source repo..."
	@git add -A && git commit -m "$(MSG)"
	@git push origin master
	@echo ">>> Building..."
	@cp "$(DIST_DIR)/$(STATIC_YML)" "$(STATIC_BAK)"
	@npm run build
	@mkdir -p "$(DIST_DIR)/.github/workflows"
	@cp "$(STATIC_BAK)" "$(DIST_DIR)/$(STATIC_YML)"
	@rm "$(STATIC_BAK)"
	@echo ">>> Committing dist repo..."
	@cd "$(DIST_DIR)" && git add -A && git commit -m "$(MSG)"
	@cd "$(DIST_DIR)" && git push origin main
	@echo ">>> Done."
