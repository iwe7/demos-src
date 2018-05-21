#!/usr/bin/env bash
ng build --project forms-builder
cd dist/forms-builder
npm publish
cd ../
yarn add iwe7-forms-builder
