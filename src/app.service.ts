import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import dotenv from 'dotenv'
dotenv.config()
import response from './response.json'


@Injectable()
export class AppService {
  async fetchStores(reqParam) {
    if (!reqParam) {
      return {}
    }
    try {
      const response = await fetch(
        process.env.OVERPASSURL
        , {
          method: 'POST',
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
          body: `[out:json];node[${reqParam.tagName}=${reqParam.tagValue}]["shop"=${reqParam.filter}](around:5000.00,${reqParam.latitude},${reqParam.longitude});out 100;`
        })
      const data = await response.text()
      let res = JSON.parse(data)
      return res.elements
    } catch (error) {
      console.error(error);
    }
  }
}
