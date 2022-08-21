export class OrderDetailDTO{
    public constructor(
        public customerId:string,
        public itemId:string,
        public date:string,
        public shippingAddress:string,
        public shippingStatus:string,
        public unitPrice:number,
        public quantity:number,
        public tax:number,
        public shippingCost:number,
        public total:number
    ) {
    }
}