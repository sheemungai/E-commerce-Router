
//Product types
export interface TProducts{
 product_id: number;
 name: string;
 description: string;
 price: number
 img: string;
 stock_quantity: number;
 created_at?: Date;
 updated_at?: Date;
 
}

//user types
export interface TUser {
    user_id: number;
    username: string;
    email:string;
    password: string;
    role?: string,  //enum
    created_at?: Date
    updated_at?: Date;

}

//order types
export interface TOrders{
    order_id: number;
    total_amount:number;
    status?:string // enum
}
