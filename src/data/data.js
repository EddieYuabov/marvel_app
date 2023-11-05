const movies = [
  {
    id: 1,
    name: 'Iron Man',
    src: 'https://www.youtube.com/embed/8ugaeA-nMTc',
    img: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg',
    release_date: '05/02/08',
    run_time: '2h 6m',
    personal_rating: '9.5'
  },
  {
    id: 2,
    name: 'The Incredible Hulk',
    src: 'https://www.youtube.com/embed/xbqNb2PFKKA',
    img: 'https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg',
    release_date: '06/12/08',
    run_time: '1h 54m',
    personal_rating: '8.5'
  },
  {
    id: 3,
    src: 'https://www.youtube.com/embed/wKtcmiifycU',
    name: 'Iron Man 2',
    img: 'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg',
    release_date: '05/07/10',
    run_time: '2h 4m',
    personal_rating: '9.1'
  },
  {
    id: 4,
    src: 'https://www.youtube.com/embed/JOddp-nlNvQ',
    name: 'Thor',
    img: 'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg',
    release_date: '05/06/11',
    run_time: '1h 55m',
    personal_rating: '8.2'
  },
  {
    id: 5,
    src: 'https://www.youtube.com/embed/JerVrbLldXw',
    name: `Captain America: The First Avenger`,
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg',
    release_date: '07/22/11',
    run_time: '2h 4m',
    personal_rating: '9.5'
  },
  {
    id: 6,
    src: 'https://www.youtube.com/embed/hIR8Ar-Z4hw',
    name: 'Avengers',
    img: 'https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/268821/4556789/apiihy1mm__31528.1625622408.jpg?c=2',
    release_date: '05/04/12',
    run_time: '2h 23m',
    personal_rating: '9.0'
  },
  {
    id: 7,
    src: 'https://www.youtube.com/embed/Ke1Y3P9D0Bc',
    name: 'Iron Man 3',
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg',
    release_date: '05/03/13',
    run_time: '2hr 10m',
    personal_rating: '8.8'
  },
  {
    id: 8,
    src: 'https://www.youtube.com/embed/npvJ9FTgZbM',
    name: 'Thor: The Dark World',
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg',
    release_date: '11/08/13',
    run_time: '1h 52m',
    personal_rating: '8.6'
  },
  {
    id: 9,
    src: 'https://www.youtube.com/embed/7SlILk2WMTI',
    name: 'Captain America: The Winter Soldier',
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg',
    release_date: '04/04/14',
    run_time: '2h 16m',
    personal_rating: '9.2'
  },
  {
    id: 10,
    src: 'https://www.youtube.com/embed/d96cjJhvlMA',
    name: 'Guardians of the Galaxy',
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg',
    release_date: '08/01/14',
    run_time: '2h 1m',
    personal_rating: '8.9'
  },
  {
    id: 11,
    src: 'https://www.youtube.com/embed/tmeOjFno6Do',
    name: 'Avengers: Age Of Ultron',
    img: 'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg',
    release_date: '05/01/15',
    run_time: '2h 23m',
    personal_rating: '9.2'
  },
  {
    id: 12,
    src: 'https://www.youtube.com/embed/pWdKf3MneyI',
    name: 'Ant Man',
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rS97hUJ1otKTTripGwQ0ujbuIri.jpg',
    release_date: '07/17/15',
    run_time: '1h 57m',
    personal_rating: '9'
  },
  {
    id: 13,
    src: 'https://www.youtube.com/embed/FkTybqcX-Yo',
    name: 'Captain America: Civil War',
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg',
    release_date: '05/06/16',
    run_time: '2h 27m',
    personal_rating: '9.5'
  },
  {
    id: 14,
    src: 'https://www.youtube.com/embed/HSzx-zryEgM',
    name: 'Doctor Strange',
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7WfK17BXE6szXlm4WOxfswgbdsL.jpg',
    release_date: '11/04/16',
    run_time: '1h 55m',
    personal_rating: '9.3'
  },
  {
    id: 15,
    src: 'https://www.youtube.com/embed/dW1BIid8Osg',
    name: 'Guardians of the Galaxy Vol. 2',
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg',
    release_date: '05/05/17',
    run_time: '2h 17m',
    personal_rating: '9.1'
  },
  {
    id: 16,
    src: 'https://www.youtube.com/embed/39udgGPyYMg',
    name: 'Spider-Man: Homecoming',
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg',
    release_date: '07/07/17',
    run_time: '2h 13m',
    personal_rating: '8.8'
  },
  {
    id: 17,
    src: 'https://www.youtube.com/embed/ue80QwXMRHg',
    name: 'Thor: Ragnarok',
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
    release_date: '11/03/17',
    run_time: '2h 11m',
    personal_rating: '9'
  },
  {
    id: 18,
    src: 'https://www.youtube.com/embed/xjDjIWPwcPU',
    name: 'Black Panther',
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
    release_date: '02/16/18',
    run_time: '2h 15m',
    personal_rating: '9.2'
  },
  {
    id: 19,
    src: 'https://www.youtube.com/embed/6ZfuNTqbHE8',
    name: 'Avengers: Infinity War',
    release_date: '4/27/18',
    img: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg',
    run_time: '2h 40m',
    personal_rating: '9.7'
  },
  {
    id: 20,
    src: 'https://www.youtube.com/embed/UUkn-enk2RU',
    name: 'Ant-Man and the Wasp',
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eivQmS3wqzqnQWILHLc4FsEfcXP.jpg',
    release_date: '07/06/18',
    run_time: '1h 59m',
    personal_rating: '9'
  },
  {
    id: 21,
    src: 'https://www.youtube.com/embed/Z1BCujX3pw8',
    name: 'Captain Marvel',
    img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
    release_date: '03/08/19',
    run_time: '2h 4m',
    personal_rating: '8.8'
  },
  {
    id: 22,
    src: 'https://www.youtube.com/embed/hA6hldpSTF8',
    name: 'Avengers: EndGame',
    release_date: '4/26/19',
    img: 'https://m.media-amazon.com/images/I/51yUkVmPOrL._AC_.jpg',
    run_time: '3h 2m',
    personal_rating: '9.3'
  },
  {
    id: 23,
    src: 'https://www.youtube.com/embed/Nt9L1jCKGnE',
    name: 'Spiderman: Far From Home',
    release_date: '07/02/19',
    img: 'https://www.joblo.com/wp-content/uploads/2019/01/Spider-Man-Far-From-Home-poster-1-1.jpg',
    run_time: '2h 10m',
    personal_rating: '8.8'
  },
  {
    id: 24,
    src: 'https://www.youtube.com/embed/sj9J2ecsSpo',
    name: 'WandaVision',
    img: 'https://m.media-amazon.com/images/I/71nwO6MO0vS.jpg',
    release_date: '01/15/21',
    run_time: '9 episodes',
    personal_rating: '9.1'
  },
  {
    id: 25,
    src: 'https://www.youtube.com/embed/IWBsDaFWyTE',
    name: 'The Falcon and the Winter Soldier',
    img: 'https://media.comicbook.com/2020/12/marvel-falcon-and-the-winter-soldier-poster-2021-1248503.jpeg?auto=webp&width=800&height=1185&crop=800:1185,smart',
    release_date: '03/19/21',
    run_time: '6 episodes',
    personal_rating: '7.5'
  },
  {
    id: 26,
    src: 'https://www.youtube.com/embed/nW948Va-l10',
    name: 'Loki',
    img: 'https://cdn.europosters.eu/image/1300/posters/marvel-loki-i127940.jpg',
    release_date: '06/09/21',
    run_time: '6 episodes',
    personal_rating: '9.5'
  },
  {
    id: 27,
    src: 'https://www.youtube.com/embed/Fp9pNPdNwjI',
    name: 'Black Widow',
    img: 'https://m.media-amazon.com/images/I/81hllpS+2US._AC_UF894,1000_QL80_.jpg',
    release_date: '07/09/21',
    run_time: '2h 13m',
    personal_rating: '8.3'
  },
  {
    id: 28,
    src: 'https://www.youtube.com/embed/4iLVoEg9aLk',
    name: 'What If...?',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/online_2_0.jpg',
    release_date: '08/11/21',
    run_time: '9 episodes',
    personal_rating: '9.0'
  },
  {
    id: 29,
    src: 'https://www.youtube.com/embed/giWIr7U1deA',
    name: 'Shang-Chi and the Legend of the Ten Rings',
    img: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/shangchi_and_the_legend_of_the_ten_rings_500x.jpg?v=1622220347',
    release_date: '09/03/21',
    run_time: '2h 12m',
    personal_rating: '8.7'
  },
  {
    id: 31,
    src: 'https://www.youtube.com/embed/x_me3xsvDgk',
    name: 'Eternals',
    img: 'https://i.ebayimg.com/images/g/NnMAAOSwfYxipn1q/s-l1600.jpg',
    release_date: '11/05/21',
    run_time: '2h 37m',
    personal_rating: '8.0'
  },
  {
    id: 32,
    src: 'https://www.youtube.com/embed/5VYb3B1ETlk',
    name: 'Hawkeye',
    img: 'https://m.media-amazon.com/images/M/MV5BMGQ1OWNlY2QtMGY1NC00ZDkxLWJhZTktMzg5Mzk5YWY1YzA1XkEyXkFqcGdeQXVyMTU5OTc2NTk@._V1_FMjpg_UX1000_.jpg',
    release_date: '11/24/21',
    run_time: '6 episodes',
    personal_rating: '8.0'
  },
  {
    id: 33,
    src: 'https://www.youtube.com/embed/rt-2cxAiPJk',
    name: 'Spider-Man: No Way Home',
    img: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/255053349_408225954164881_580470973376990445_n_558x.jpg?v=1637860151',
    release_date: '12/17/21',
    run_time: '2h 28m',
    personal_rating: '8.9'
  },
  {
    id: 34,
    src: 'https://www.youtube.com/embed/x7Krla_UxRg',
    name: 'Moon Knight',
    img: 'https://m.media-amazon.com/images/M/MV5BYTc5OWNhYjktMThlOS00ODUxLTgwNDQtZjdjYjkyM2IwZTZlXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_.jpg',
    release_date: '03/30/22',
    run_time: '6 episodes',
    personal_rating: '8.5'
  },
  {
    id: 35,
    src: 'https://www.youtube.com/embed/aWzlQ2N6qqg',
    name: 'Doctor Strange in the Multiverse of Madness',
    img: 'https://m.media-amazon.com/images/I/71BisddDMfL.jpg',
    release_date: '05/06/22',
    run_time: '2h 6m',
    personal_rating: '8.6'
  },
  {
    id: 36,
    src: 'https://www.youtube.com/embed/m9EX0f6V11Y',
    name: 'Ms. Marvel',
    img: 'https://sportshub.cbsistatic.com/i/2022/03/15/167616d8-e4e3-476c-9717-f729934a52bb/ms-marvel-digital-teaser-vert-v3-lg.jpg?auto=webp&width=1688&height=2500&crop=0.675:1,smart',
    release_date: '06/08/22',
    run_time: '6 episodes',
    personal_rating: '7.8'
  },
  {
    id: 37,
    src: 'https://www.youtube.com/embed/Go8nTmfrQd8',
    name: 'Thor: Love and Thunder',
    img: 'https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    release_date: '07/08/22',
    run_time: '1h 59m',
    personal_rating: '4.0'
  },
  {
    id: 38,
    src: 'https://www.youtube.com/embed/D7eFpRf4tac',
    name: 'I Am Groot',
    img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/lp_site.jpg',
    release_date: '10/10/22',
    run_time: '5 episodes',
    personal_rating: '6.0'
  },
  {
    id: 39,
    src: 'https://www.youtube.com/embed/u7JsKhI2An0',
    name: 'She-Hulk: Attorney at Law',
    img: 'https://pbs.twimg.com/media/FS_eR_9VsAAK3ig.jpg:large',
    release_date: '10/18/22',
    run_time: '9 episodes',
    personal_rating: '1.8'
  },
  {
    id: 40,
    src: 'https://www.youtube.com/embed/bLEFqhS5WmI',
    name: 'Werewolf by Night',
    img: 'https://m.media-amazon.com/images/M/MV5BZjI3NjI3NDQtY2RmYS00NTJjLWI0YTQtNTE4NmZiN2UzMWJjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg',
    release_date: '10/07/22',
    run_time: '53 minutes',
    personal_rating: 'idek'
  },
  {
    id: 41,
    src: 'https://www.youtube.com/embed/RlOB3UALvrQ',
    name: 'Black Panther: Wakanda Forever',
    img: 'https://i.ebayimg.com/images/g/ceAAAOSwMpBjPJTN/s-l1600.jpg',
    release_date: '11/11/22',
    run_time: '2h 41m',
    personal_rating: '6.8'
  },
  {
    id: 42,
    src: 'https://www.youtube.com/embed/OYhFFQl4fLs',
    name: 'The Guardians of the Galaxy Holiday Special',
    img: 'https://m.media-amazon.com/images/M/MV5BOGJjMzlmNzctMWI4Yi00MjcyLWFmYzAtN2JmZjU0YTM4YmRmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg',
    release_date: '11/25/22',
    run_time: '42 mins',
    personal_rating: '7.0'
  },
  {
    id: 43,
    src: 'https://www.youtube.com/embed/5WfTEZJnv_8',
    name: 'Ant-Man and the Wasp: Quantumania',
    img: 'https://sportshub.cbsistatic.com/i/2022/10/24/3fe2ecc3-2100-4f7e-951a-aabe1782372d/ant-man-and-the-wasp-quantumania-poster.jpg?auto=webp&width=1688&height=2500&crop=0.675:1,smart',
    release_date: '02/17/23',
    run_time: '2h 5m',
    personal_rating: '8.8'
  },
  {
    id: 44,
    src: 'https://www.youtube.com/embed/u3V5KDHRQvk',
    name: 'Guardians Of the Galaxy Vol.3',
    img: 'https://image.tmdb.org/t/p/original/bRdR9EMEjDr5jxMRyt7fvGF0Hy2.jpg',
    release_date: '05/05/23',
    run_time: '2h 29m',
    personal_rating: '9.5'
  },
  {
    id: 45,
    src: 'https://www.youtube.com/embed/Tp_YZNqNBhw',
    name: 'Secret Invasion',
    img: 'https://cdn.marvel.com/content/1x/secretinvasion.jpg',
    release_date: '06/21/23',
    run_time: '6 episodes',
    personal_rating: '8'
  },
  {
    id: 46,
    src: 'https://www.youtube.com/embed/dug56u8NN7g',
    name: 'Loki Season 2',
    img: 'https://lumiere-a.akamaihd.net/v1/images/image002_18870_b56691ea.jpeg?region=0,0,1688,2500',
    release_date: '10/05/23',
    run_time: '6 episodes',
    personal_rating: '9'
  },
  {
    id: 47,
    src: 'https://www.youtube.com/embed/wS_qbDztgVY',
    name: 'The Marvels',
    img: 'https://m.media-amazon.com/images/M/MV5BM2U2YWU5NWMtOGI2Ni00MGMwLWFkNjItMjgyZWMxNjllNTMzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    release_date: '11/10/23',
    run_time: '1h 45m',
    personal_rating: '5'
  }
]
export default movies
