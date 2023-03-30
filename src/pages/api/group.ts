import { CreateGroupDto, FilterGroupDto } from '../../types/Group.dto';

export const getGroups = async (filterGroupDto?: FilterGroupDto) => {
	const headers = {
		'content-type': 'application/json',
	};

	const query = `
        query{
            getGroups(filterGroupDto:{
                 ${
						filterGroupDto?.tournamentId
							? `tournamentId:"${filterGroupDto?.tournamentId}"`
							: ''
					}
            }){
                group{
					name
					_id
					teams
					tournamentId
				  }
				  matches{
					teams{
					  name
					  points
					}
					_id
				  }
				  resultGroup{
					points
                    name
                    gf
                    ge
                    gd
				  }
				}
            }
      `;
	const requestBody = {
		query,
		variables: filterGroupDto && filterGroupDto,
	};
	const options = {
		method: 'POST',
		headers,
		body: JSON.stringify(requestBody),
	};
	return await (await fetch('http://localhost:3002/graphql', options)).json();
};

export const createGroups = async (createGroupDto: CreateGroupDto) => {
	const { name, tournamentId, userId, teams } = createGroupDto;
	const headers = {
		'content-type': 'application/json',
	};
	const requestBody = {
		query: `
        mutation($name: String!, $teams: [String!]!, $tournamentId: String!, $userId: String!){
          createGroup(createGroupDto:{
            name: $name,
            tournamentId: $tournamentId,
            userId:$userId,
            teams: $teams
          }){
            name,
            teams,
            _id
          }
        }`,
		variables: {
			name,
			tournamentId,
			userId,
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
