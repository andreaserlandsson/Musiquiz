all: install frontend 

update:
	git reset --hard
	git pull

install:
	npm install

frontend:
	echo "building frontend"
	cd frontend && make
	echo "finished building frontend"
run:
	node index.js

start:
	cd frontend && make
	cd ..
	node index.js