puts "Seeding the stuff..."

User.destroy_all 
Genre.destroy_all 
GenreLike.destroy_all
Match.destroy_all

# User.create(username: "test", password: "123", email: "", image_url: "https://i.imgur.com/1ZQ3Z0C.png")
# User.create(username: "test2", password: "123", email: "", image_url: "https://i.imgur.com/1ZQ3Z0C.png")
# User.create(username: "test3", password: "123", email: "", image_url: "https://i.imgur.com/1ZQ3Z0C.png")
# User.create(username: "test4", password: "123", email: "", image_url: "https://i.imgur.com/1ZQ3Z0C.png")

puts "Seeded #{User.count} users"

Genre.create(genre: "Action", image: "https://i.pinimg.com/originals/b5/bc/0c/b5bc0c1d9640aa05275c0246690c495c.png", blurb: "Stunts, Chases, and Adrenaline")
Genre.create(genre: "Classic", image: "https://i.icanvas.com/CKG213?d=2&sh=v&p=1&bg=g&t=1663890177", blurb: "Timeless Treasures")
Genre.create(genre: "Comedy", image: "https://i.icanvas.com/CKG302?d=3&sh=v&s=s&p=3&bg=w&t=1660623584", blurb: "Laughs, Gags, and More")
Genre.create(genre: "Documentary", image: "https://i.pinimg.com/originals/40/56/c9/4056c9448843cacfe496693c4c1b6720.png", blurb: "Insight, Outrage, and Reality")
Genre.create(genre: "Drama", image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/7227f214600223.56286b04bda3e.jpg", blurb: "Tears, Tension, and Catharsis")
Genre.create(genre: "Horror", image: "https://i.pinimg.com/originals/61/0a/90/610a90004d3dd7a9d079777f49c12337.jpg", blurb: "Slashers, Thrashers, and Blood Splatters Galore")
Genre.create(genre: "International", image: "https://i.pinimg.com/originals/9d/44/36/9d4436e7e6b693bd8786df8d3b5b1b80.jpg", blurb: "Don't Be Afraid of Subtitles")
Genre.create(genre: "Romance", image: "https://images.fineartamerica.com/images-medium-large-5/no307-my-pretty-woman-minimal-movie-poster-chungkong-art.jpg", blurb: "Love, Lust, and Longing")
Genre.create(genre: "Science Fiction", image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c0afbfd-9bf1-44f7-a3b5-f5a33e7d32de/d6l1x9u-f877e6a6-b624-4f71-8557-a7e9f8c9e15a.png/v1/fill/w_600,h_856,strp/alien__1979____minimalist_poster_by_stormy94_d6l1x9u-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzljMGFmYmZkLTliZjEtNDRmNy1hM2I1LWY1YTMzZTdkMzJkZVwvZDZsMXg5dS1mODc3ZTZhNi1iNjI0LTRmNzEtODU1Ny1hN2U5ZjhjOWUxNWEucG5nIiwiaGVpZ2h0IjoiPD04NTYiLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzljMGFmYmZkLTliZjEtNDRmNy1hM2I1LWY1YTMzZTdkMzJkZVwvc3Rvcm15OTQtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.beiTZqxk9L5P0CfnEisENtSoopDB9DX3E1VV0M1LqnI", blurb: "Other Worlds, Imagination, and More")
Genre.create(genre: "Thriller", image: "https://images.fineartamerica.com/images-medium-large-5/no233-my-seven-minimal-movie-poster-chungkong-art.jpg", blurb: "Suspense, Crime, and Chills")

puts "Seeded #{Genre.count} genres"

GenreLike.create(user_id: 1, genre_id: 1)
GenreLike.create(user_id: 1, genre_id: 2)
GenreLike.create(user_id: 2, genre_id: 3)
GenreLike.create(user_id: 2, genre_id: 4)
GenreLike.create(user_id: 2, genre_id: 5)
GenreLike.create(user_id: 3, genre_id: 6)
GenreLike.create(user_id: 3, genre_id: 7)
GenreLike.create(user_id: 4, genre_id: 8)
GenreLike.create(user_id: 4, genre_id: 9)


Match.create(user_id: 1, liked_user_id: 4)
Match.create(user_id: 2, liked_user_id: 3)
Match.create(user_id: 3, liked_user_id: 2)
Match.create(user_id: 4, liked_user_id: 1)



puts "Done seeding the stuff!"
