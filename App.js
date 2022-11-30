import React from 'react';
import  ReactPlayer  from  'react-player/youtube'
import './App.css';




function Title(){
  return (
  <div>
    <h1>---------------------------------------------------------------------------------------------</h1>
    <h1>Crom's haunted music hall</h1>            
    <h1>---------------------------------------------------------------------------------------------</h1>
    <h7>#we are the children of darkness  #we are the friends of moon and sun  #now, you are one of us  #welcome welcome welcome</h7>
  </div>)
}

function Sample({disk,picture,year,album,rate,link,singer}){
  return (
    <div>
      <h1>Music name: {disk}</h1>
      <h2>Singer: {singer}</h2>
      <h3>Release date: {year}</h3>
      <h3>Album name: {album}</h3>
      <img src={picture} alt="img"/>
      <h2>Star_Rating: {rate}</h2>
      <h3>Music video - (provide from youtube)</h3>
      <ReactPlayer url={link}/>
      <h1>---------------------------------------------------------------------------------------------</h1>
    </div>
  );
}

const musicILike = [
  {
    id:2,
    name:'stairway to heaven',
    image:'https://i.scdn.co/image/ab67616d00001e02403882d0a287578bc0e92a4f',
    number:'1971',
    album:'Led Zeppelin IV',
    rate: '10',
    link:'https://www.youtube.com/watch?v=X791IzOwt3Q',
    singer:'Led zepplin' 
  },
  {
    id:4,
    name:"Sweet child O'Mine",
    image:'https://t1.daumcdn.net/cfile/tistory/232F54355792EAD933',
    number:'1987',
    album:'Appetite for Destruction',
    rate: '9',
    link:'https://www.youtube.com/watch?v=1w7OgIMMRc4',
    singer:"Guns N' Roses"
  },
  {
    id:3,
    name:'The dreamer',
    image:'https://bimage.interpark.com/goods_image/1/7/9/5/354681795g.jpg',
    number:'2006',
    album:'Regame?',
    rate: '9',
    link: 'https://www.youtube.com/watch?v=pIcZrcj-5GQ',
    singer:'N.EX.T(넥스트)'
  },
  {
    id: 1,
    name: '그대에게',
    image: 'https://bimage.interpark.com/goods_image/1/7/9/5/354681795g.jpg',
    number:'2006',
    album:'Regame?',
    rate: '10',
    link:'https://www.youtube.com/watch?v=09xTguEnXQk',
    singer:'N.EX.T(넥스트)'
  },
  {
    id: 5,
    name: 'Bohemian Rhapsody',
    image: 'https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg',
    number:'1975',
    album:'A night at the opera',
    rate: '10',
    link:'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
    singer:'Queen'
  },
  {
    id: 6,
    name: 'Hope',
    image: 'https://danzzac.com/data/mall/280/2/279115.1',
    number:'1995',
    album:'The return of N.EX.T part2:World',
    rate: '8',
    link:'https://www.youtube.com/watch?v=Q-ffQIrzwCI',
    singer:'N.EX.T(넥스트)'
  },
  {
    id: 7,
    name: 'Lazenca save us',
    image: 'https://w.namu.la/s/d14f40e5039a9efaebac618207d91731ec47bcc2f6105f87a1690b66ca5caec20abf1a688a30f33a180ae9efa75f10c15012cb876c702019e419da2c36ae17291041bccc27e907b1717b2486ec765504faa6d8ebe3050b6174539cff417203b70d1185338d0694374ad772683f7b625c',
    number:'1997',
    album:'Lazenca  A space rock opera',
    rate: '9',
    link:'https://www.youtube.com/watch?v=NFNf4Qu__yU',
    singer:'N.EX.T(넥스트)'
  },
  {
    id: 8,
    name: 'Highway to hell',
    image: 'https://w.namu.la/s/7a51e6cf9293c6f84f66050c96fd3496215939715dc04f8ce67a41c80a2f09a9b08c6504f698cc88e62d4530420777a0e9e6a636400d14ea9be26ab107d3ecc39366276be6e3816156b16f5b0633df4e2edb37654c61e7706dd05ecb84e570e331ec47fae8eaf5a4cd8be96c2228847b',
    number:'1979',
    album:'Highway to hell',
    rate: '7',
    link:'https://www.youtube.com/watch?v=SgLy-6yj1Ws',
    singer:'AC/DC'
  },
  {
    id: 9,
    name: '시청앞 지하철 역에서',
    image: 'https://i.ytimg.com/vi/hiSkmo4xbvw/hqdefault.jpg',
    number:'1990',
    album:'동물원 세번째 노래모음',
    rate: '8',
    link:'https://youtu.be/hiSkmo4xbvw',
    singer:'동물원'
  },
  {
    id: 10,
    name: '깊은 밤을 날아서',
    image: 'https://image.bugsm.co.kr/album/images/500/1355/135544.jpg',
    number:'1987',
    album:'이문세4집',
    rate: '8',
    link:'https://youtu.be/4mozUs2aIAg',
    singer:'이문세'
  },
  {
    id: 11,
    name: 'let it be',
    image: 'https://i.discogs.com/iX_4vyZb4aEkLqzPsb-O_ttW8zfPyp0FRu-qh9WUuz0/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwNTg5/MTktMTM1Mzg2MDQ4/NC00MDYyLmpwZWc.jpeg',
    number:'1970',
    album:'let it be',
    rate: '9',
    link:'https://www.youtube.com/watch?v=QDYfEBY9NM4',
    singer:'The beatles'
  },
  {
    id: 12,
    name: 'Highway Star',
    image: 'data:image/jpeg;base64,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',
    number:'1972',
    album:'Machine Head',
    rate: '8',
    link:'https://www.youtube.com/watch?v=lC4gKA4ezcU',
    singer:'deep purple'
  },
  {
    id: 13,
    name: '서울역',
    image: 'https://i.discogs.com/GGBhpldbGPMcqcP3285PiU1uyPMT0A5yaDde5pWqhqA/rs:fit/g:sm/q:90/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYyODU0/OTctMTQxNTU4MDk2/Mi01OTM5LmpwZWc.jpeg',
    number:'2004',
    album:'The return of N.EX.T part3 개한민국',
    rate: '7',
    link:'https://www.youtube.com/watch?v=gt60OijHdfQ',
    singer:'N.EX.T(넥스트)'
  },
  {
    id: 14,
    name: 'sugar',
    image: 'data:image/jpeg;base64,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',
    number:'2015',
    album:'V',
    rate: '7',
    link:'https://www.youtube.com/watch?v=N1BcpzPGlYQ',
    singer:'Maroon5'
  },
  {
    id: 15,
    name: 'Welcome to the real world',
    image: 'data:image/jpeg;base64,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',
    number:'2015',
    album:'Welcome to the real world',
    rate: '10',
    link:'https://www.youtube.com/watch?v=8E4cCyrFLJw',
    singer:'신해철'
  },
  {
    id: 15,
    name: '흰수염고래',
    image: 'https://bimage.interpark.com/goods_image/9/3/1/2/209289312g.jpg',
    number:'2011',
    album:'흰수염고래',
    rate: '8',
    link:'https://www.youtube.com/watch?v=v-pjWpCSAVI',
    singer:'YB'
  },
  {
    id: 16,
    name: 'come and get your love',
    image: 'https://i.scdn.co/image/ab67706c0000da84e2e707b09a3807811f67668a',
    number:'1974',
    album:'Wovoka',
    rate: '10',
    link:'https://www.youtube.com/watch?v=RoR7wEEvIuo',
    singer:'Readbone'
  },
  {
    id: 17,
    name: '별이진다네',
    image: 'https://i.ytimg.com/vi/trAIa-ZzOGw/hqdefault.jpg',
    number:'1993',
    album:'여행스케치',
    rate: '8',
    link:'https://www.youtube.com/watch?v=ciBisqVQ6xc',
    singer:'여행스케치'
  }  
]; 


function renderMusic(disk) {
  return <Sample key={disk.id} disk = {disk.name} picture={disk.image} year={disk.number} album={disk.album} rate={disk.rate} link={disk.link} singer={disk.singer}/>
}

function App() {
  return (
  <div>
    {Title()}
    {musicILike.map(renderMusic)}
    
  </div>
  );
}


export default App;
