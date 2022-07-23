<div id="top"></div>

[![LinkedIn][linkedin-shield]][linkedin-url]
<br />
<div align="center">
    <img src="https://user-images.githubusercontent.com/90569344/180589664-3706cdc3-4029-4df7-a3cc-57834c4a19e9.jpeg" height="100" width="300"/>

  </div>
<h3 align="center">Takeover Sports Network</h3>
<p align="center">Podcast/Blogging Application with in-app media player, CRUD enabled blog and user authorization. Built to accomodate sports journalism network with numerous content providers. <b>MERN</b> Stack Application <i>(Node JS)</i>.
<br />
<br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the code »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Peach97/TakeoverPods">View Demo</a>
    ·
    <a href="https://github.com/Peach97/TakeoverPods/issues">Report Bug</a>
    ·
    <a href="https://github.com/Peach97/TakeoverPods/pulls">Pull Requests</a>
      </p>
</div>

## About The Project
<div align="center">
<img  width="500" alt="Screen Shot 2022-07-23 at 12 25 03 AM" src="https://user-images.githubusercontent.com/90569344/180590475-21e04f38-7432-4656-a55a-b641837ae3e5.png">
<img  width="500" alt="Screen Shot 2022-07-23 at 12 27 16 AM" src="https://user-images.githubusercontent.com/90569344/180592848-abdc3cd1-2a5e-4466-bd78-8358e3c81987.png">
</div>

### Built Using

[![React][React.js]][React-url]
[![MaterialUI][MaterialUI.com]][MaterialUI-url]
[![Express][Express.js]][Express-url]
[![Node][Node.js]][Node-url]
[![MongoDB][MongoDB.com]][MongoDB-url]






### Spotify Authorization Flow

Takeover Pods uses the <a href="https://developer.spotify.com/documentation/web-api/">Spotify Web API</a> for the media player as well as the information provided in the episode cards.

#### Client Credentials Flow

<p align="left"> In order to access free Spotify content, we first use the Spotify <a href="https://developer.spotify.com/documentation/general/guides/authorization/client-credentials/"> client credentials flow</a> to authorize the client itself.</p>

This is an example using the React `useEffect` hook
<br />
<br />
<img alt="carbon" src="https://user-images.githubusercontent.com/90569344/180594359-ca26eb4b-26ee-4b43-82b8-1a7a802e225c.png" height="600" width="500"/>
<br />
#### Authorization Code Flow

<p align="left">In order to access <b>premium</b> Spotify content including: </p>
<br />
<b>
<ul>
<li>Media Playback Controls</li>
<li>Accessing Spotify User Information</li>
<li>Favoriting episodes</li>
</ul>
</b>
<br />

<p align="left">The client must be able to access the following Spotify <a href="https://developer.spotify.com/documentation/general/guides/authorization/scopes/">Authorization Scopes</a>:</p>

  `user-read-currently-playing`

  `user-read-playback-state`

  `user-modify-playback-state`
  
  `user-read-recently-played`
  
  `user-read-email`
  
  `user-read-private`
  
  `streaming`
  
  <br />
  
  This is done using the <a href="https://developer.spotify.com/documentation/general/guides/authorization/code-flow/">authorization code flow</a>.
  <br />
  Here is an example using an `access_url` to allow for premium users to login and return an access token
  <br />
  <br />
  <img alt="carbon" src="https://user-images.githubusercontent.com/90569344/180595509-373985dd-bf33-4756-96e0-12702b0a4183.png" height="600" width="900"/>
  
  
  ### Contact
  Cameron Petrie 
  <ul>
  <li> <a href="https://www.linkedin.com/in/cameron-petrie-4b00aa148/">LinkedIn</a></li>
  <li><b>petrie.cam@gmail.com</b></li>
  <li><a href="https://github.com/Peach97/">Github</a></li>
  </ul>















[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: linkedin.com/in/cameron-petrie-4b00aa148
[product-screenshot]:<img width="1440" alt="Screen Shot 2022-07-23 at 12 25 03 AM" src="https://user-images.githubusercontent.com/90569344/180590475-21e04f38-7432-4656-a55a-b641837ae3e5.png">
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[MaterialUI.com]: https://img.shields.io/badge/MaterialUI-003060?style=for-the-badge&logo=MUI&logoColor=007FFF
[MaterialUI-url]: https://mui.com/
[Express.js]: https://img.shields.io/badge/ExpressJS-000000?style=for-the-badge&logo=express&logoColor=FFFFFF
[Express-url]: https://expressjs.com/
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=FFFFFF
[Node-url]: https://nodejs.org/en/
[MongoDB.com]: https://img.shields.io/badge/MongoDB-343E42?style=for-the-badge&logo=MongoDB&logoColor=47A248
[MongoDB-url]: https://www.mongodb.com/

