
export const apiKey = `AIzaSyCvwMc63qDUQ6sZBS1c5RT0YCiv-uhgslM`
export const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=32&regionCode=IN&key=${apiKey}`

export const GOOGLE_AC_URL = `https://clients1.google.com/complete/search`;
export const YOUTUBE_SEARCH_APIKEY="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const categoryList = [
    {
      id: 1,
      name: "Movies",
    },
    {
      id: 2,
      name: "Bollywood",
    },
    {
      id: 3,
      name: "Sports",
    },
    
    {
      id: 4,
      name: "Football",
    },
    {
      id: 5,
      name: "Cricket",
    },
    {
      id: 6,
      name: "Podcast",
    },
    {
      id: 7,
      name: "T-Series",
    },
    {
      id: 8,
      name: "Web-Development",
    },
    {
      id: 9,
      name: "Comedy",
    },
    {
      id: 10,
      name: "Computer Science",
    }
   
  ];



  export const commentsData = [
    {
      name: "pratiksha bhosle",
      text: "Just loved your video. Thank you so much Akshay saini sir.",
      replies: [],
    },
    {
      name: "kanika Kumar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates mollitia nobis, animi natus iusto, nulla est inventore fugit totam corporis illum delectus aliquid eaque deleniti vel, similique aperiam distinctio deserunt.",
      replies: [],
    },
    {
      name: "Akshay Saini",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates mollitia nobis, animi natus iusto, nulla est inventore fugit totam corporis illum delectus aliquid eaque deleniti vel, similique aperiam distinctio deserunt.",
      replies: [
        {
          name: "Shivani Kangralkar",
          text: "I love coding like nowadays I’m feeling like coding is flowing in my veins and literally I can do coding or learn coding a whole day without taking breaks !!! And this man keeps mi motivated every single time I watch him .",
          replies: [
            {
                name: 'geeta patil',
                text: 'Nice content',
                replies:[
                    {
                        name: 'gopi kale',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates mollitia nobis, animi natus iusto, nulla est inventore fugit totam corporis illum delectus aliquid eaque deleniti vel, similique aperiam distinctio deserunt.',
                        replies:[],
                    },
                    {
                        name: 'Neha Kumari',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates mollitia nobis, animi natus iusto, nulla est inventore fugit totam corporis illum delectus aliquid eaque deleniti vel, similique aperiam distinctio deserunt.',
                        replies:[],
                    }
                ],
            }
          ],
        },
      ],
    },
  ];
