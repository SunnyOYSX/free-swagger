// generated by free-swagger-client
    
/**
 * @typedef {
 *   {
 *     id: number
 *     name: string
 *   }
 * } Category
**/

/**
 * @typedef {
 *   {
 *     id: number
 *     category: Category
 *     name: string
 *     photoUrls: string[]
 *     tags: Tag[]
 *     status: "available" | "pending" | "sold"
 *   }
 * } Pet
**/

/**
 * @typedef {
 *   {
 *     id: number
 *     name: string
 *   }
 * } Tag
**/

/**
 * @typedef {
 *   {
 *     code: number
 *     type: string
 *     message: string
 *   }
 * } ApiResponse
**/

/**
 * @typedef {
 *   {
 *     id: number
 *     petId: number
 *     quantity: number
 *     shipDate: string
 *     status: "placed" | "approved" | "delivered"
 *     complete: boolean
 *   }
 * } Order
**/

/**
 * @typedef {
 *   {
 *     id: number
 *     username: string
 *     firstName: string
 *     lastName: string
 *     email: string
 *     password: string
 *     phone: string
 *     userStatus: number
 *   }
 * } User
**/
