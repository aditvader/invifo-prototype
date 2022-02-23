export interface AuthorizationDocument {
	view:boolean  
	edit:boolean     
	delete:boolean  
	create:boolean  
}

// Authorization authorization
export interface Authorization {
	ID:number
	authName: string
	createdBy: number
	updatedBy: number
	authorizationDetail: AuthorizationDetail[]
}

// AuthorizationDetail authorization detail
/*
1. Own Document
2. User Group
3. All
*/
export interface AuthorizationDetail  {
	ID: number
	authID: number
	appCode: string
	view: number
	edit: number
	delete: number
	create: boolean
	createdBy: number
	updatedBy: number
	deleteFlag: boolean
	authorizationValue: AuthorizationValue[]
}

// AuthorizationValue authorizationValue
export interface AuthorizationValue  {
	ID: number
	AuthDetailID: number
	ObjectID: number
	CreatedBy: number
	UpdatedBy: number
	DeleteFlag: boolean
}
