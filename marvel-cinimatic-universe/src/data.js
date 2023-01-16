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
    name: 'Captain America: The First Avenger',
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
  }
]
export default movies
