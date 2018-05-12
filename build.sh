#!/usr/bin/env bash
yarn build --prod --deploy-url=https://iwe7.github.io/demos/

rm -rf demos

git clone git@github.com:iwe7/demos.git demos

mv -f dist/iwe7-test2/* demos/*

cd demos

git add .
git commit -m 'rebuild'

git push origin master
