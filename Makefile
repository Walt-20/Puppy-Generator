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

build-client-image:
	@echo building frontend dockerfile
	cd client && docker build -t puppy-generator-client .

push-client-image:
	@echo push latest to repo
	docker push wrwawra/puppy-generator:puppy-generator-client

build-server-image:
	@echo building frontend dockerfile
	cd server && docker build -t puppy-generator-server .

push-server-image:
	@echo push latest to repo
	docker push wrwawra/puppy-generator:puppy-generator-server

restart_kube_frontend:
	@echo restart frontend pods
	kubectl rollout restart deployment/frontend

restart_frontend_pod:
	$(MAKE) build-private-repo && $(MAKE) push-private-repo && $(MAKE) restart_kube_frontend

git_add:
	git add .

git_commit:
	git commit -m "make file adding to repo"

git_push:
	git push

push_to_git:
	$(MAKE) git_add && $(MAKE) git_commit && $(MAKE) git_push