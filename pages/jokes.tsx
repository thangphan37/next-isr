type JokesType = {
  categories: Array<string>
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}

function Jokes({jokes}: {jokes: JokesType}) {
  return (
    <div>
      <p>{jokes.value}</p>
      <small>{jokes.created_at}</small>
    </div>
  )
}

export default Jokes

export async function getStaticProps() {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  const jokes = await res.json()

  return {
    props: {
      jokes,
    },
    revalidate: 20,
  }
}
