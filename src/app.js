import React from 'react'

let tag

const App = ({gists}) => <ul>
  {gists.map((gist) =>
    <li key={gist.id}>{gist.description}</li>
  )}
</ul>

export default App