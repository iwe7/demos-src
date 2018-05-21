#!/usr/bin/env bash
ng build --project iwe7-forms
cd dist/iwe7-forms
npm publish
cd ../
yarn add iwe7-forms
