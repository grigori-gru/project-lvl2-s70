install:
				npm install
start:
				npm run babel-node -- src/bin/gendiff.js
lint:
				npm run eslint -- src test
publish:
				npm run publish
test:
				npm test
