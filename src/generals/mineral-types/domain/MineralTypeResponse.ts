export default interface MineralTypeResponse {
	id: number;
	name: string;
	description?: string;
	slug: string;
	registrationDate: Date;
	state: boolean;
}
