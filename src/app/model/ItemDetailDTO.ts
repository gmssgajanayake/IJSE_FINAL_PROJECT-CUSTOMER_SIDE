export class ItemDetailDTO {
    public constructor(
        public name: string,
        public description: string,
        public imagePath: string,
        public mainCategory: string,
        public subCategory: string,
        public quantity: number,
        public price: number
    ) {
    }
}