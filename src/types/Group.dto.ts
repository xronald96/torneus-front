export type CreateGroupDto = {
	name: string;
	tournamentId: string;
	userId: string;
	teams: string[];
};

export type FilterGroupDto = {
	name?: string;
	tournamentId?: string;
	userId?: string;
};
