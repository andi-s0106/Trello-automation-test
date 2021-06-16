#!/usr/bin/node

//Creating and sending a document in Pandadocs
const api_key = {
	headers: {'Authorization': 'API-Key 141e9c21ff9ef73c8102f18d39906ce2eec47f97'}
};
const axios = require('axios');

axios
	.post("https://api.pandadoc.com/public/v1/documents", {
		"name": "Sample Document from PDF with Field Tags",
		"url": "https://drive.google.com/uc?export=download&id=1BEZa7zCOXXiZpvcSJ8phRv01A8QCv_-_GAIoH2KkmMU",
		"tags": [
		   "tag_1",
		],
		"recipients": [
			{
				"email": "1908@holbertonschool.com",
				"first_name": "Andres",
				"last_name": "Sepulveda",
				"role": "user"
			}
		],
		"metadata": {
			"salesforce.opportunity_id": "123456",
			"my_favorite_pet": "Panda"
		},
		"parse_form_fields": false
	}, api_key)
	.then(res => {
		console.log(`statusCode: ${res.statusCode}`)
		console.log(res)
	  })
	  .catch(error => {
		console.error(error)
	  })
