import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private service: MovieApiServiceService){}

  bannerResult: any=[];
  trendingMovieResult: any=[];
  trendingTvResult: any=[];
  popularResult: any=[];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.trendingTvData();
    this.popularApiData();
  }

  bannerData(){
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'Resultados do Banner');
      this.bannerResult = result.results;
    })
  }

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'Rusultados filmes em alta');
      this.trendingMovieResult = result.results;
    })
  }

  trendingTvData(){
    this.service.trendingTvApiData().subscribe((result) => {
      console.log(result, 'Resultados de séries em alta');
      this.trendingTvResult = result.results;
    })
  }

  popularApiData(){
    this.service.popularApiData().subscribe((result) => {
      console.log(result, 'Resultado dos mais populares');
      this.popularResult = result.results;
    })
  }

}
