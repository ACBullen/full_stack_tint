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
  title: "Delicious!",
  body: "Butter instead of oil in brownies, who knew?",
  link_url: "http://allrecipes.com/recipe/10549/best-brownies/",
  user_id: l1.id
  })

p2 = Post.create({
  post_type: "image",
  media_type: "image",
  media_link: "http://i.imgur.com/ZlbBeAe.gif",
  body: "Amazing escape!",
  user_id: l2.id
  })

  p3 = Post.create({
    post_type: "link",
    link_url: "http://www.npr.org/templates/story/story.php?storyId=35",
    body: "Best comedy you can find on npr. (It's a compliment I swear)",
    user_id: demo.id
  })

  p4= Post.create({
    post_type: "video",
    body: "Must-see! Those moves...",
    link_url: "https://www.youtube.com/embed/IOhu26-Yirw",
    user_id: me.id
    })

  p5= Post.create ({
    post_type: "quote",
    title: "Happy hour?",
    body: "Ranelle Reyes.",
    user_id: l3.id
    })

  p6 = Post.create ({
    post_type: "audio",
    title: "The Woman From Italy (WTNV)",
    body: "Love this stuff, you can find more at http://www.welcometonightvale.com/ !",
    media_link: "https://secure-hwcdn.libsyn.com/p/5/b/3/5b35a29dbac9d612/3920-20The20Woman20from20Italy2028R29.mp3?c_id=13734447&expiration=1495254674&hwt=1f6dc8382503d3b8bcfd18d7da11ca64",
    user_id: l4.id
    })

    p7 = Post.create ({
      post_type: "image",
      body: "cute doggos",
      media_type: "image",
      link_url: "http://i.imgur.com/IsetA24.gif",
      user_id: me.id
      })
