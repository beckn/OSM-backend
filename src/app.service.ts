import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';


@Injectable()
export class AppService {
  async getOsmData() {
    try {
      const response = await fetch(
        'https://overpass-api.de/api/interpreter?'
        , {
          method: 'POST',
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
          body: "[out:json];node(48.868221, 2.224983,48.868672, 2.456898)[amenity=restaurant];out;"
        })
      const data = await response.text()
      console.log(data)
      return data
    } catch (error) {
      console.error(error);
    }
  }
}
