#!/usr/bin/env bash
ng build --project iwe7-editor
cd dist/iwe7-editor
npm publish
cd ../
yarn add iwe7-editor
