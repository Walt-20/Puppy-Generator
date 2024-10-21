down:
	@echo "docker compose down..."
	docker compose down --remove-orphans

build:
	@echo "docker compose build..."
	docker compose build

up: 
	@echo "spinning up that thang..."
	docker compose up

rebuild:
	$(MAKE) down && $(MAKE) build && $(MAKE) up