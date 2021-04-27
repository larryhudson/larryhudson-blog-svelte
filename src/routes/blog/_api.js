const GRAPHQL_URL = 'http://54.252.222.218/graphql'

export async function api(query) {

	const res = await fetch(GRAPHQL_URL, {
		headers: {
			'content-type': 'application/json'
		},
        method: 'post',
		body: JSON.stringify(
            {
                'query': query
            }
        )
	});

	// if the request came from a <form> submission, the browser's default
	// behaviour is to show the URL corresponding to the form's "action"
	// attribute. in those cases, we want to redirect them back to the
	// /todos page, rather than showing the response

	return {
		status: res.status,
		body: await res.json()
	};
}
