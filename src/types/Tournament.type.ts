export type CreateTournamentDto = {
	name: string;
	teams: string[];
	date: string;
	image?: string;
	userId: string;
};
