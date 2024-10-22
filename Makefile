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

build-private-repo:
	@echo building frontend dockerfile
	cd client \
	docker build -t wrwawra/puppy-generator-client:latest .

push-private-repo:
	@echo push latest to repo
	docker push wrwawra/puppy-generator-client:latest

restart_kube_frontend:
	@echo restart frontend pods
	kubectl rollout restart deployment/frontend

restart_frontend_pod:
	$(MAKE) build-private-repo && $(MAKE) push-private-repo && $(MAKE) restart_kube_frontend