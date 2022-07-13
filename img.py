#!/usr/bin/python
# -*- coding: utf-8 -*-

import requests
import json

# py -2 img.py

path = 'xxx/bbb/img/'


def download_image(url, name):
    response = requests.get(url)
    if response.status_code == 200:
        with open(path + name, 'wb') as f:
            f.write(response.content)


with open('data.json') as data_file:
    data = json.load(data_file)
    for item in data['data']:
        print('downloading.. ' + item['name'])
        download_image(item['url'], item['name'])
