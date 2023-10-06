import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }
  
  baseurl = "https://api.themoviedb.org/3"
  apikey = "c0e4a6e8789dc1012ca63cbd07b42fd2"


  // BANNER API DATA
  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
  }

  // FILMES EM ALTA
  trendingMovieApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/movie/week?api_key=${this.apikey}`)
  }

  // SERIES EM ALTA
  trendingTvApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/tv/week?api_key=${this.apikey}`)
  }

  // POPULARES AGORA
  popularApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/tv/top_rated?api_key=${this.apikey}`)
  }

  searchMovieData(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)
  }
}
