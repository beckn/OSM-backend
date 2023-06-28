import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import dotenv from 'dotenv'
dotenv.config()
import response from './response.json'


@Injectable()
export class AppService {
  async fetchStores(reqParam) {
    if (!reqParam) {
      return response
    }
    try {
      // const response = await fetch(
      //   process.env.OVERPASSURL
      //   , {
      //     method: 'POST',
      //     headers: {
      //       'content-type': 'application/json;charset=UTF-8',
      //     },
      //     body: `[out:json];node(around:5000.00,${reqParam.latitude},${reqParam.longitude})[${reqParam.tagName}=${reqParam.tagValue}];out 100;`
      //   })
      // const data = await response.text()
      // let res = JSON.parse(data)
      return response
    } catch (error) {
      console.error(error);
    }
  }
}
