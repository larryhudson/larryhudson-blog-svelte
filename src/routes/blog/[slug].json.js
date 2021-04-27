import {api} from './_api'

export const get = async (request) => {
    const GRAPHQL_URL = 'http://54.252.222.218/graphql'
	// request.context.userid comes from src/hooks.js
	const response = await api(`query postBySlug {
        post(id: "${request.params.slug}", idType: SLUG) {
          title
          content
        }
      }`)

	if (response.status === 404) {
		// user hasn't created a todo list.
		// start with an empty array
		return { body: [] };
	}

	return response;
};