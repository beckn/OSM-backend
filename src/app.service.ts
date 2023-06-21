import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import dotenv from 'dotenv'
dotenv.config()


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
          body: `[out:json];node(around:100.00,${reqParam.latitude},${reqParam.longitude})[${reqParam.tagName}=${reqParam.tagValue}];out;`
        })
      const data = await response.text();
      let res = JSON.parse(data)
      return res.elements
    } catch (error) {
      console.error(error);
    }
  }
}
