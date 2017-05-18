`React state diagram
{
  currentUser: {
    id:1,
    username: "Alex",
    profile_pic: http://imgur.com/face-pic.jpg,
    following: [2, 3, 4]
  },
  users: {
    1: {
      id: 1,
      username: "Alex",
      profile_pic: http://imgur.com/face-pic.jpg
    },
    2: {
      id: 2
      username: "Charles",
      profile_pic: http://imgur.com/biceps.jpg
    }
  },
  errors: {
    sessionErrors: [],
    postErrors: ["Must include image"]
  },
  apiKeys: {
    cloudinary_options: {secret: XXXXXX, other_secret: XXXXXX}
  }
  posts: {

    1: {
      id: 1,
      post_type: "text",
      title: "I can't believe it!",
      body: "Butter instead of oil in brownies, who knew?",
      link_url: "http://fakebrownierecipe.com",
      user_id: 3

    },
    2: {
      id: 2,
      post_type: "image",
      media_link: "http://www.imgur.com/stand-in.png",
      body: "Hilarious!!!",
      user_id: 2,
      likes: [1]
    },
    3: {
      id: 3,
      post_type: "link",
      link_url: "http://www.npr.org/story/how-to-pair-a-wine-to-your-prius",
      body: "Seafoam should clearly be paired with a Chablis. Otherwise insightful and accurate.",
      user_id: 1,
      likes: [1]
    },

    4: {
      id: 4,
      post_type: "video",
      body: "must-see!",
      media_link: "http://www.youtube.com/rickroll",
      user_id: 2,
      likes: [1]
    },
    5: {
      id: 5
      post_type: "quote",
      title: "someone for whom things are going to go wrong, probably.",
      body: "Nothing could possibly go wrong.",
      user_id: 5,
      likes: [1]
    },


    6: {
      id: 6
      post_type: "audio",
      title: "Track1"
      body: "It's been stuck in my head all day. Listen with care",
      media_link: "http://www.soundcloud.com/something-cool.mp3",
      user_id: 3,
      likes: [1]
    },
  }
}
`
