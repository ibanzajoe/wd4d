module.exports = {
  port: process.env.PORT || 3000,
  mongodb: process.env.MONGODB || 'mongodb://localhost:27017/hackathon',
  redis: process.env.REDIS || 'redis://localhost:6379',
  secret: 'asdfasdfzcvzxcv',

  social:{
    facebook:{
      client_id: process.env.FACEBOOK_CLIENT_ID || '507223992817678',
      client_secret: process.env.FACEBOOK_CLIENT_ID || '029377e578b512892b3fc8f295474b84' 
    },
    twitter:{
      client_id: process.env.TWITTER_CLIENT_ID || 'Jw6gdI0TGsuFzGq9ClIoqWuHu',
      client_secret: process.env.TWITTER_CLIENT_SECRET || 'rQnElaPgiUUixe0viJ0dbd1M70RpO2a7P2R07pVEk4MPbxBxK7'
    },
    instagram:{
      client_id: process.env.INSTAGRAM_CLIENT_ID || 'b57a31bedd2f47449456558a53d127e3',
      client_secret: process.env.INSTAGRAM_CLIENT_SECRET || 'ee3b706754584de19b31ca95c670caec'
    },
    github:{
      client_id: process.env.GITHUB_CLIENT_ID || '5ad4d0cb91ff2b92cfe6',
      client_secret: process.env.GITHUB_CLIENT_SECRET || 'afc05eda09ad695793f32d5ecb9c5a369a6333af'
    }
  }
}