import { CreateTournamentDto } from '../../types/Tournament.type';
const API = 'https://torneus-back.onrender.com/graphql';
export const getTournaments = async () => {
	const headers = {
		'content-type': 'application/json',
	};
	const query = `
    query{
        getTournaments{
            _id
          name
          teams
          teamsAvailables
          date
        }
      }`;
	const requestBody = {
		query,
	};
	const options = {
		method: 'POST',
		headers,
		body: JSON.stringify(requestBody),
	};
	return await (await fetch(API, options)).json();
};

export const createTournament = async (createTournamentDto: CreateTournamentDto) => {
	const { name, date, image, userId, teams } = createTournamentDto;
	const headers = {
		'content-type': 'application/json',
	};
	const requestBody = {
		query: `mutation($name: String!, $date: String!, $image: String!, $userId: String!, $teams: [String!]!){
            createTournament(createTournamentDto:{
              name: $name,
              date: $date,
              image: $image,
              userId:$userId,
              teams: $teams
            }){
              name,
              teams,
              teamsAvailables
            }
          }`,
		variables: {
			name,
			date,
			image,
			userId,
			teams,
		},
	};
	const options = {
		method: 'POST',
		headers,
		body: JSON.stringify(requestBody),
	};
	return await (await fetch(API, options)).json();
};
