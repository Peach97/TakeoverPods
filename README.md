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
<img  width="45%" alt="Screen Shot 2022-07-23 at 12 25 03 AM" src="https://user-images.githubusercontent.com/90569344/180590475-21e04f38-7432-4656-a55a-b641837ae3e5.png">
<img  width="45%" alt="Screen Shot 2022-07-23 at 12 27 16 AM" src="https://user-images.githubusercontent.com/90569344/180592848-abdc3cd1-2a5e-4466-bd78-8358e3c81987.png">
</div>

### Built Using

[![React][React.js]][React-url]
[![MaterialUI][MaterialUI.com]][MaterialUI-url]
[![Express][Express.js]][Express-url]
[![Node][Node.js]][Node-url]
[![MongoDB][MongoDB.com]][MongoDB-url]




<p align="right">(<a href="#top">Back To Top</a>)</p>


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
  <img alt="carbon" src="https://user-images.githubusercontent.com/90569344/180618029-214fe42a-19ea-4bc8-a446-3bb989e6d091.png" height="700" width="700"/>
  
  <p align="right">(<a href="#top">Back To Top</a>)</p>

  
  ## Installation
  
  #### Clone the repo
  
   ```sh
   git clone https://github.com/Peach97/TakeoverPods.git
   ```
   
  <br />
   
  ### Setting Up Node Server
  
  <br />
  
  #### Install NPM Packages
  
  ```sh
  npm install
  ````
  
  This will install all necessary dependencies associated with the project
  
  #### Enter Client Credentials
  
  ```js
  var client_id = 'CLIENT_ID';
  var client_secret = 'CLIENT_SECRET'
  ```
  
  Client credentials obtained using the spotify developer console <a href="https://developer.spotify.com/dashboard/login">here</a>. Create a free Spotify developer account in order to verify your client.
  
  #### Start Application
  
  ```sh
  npm start
  ```
  
  This will set up the development server at `http://localhost:3000/`
  
  <p align="right">(<a href="#top">Back To Top</a>)</p>
  
  ## Usage
  
  The available <b>features</b> are dependent upon whether the user has completed the <a href="https://developer.spotify.com/documentation/general/guides/authorization/code-flow/">authorization code flow</a> and has a Spotify Premium Account.
  
  ### Features with client credentials flow free token
  
  <br />
  <b>
  <ul>
  <li>Episode Cards</li>
  <li>Episode Archive</li>
  <li>Blog Articles</li>
  <li>Blog Article Creation and Editing</li>
  </ul>
  </b>
  
  ### Features with authorization code flow premium token
  
  <br />
  <b>
  <ul>
  <li>All free token features +</li>
  <li>Media Player</li>
  <li>Playback controls</li>
  <li>Saving/Deleting Spotify Playlist Items</li>
  </ul>
  </b>
  
  ## Blog
  
  ### Blogger Authentication
  
 <br />
  
  The authentication process for bloggers is done using <a href="https://firebase.google.com/">Firebase</a>. In order to add to the blog, bloggers will need a verified Firebase <b>username</b> and <b>password</b>.
  <br />
  
![authentication-demo](https://user-images.githubusercontent.com/90569344/180630989-5813778d-0e7d-46aa-b3e7-658f58926412.gif)

<br />
Once the login credentials have been confirmed, bloggers are able to:

<br />

<ul>
<li>Create Blog Posts</li>
<li>Update Existing Blog Posts</li>
<li>Delete Blog Posts following confirmation dialog</li>
</ul>

<br />
  <p align="right">(<a href="#top">Back To Top</a>)</p>


### Database

All posts are stored in MongoDB

#### Mongoose

<a href="https://mongoosejs.com/">MongooseJS</a> is used for object-modeling. The created schema is as follows:
<br />
<img src="https://user-images.githubusercontent.com/90569344/180631479-eaf7ab63-72df-47ac-893c-a3157969bd44.png" height="500" width="700" alt="carbon"/>


## Spotify Web Playback (Media Player)
  <p align="right">(<a href="#top">Back To Top</a>)</p>
  
### Why this is awesome

The Takeover Pods Web App uses <b>two</b> forms of user authorization in order to show public Spotify data on app render

## Data

<ul>
    <li>Playlist Data</li>
    <li>Episode Description</li>
    <li>Date posted</li>
    <li>Updates made by <b>contributors</b> to the public playlist</li>
</ul>

While also allowing for user playback once a <b>premium token</b> is retrieved.

<u>
    <b>This means there is no need for a Spotify Login prior to accessing the Landing Page</b>
</u>
<br/>
<br />

  
![player-demo](https://user-images.githubusercontent.com/90569344/180632202-6152005e-123c-411d-abae-956c66fb5cd6.gif)



### Spotify Web Wrapper

## Contact
  ### Cameron Petrie 
  
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

