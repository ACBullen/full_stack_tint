# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170526175402) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "follows", force: :cascade do |t|
    t.integer  "follower_id", null: false
    t.integer  "followee_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "likes", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "post_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "post_id"], name: "index_likes_on_user_id_and_post_id", unique: true, using: :btree
  end

  create_table "posts", force: :cascade do |t|
    t.string   "post_type",        null: false
    t.string   "title"
    t.text     "body"
    t.string   "link_url"
    t.string   "media_link"
    t.integer  "user_id",          null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.string   "media_type"
    t.integer  "original_auth_id"
    t.integer  "rb_post_id"
    t.text     "comments"
    t.index ["original_auth_id"], name: "index_posts_on_original_auth_id", using: :btree
    t.index ["rb_post_id"], name: "index_posts_on_rb_post_id", using: :btree
    t.index ["user_id"], name: "index_posts_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                        null: false
    t.string   "password_digest",                                                                                                 null: false
    t.string   "profile_pic",     default: "https://res.cloudinary.com/dadyuehpo/image/upload/v1495820397/letter-t37_mozgvd.jpg", null: false
    t.string   "session_token",                                                                                                   null: false
    t.datetime "created_at",                                                                                                      null: false
    t.datetime "updated_at",                                                                                                      null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
