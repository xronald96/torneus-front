import { CreateMatchDto, FilterMatchDto, UpdateMatchDto } from '../../types/Match.dto';

export const getMatches = async (filterMatchDto?: FilterMatchDto) => {
	const headers = {
		'content-type': 'application/json',
	};
	const query = `
    query{
        getMatchs(filterMatchDto:{
            groupId: "${filterMatchDto?.groupId}"
        }){
            _id
          groupId
          teams {
              name, points
          }
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
	return await (await fetch('http://localhost:3002/graphql', options)).json();
};

export const createMatch = async (createMatchDto: CreateMatchDto) => {
	const { tournamentId, userId, teams, groupId } = createMatchDto;
	const headers = {
		'content-type': 'application/json',
	};
	const requestBody = {
		query: `
        mutation($groupId: String!, $teams: [Team!]!, $tournamentId: String!, $userId: String!){
            createMatch(createMatchtDto:{
              groupId: $groupId,
              tournamentId: $tournamentId,
              userId:$userId,
              teams: $teams
            }){
              teams {
                  name, points
              },
              state
            }
          }
          `,
		variables: {
			tournamentId,
			userId,
			teams,
			groupId,
		},
	};
	const options = {
		method: 'POST',
		headers,
		body: JSON.stringify(requestBody),
	};
	return await (await fetch('http://localhost:3002/graphql', options)).json();
};

export const updateMatch = async (updateMatchDto: UpdateMatchDto) => {
	const { _id, teams } = updateMatchDto;
	const headers = {
		'content-type': 'application/json',
	};
	const requestBody = {
		query: `
       
mutation($_id: String!, $teams: [Team!]!){
	updateMatch(updateMatchDto:{
	  _id: $_id,
	  teams: $teams
	}){
	  teams {
		  name, points
	  },
	  state
	}
  }
  
          `,
		variables: {
			_id,
			teams,
		},
	};
	const options = {
		method: 'POST',
		headers,
		body: JSON.stringify(requestBody),
	};
	return await (await fetch('http://localhost:3002/graphql', options)).json();
};
