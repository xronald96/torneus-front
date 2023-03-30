import { CredentialsDto } from "../../types/Auth.type";

export const login = async (crendentials: CredentialsDto) => {
	const { email, password } = crendentials;
	const headers = {
		'content-type': 'application/json',
	};
	const requestBody = {
		query: `mutation($password: String!, $email: String!){
            singIn(authCredentialsDto:{
              password: $password,
              email: $email,
            }){
              token,
              user {
                  name
              }
            }
          }`,
		variables: {
			password,
			email,
		},
	};
	const options = {
		method: 'POST',
		headers,
		body: JSON.stringify(requestBody),
	};
	return await (await fetch('http://localhost:3002/graphql', options)).json();
};
