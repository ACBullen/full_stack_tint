`React state diagram
{
  currentUser: {
    id:1,
    username: "Alex",
    profile_pic: http://imgur.com/face-pic.jpg
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
    signUp: {errors: []},
    logIn: {errors: []},
    postErrors: {errors: ["Must include image"]}
  },
  posts: {
    text: {
      1: {
        id: 1,
        title: "I can't believe it!",
        body: "Butter instead of oil in brownies, who knew?",
        media: {
          image: [1],
          video: [1],
          likes: [1]
        }
      }
    },
    image: {
      1: {
        id: 1,
        image: http://www.imgur.com/stand-in.png,
        description: "Hilarious!!!",
        likes: [1]
      }
    },
    video: {
      1: {
        id: 1,
        video: http://www.youtube.com/rickroll,
        description: "must-see!",
        likes: [1]
      }
    },
    quote: {
      1: {
        quote: "Nothing could possibly go wrong.",
        author: "someone for whom things are going to go wrong, probably.",
        likes: [1]
      }
    },
    audio: {
      1: {
        audio: http://www.soundcloud.com/something-cool.mp3,
        title: "Track1"
        description: "It's been stuck in my head all day. Listen with care",
        likes: [1]
      }
    },
    link: {
      1: {
        link: http://www.npr.org/story/how-to-pair-a-wine-to-your-prius,
        description: "Seafoam should clearly be paired with a Chablis. Otherwise insightful and accurate.",
        likes: [1]
      }
    }

  }
}
`
