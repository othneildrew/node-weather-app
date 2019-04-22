<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]]()
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Node Weather App</h3>

  <p align="center">
    A command line weather retrieval app using NodeJS. Search by city and zip code.
    <br />
    <a href="https://github.com/othneildrew/node-weather-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/node-weather-app/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://www.othneildrew.com)

This project is intended to practice and demonstrate the use of Node.js from the command line. It makes use of the https request to get the current weather data from [Open Weather Map](https://openweathermap.org/api).

### Built With

* JavaScript
* Node.js



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

To use this application you should have Node.js and NPM installed. To get the latest version run:
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Get a free API Key from [Open Weather Map](https://openweathermap.org/api)
2. Clone the repo
```sh
git clone https:://github.com/othneildrew/node-weather-app.git
```
3. Install NPM packages
```sh
npm install
```
4. Enter your API in `app.json`
```JS
{
  "key": "OPEN_WEATHER_MAP_API_KEY_HERE";
}
```



<!-- USAGE EXAMPLES -->
## Usage

Searching by zip code:
```sh
node app.js 77433
```

Searching by city, be sure to wrap city in single or double quotes for multi-word cities:
```sh
node app.js 'New Orleans'
```

Searching multiple locations and combining queries
```sh
node app.js 77433 Houston Waukesha 99507 'New York'
```



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Othneil Drew - [LinkedIn](https://linkedin.com/in/othneildrew) - codeguydrew@gmail.com

Project Link: [https://github.com/othneildrew/node-weather-app](https://github.com/othneildrew/node-weather-app





<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=flat-square
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://github.com/othneildrew/node-weather-app/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: ./node-weather-app.png
