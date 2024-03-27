// (async () => {
//   const response = await fetch('https://api.covidtracking.com/v1/states/info.json')
//   const result = await response.json()
//   console.log(result)

// })()

(async () => {
  const response = await fetch('https://randomuser.me/api/')
  const resultUsers = await response.json()
  console.log(resultUsers)

})()