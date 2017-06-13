# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do


User.destroy_all
Follow.destroy_all
Post.destroy_all
Like.destroy_all

demo = User.create({username: 'Demo', password: 'password'})
me = User.create({username: 'Alex', password: 'password'})

udb = User.create({username: "UnicycleDreamboat", password:'password'})
cap = User.create({username: "CuteAnimals!", password:'password'})
aas = User.create({username: "a/A student", password:'password'})
nv = User.create({username: "Steve Carlsburg", password:'password'})
dr = User.create({username: "DragRacer", password:'password'})
lcf = User.create ({username: "LovecraftFan", password: "password"})
ev = User.create ({username: "Exalted Void", password_digest: "$2a$10$BjZZo5rhwTkik4M8seppEev/ZYVLywE7sDtlGYNmNFOo/wkAewX/S"})
hope = User.create ({username: "Hope", password_digest: "$2a$10$WWyM58ZpodFKis1Yx8vDbe3o2SdcJYjpuhO6Wmbg/nW./1R8WvlI6"})

f1 = Follow.create({follower_id: demo.id, followee_id: me.id})
f2 = Follow.create({follower_id: demo.id, followee_id: nv.id})
f3 = Follow.create({follower_id: demo.id, followee_id: lcf.id})
f4 = Follow.create({follower_id: demo.id, followee_id: dr.id})

i = 1

while i < 10 do
  User.create({username: "LoremBot#{i}", password: 'password'})
  i += 1
end



p18 = Post.create ({
  post_type: "image",
  media_type: "image",
  link_url: "https://i.imgur.com/qxU3NU4.gif",
  user_id: dr.id
  })

p17 = Post.create ({
  post_type: "audio",
  media_type: "audio",
  media_link: "http://hwcdn.libsyn.com/p/9/5/0/950f3e431a44a995/720-20History20Week.mp3?c_id=15202746&destination_id=149717&expiration=1495469026&hwt=8d6061eb9f0d45f6c5016a63ffbf2906",
  title: "WTNV: History week",
  body: "Love this stuff, you can find more at https://www.welcometonightvale.com/ !",
  user_id: nv.id
  })

p16 = Post.create ({
  post_type: "text",
  title: "Lachs and bagels",
  body: "IPhone seitan cold-pressed semiotics williamsburg DIY drinking
  vinegar locavore. Readymade meh tattooed food truck, chicharrones pug
  fashion axe next level godard quinoa narwhal man bun raclette banjo.
  Roof party kale chips semiotics, DIY pinterest street art venmo neutra
  man bun four dollar toast hot chicken. Vice marfa pinterest, pork
  belly butcher humblebrag four dollar toast occupy bitters sustainable
  flexitarian. Austin fingerstache pug cliche la croix asymmetrical
  lumbersexual portland, microdosing blue bottle small batch. Keffiyeh
  flannel pour-over, wayfarers cold-pressed photo booth forage.
  Crucifix kombucha lumbersexual synth gastropub.",
  user_id: udb.id
  })

p15= Post.create ({
  post_type: "video",
  media_type: "video",
  link_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  user_id: cap.id
  })

p1 = Post.create({
  post_type: "text",
  title: "Delicious!",
  body: "Butter instead of oil in brownies, who knew?",
  link_url: "https://allrecipes.com/recipe/10549/best-brownies/",
  user_id: udb.id
  })

  p19 = Post.create({
    post_type:"quote",
    media_type: "none",
    body: "Weird at last, weird at last. God almighty, weird at last.",
    title: "Welcome to NightVale",
    user_id: hope.id
    })

p2 = Post.create({
  post_type: "image",
  media_type: "image",
  media_link: "https://i.imgur.com/ZlbBeAe.gif",
  body: "Amazing escape!",
  user_id: cap.id
  })

  p3 = Post.create({
    post_type: "link",
    link_url: "https://www.npr.org/templates/story/story.php?storyId=35",
    body: "Best comedy you can find on npr. (It's a compliment I swear)",
    user_id: demo.id
  })



  p5= Post.create ({
    post_type: "quote",
    body: "Happy hour?",
    title: "Ranelle Reyes.",
    user_id: aas.id
    })
  p23 = Post.create ({
    post_type: "image",
    media_type: "image",
    media_link: "https://res.cloudinary.com/dadyuehpo/image/upload/v1495657367/highFive_tq3lv7.gif",
    user_id: hope.id
    })

  p6 = Post.create ({
    post_type: "audio",
    title: "The Woman From Italy (WTNV)",
    body: "Love this stuff, you can find more at https://www.welcometonightvale.com/ !",
    media_link: "http://secure-hwcdn.libsyn.com/p/5/b/3/5b35a29dbac9d612/3920-20The20Woman20from20Italy2028R29.mp3?c_id=13734447&expiration=1495254674&hwt=1f6dc8382503d3b8bcfd18d7da11ca64",
    user_id: nv.id
    })

  p7 = Post.create ({
    post_type: "image",
    body: "cute doggos",
    media_type: "image",
    link_url: "https://i.imgur.com/IsetA24.gif",
    user_id: me.id
    })

  p8 = Post.create ({
    post_type: "video",
    body: "Adorable!",
    link_url: "https://www.youtube.com/embed/iqH2ffyNJsk",
    user_id: cap.id
    })

  p9 = Post.create ({
    post_type: "text",
    title: "A video and a link!",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link_url: "https://memory-alpha.wikia.com/wiki/USS_Enterprise_(NCC-1701-D)",
    media_link: "https://www.youtube.com/embed/ZPoqNeR3_UA",
    media_type: "video",
    user_id: nv.id
    })

  p9 = Post.create ({
    post_type: "text",
    title: "Gives me life!",
    body: "Herp derpsum sherpus serp merp der ler berp derpus mer. Serp dee ter derperker derp, ner ler. Mer sherper dee le nerpy derpler terpus me. Herpy ner, derpus mer berp herp. Le berp derps herpy der herpsum! Pee derpsum ner sherp perp merpus. Serp sherp merp berps perper me berp. Herp derp dee ler. Derpus sherpus mer terpus. Nerpy sherper herp ner pee dee berps derpy le. Mer merpus, le dee herderder terp ler. Dee ner herpderpsmer derpy me. Herpem derperker pee tee ter merp. Sherp tee perp terp ner me, berp derperker. Sherp me herpsum le ner, terp derpus derpler. Ler herpler derpler herderder derps der herpem herpy nerpy derpy. Derp perp sherper derpus merp le mer pee. Pee derpler tee ner terpus derp, perper ler.

          Derpsum herp tee dee herpsum terp herpem. Der sherper le, nerpy merpus. Herpsum terp derperker perp mer berps sherp serp herpderpsmer der! Merp merpus berp ner! Derpy herp derp pee nerpy? Der herpem sherpus sherp sherper, dee ter. Serp herpsum dee sherpus terp nerpy herpy derpus derps. Sherper berp der, dee me serp herp! Tee herderder derperker herpler. Dee perper terpus herp. Der derp, tee le me perp. Terp herpsum der derps herpy. Mer nerpy pee berps. Terpus derps nerpy derpus derp herpy perper berp ner?",
    media_link: "https://68.media.tumblr.com/e3b305d5d03e00c14e2497075719014e/tumblr_o582kb4Ces1v41hiso1_400.gif",
    media_type: "image",
    link_url: "https://www.tumblr.com/search/drag%20race%20reaction%20gifs",
    user_id: dr.id
    })

  p10 = Post.create ({
    post_type: "audio",
    media_type: "audio",
    media_link: "http://hwcdn.libsyn.com/p/5/6/f/56f72a0761e63408/Bonus20Episode20320-20_The20Librarian_20Horoscopes.mp3?c_id=12976566&destination_id=149717&expiration=1495296479&hwt=48c963f4a4cf23fe99bd8ca361ad89f8",
    title: "WTNV: The Librarian- Horoscopes",
    body: "The stars were right for this",
    user_id: nv.id
    })

  p11 = Post.create ({
    post_type: "quote",
    body: "I am writing this under an appreciable mental strain, since by tonight I shall be no more. Penniless, and at the end of my supply of the drug which alone makes life endurable, I can bear the torture no longer; and shall cast myself from this garret window into the squalid street below.",
    title: "H.P. Lovecraft- 'Dagon'",
    user_id: lcf.id
    })

  p12 = Post.create ({
    post_type: "text",
    title: "Single Origin Twinkie",
    body: "Wolf narwhal godard, photo booth mustache aesthetic authentic. Williamsburg church-key helvetica ramps intelligentsia. Before they sold out asymmetrical fingerstache dreamcatcher, ugh sapiente laborum pop-up photo booth. Readymade keytar pork belly placeat, +1 kogi trust fund gastropub asymmetrical 90's lomo listicle assumenda yuccie. Craft beer trust fund gastropub in you probably haven't heard of them 90's. Shoreditch tattooed live-edge, tousled before they sold out laborum twee incididunt fugiat. Shabby chic chia officia blog enamel pin, kombucha ex.",
    user_id: udb.id
    })

  p13= Post.create ({
    post_type: "quote",
    body: "The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents. Cuz, like who has time to remember everything?",
    title: "Lovecraft? Like, probably?",
    user_id: lcf.id
    })
  p22 = Post.create ({
    post_type: "image",
    media_type: "image",
    media_link: "https://res.cloudinary.com/dadyuehpo/image/upload/v1495645531/Welcome_60cc6c_5297508_zjlcg5.png",
    user_id: hope.id
    })

  foxkitpic= Post.create ({
    post_type: "image",
    media_type: "image",
    link_url: "https://i.imgur.com/ra7x6.jpg",
    user_id: cap.id
    })

  p14 = Post.create ({
    post_type: "image",
    media_type: "image",
    media_link: "https://res.cloudinary.com/dadyuehpo/image/upload/v1495261287/1478814894790_lkjcwe.jpg",
    user_id: ev.id
    })
    Post.create ({
      post_type: "quote",
      title: "Welcome to NightVale",
      body: "Weird at last, weird at last. God almighty, weird at last.",
      link_url: "",
      media_link: "",
      user_id: nv.id,
      media_type: "none",
      original_auth_id: hope.id,
      rb_post_id: p19.id,
      comments: "Nightvalean:NEWLINE@#*$ My aesthetic in a nutshell."
      })

  Post.create({
    post_type: "image",
    media_type: "image",
    link_url: "https://i.imgur.com/sbEfnDF.jpg",
    user_id: cap.id
    })

  p20 = Post.create({
    post_type: "image",
    media_type: "image",
    link_url: "https://new4.fjcdn.com/pictures/Welcome_44aa06_5297508.png",
    body: "Welcome to Nightvale",
    user_id: hope.id
    })

  Post.create({
    post_type: "image",
    media_type: "image",
    link_url: "https://i.imgur.com/q5KffkK.jpg?1",
    user_id: cap.id
    })
  Post.create({
   post_type: "image",
   title: "",
   body: "",
   link_url: "https://i.imgur.com/ra7x6.jpg",
   media_link: "",
   user_id: me.id,
   media_type: "image",
   original_auth_id: cap.id,
   rb_post_id: foxkitpic.id,
   comments: "Alex:NEWLINE@#*$ Got a special place in my heart for fox kits... so cute!"
  })

    p20 = Post.create({
      post_type: "image",
      media_type: "image",
      link_url: "https://new4.fjcdn.com/pictures/Welcome_9a6b22_5297508.jpg",
      user_id: hope.id
      })

    Post.create({
       post_type: "quote",
       title: "Lovecraft? Like, probably?",
       body: "The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents. Cuz, like who has time to remember everything?",
       link_url: "",
       media_link: "",
       user_id: nv.id,
       media_type: "",
       original_auth_id: lcf.id,
       rb_post_id: p13.id,
       comments: "Nightvalean:NEWLINE@#*$ Part of me wants to read that in a Cecil voice."
      })
  p4= Post.create({
    post_type: "video",
    body: "Must-see! Those moves...",
    link_url: "https://www.youtube.com/embed/IOhu26-Yirw",
    user_id: me.id
    })

    Post.create ({
      user_id: hope.id,
      post_type: "video",
      body: "Adorable!",
      link_url: "https://www.youtube.com/embed/iqH2ffyNJsk",
      original_auth_id: cap.id,
      rb_post_id: p8.id
      })

  p21 = Post.create({
    post_type: "image",
    media_type: "image",
    link_url: "https://thesavvyreader2014.files.wordpress.com/2015/10/screen-shot-2015-10-30-at-1-25-22-pm.png?w=748",
    user_id: hope.id
    })

    Post.create ({
      user_id: me.id,
      post_type: "audio",
      media_type: "audio",
      media_link: "http://hwcdn.libsyn.com/p/9/5/0/950f3e431a44a995/720-20History20Week.mp3?c_id=15202746&destination_id=149717&expiration=1495469026&hwt=8d6061eb9f0d45f6c5016a63ffbf2906",
      title: "WTNV: History week",
      body: "Love this stuff, you can find more at https://www.welcometonightvale.com/ !",
      original_auth_id: nv.id,
      rb_post_id: p17.id,
      })

  post_ary = Post.all

  User.all.each do |user|
    user.liked_posts = post_ary.sample(5)
  end
end
