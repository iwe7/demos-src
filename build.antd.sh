#!/usr/bin/env bash
ng build --project iwe7-antd
cd dist/iwe7-antd
npm publish
cd ../
yarn add iwe7-antd
