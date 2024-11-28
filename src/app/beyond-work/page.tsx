import Image from "next/image"
import axios from "axios"

const axios = require('axios');

const BeyondWork = () => {
	const username = "Regnix";
  const apiUrl = `https://lichess.org/api/user/${username}`;

	axios.get(apiUrl)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  return (
		<div>
			<a href="https://data.typeracer.com/pit/profile?user=hube04&ref=badge" target="_top">
				<Image src="https://data.typeracer.com/misc/badge?user=hube04" width={100} height={100} style={{ border: 0 }} alt="TypeRacer.com scorecard for user hube04" />
			</a>
		</div>
  )
}

export default BeyondWork