import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import dotenv from 'dotenv'
dotenv.config()


@Injectable()
export class AppService {
  async getOsmData(keyword) {
    if (!keyword) {
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
          body: `[out:json];node(${process.env.MINLAT},${process.env.MINLAN},${process.env.MAXLAT},${process.env.MAXLAN})[amenity=${keyword}];out;`
        })
      const data = await response.text()
      console.log(data)
      return data
    } catch (error) {
      console.error(error);
    }
  }
}
