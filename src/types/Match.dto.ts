export type Team = {
	name: string;

	points: string;
};

export type CreateMatchDto = {
	tournamentId: string;

	groupId: string;

	teams: Team[];

	userId: string;
};

export type FilterMatchDto = {
	groupId?: string;
};

export type UpdateMatchDto = {
	_id: string;
	teams: Team[];
};
