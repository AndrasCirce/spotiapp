import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo!');
   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCVoHtOBOLSIWkZYKeNoNuehmWDfiGn2WNbekS1N7sCWv1TBwkrZNq8TNbzyQwDrMFeK8k8djw96BH68_o'
    });

      return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
          
   }
}
