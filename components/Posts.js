import Post from '../components/Post'

const posts = [
  {
    id: '123',
    username: 'nicholas',
    usrImg: 'https://links.wheelit.com.au/e5c',
    img: 'https://links.wheelit.com.au/e5c',
    caption: 'Subscribe',
  },
  {
    id: '124',
    username: 'nichsssolas',
    usrImg: 'https://links.wheelit.com.au/e5c',
    img: 'https://links.wheelit.com.au/e5c',
    caption: 'Subscribe',
  },
  {
    id: '125',
    username: 'cholas',
    usrImg: 'https://links.wheelit.com.au/e5c',
    img: 'https://links.wheelit.com.au/e5c',
    caption: 'Subscribe',
  },

]


function Posts() {
  return (
    <div>

      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          usrImg={post.usrImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts