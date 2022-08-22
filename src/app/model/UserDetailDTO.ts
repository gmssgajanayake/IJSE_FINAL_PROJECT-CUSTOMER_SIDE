export class UserDetailDTO {
    public constructor(
        public name: string,
        public email: string,
        public password: string,
        public address: string,
        public phoneNumber: number
    ) {
    }
}