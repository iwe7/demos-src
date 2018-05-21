#!/usr/bin/env bash
ng build --project iwe7-antd-extra
cd dist/iwe7-antd-extra
npm publish
cd ../
yarn add iwe7-antd-extra
