# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create({username: 'Demo', password: 'password'})
me = User.create({username: 'Alex', password: 'password'})

l1 = User.create({username: "Lorem1", password:'password'})
l2 = User.create({username: "Lorem2", password:'password'})
l3 = User.create({username: "Lorem3", password:'password'})
l4 = User.create({username: "Lorem4", password:'password'})
l5 = User.create({username: "Lorem5", password:'password'})

Post.destroy_all

p1 = Post.create({
  post_type: "text",
  title: "I can't believe it!",
  body: "Butter instead of oil in brownies, who knew?",
  link_url: "http://fakebrownierecipe.com",
  user_id: l1.id
  })

p2 = Post.create({
  post_type: "image",
  media_type: "image",
  media_link: "http://www.imgur.com/stand-in.png",
  body: "Hilarious!!!",
  user_id: l2.id
  })

  p3 = Post.create({
    post_type: "link",
    link_url: "http://www.npr.org/story/how-to-pair-a-wine-to-your-prius",
    body: "Seafoam should clearly be paired with a Chablis. Otherwise insightful and accurate.",
    user_id: demo.id
  })

  p4= Post.create({
    post_type: "video",
    body: "must-see!",
    link_url: "http://www.youtube.com/rickroll",
    user_id: me.id
    })

  p5= Post.create ({
    post_type: "quote",
    title: "someone for whom things are going to go wrong, probably.",
    body: "Nothing could possibly go wrong.",
    user_id: l3.id
    })

  p6 = Post.create ({
    post_type: "audio",
    title: "Track1",
    body: "It's been stuck in my head all day. Listen with care",
    media_link: "http://www.soundcloud.com/something-cool.mp3",
    user_id: l4.id
    })
