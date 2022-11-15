.DEFAULT_GOAL := help

# See all the available commands.
.PHONY: help
help: 
	@echo "Commands for use: "
	@echo "-- make up "
	@echo "-- make down"
	@echo "-- make rebuild"
	@echo "-- make rebuild-sql"
	@echo "-- make logs-client"
	@echo "-- make logs-mysql"
	@echo "-- make restart-server"
	@echo "-- make bash-client"
	@echo "-- make mysql-db"

# Run all the containers.
.PHONY: up
up: 
	@docker-compose up -d --build

# Shoot down the containers.
.PHONY: down
down: 
	@docker-compose down --remove-orphans

# Rebuild all containers
.PHONY: rebuild
rebuild: 
	@docker-compose build --no-cache

# Rebuild server container
.PHONY: rebuild-sql
rebuild-sql: 
	@docker-compose build cazadores-DB --no-cache

# Open the log of the cazadores container.
.PHONY: logs-client
logs-client: 
	@docker logs cazadores -f

# Open the log of the cazadores-DB container.
.PHONY: logs-mysql
logs-mysql: 
	@docker logs cazadores-DB -f

# Restart the cazadores container.
.PHONY: restart-server
restart-server: 
	@docker restart cazadores

# Open a bash terminal in the cazadores container.
.PHONY: bash-client
bash-client: 
	@docker exec -it cazadores bash

# Open a mysql terminal in the cazadores-DB container.
.PHONY: mysql-db
mysql-db: 
	@docker exec -it cazadores-DB mysql -u root -p