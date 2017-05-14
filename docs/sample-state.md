React state diagram
{
  currentUser: {
    id:1,
    username: "Alex",
    following: [2, 3, 9]
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
          video: [1]
        }
      }
    },
    image: {
      1: {
        id: 1,
        image: http://www.imgur.com/stand-in.png,
        description: "Hilarious!!!"
      }
    },
    video: {
      1: {
        id: 1,
        video: http://www.youtube.com/rickroll,
        description: "must-see!"
      }
    },
    quote: {
      1: {
        quote: "Nothing could possibly go wrong.",
        author: "someone for whom things are going to go wrong, probably."
      }
    },
    audio: {
      1: {
        audio: http://www.soundcloud.com/something-cool.mp3,
        description: "It's been stuck in my head all day. Listen with care"
      }
    },
    link: {
      1: {
        link: http://www.npr.org/story/how-to-pair-a-wine-to-your-prius,
        description: "Seafoam should clearly be paired with a Chablis. Otherwise insightful and accurate."
      }
    }

  }
}
