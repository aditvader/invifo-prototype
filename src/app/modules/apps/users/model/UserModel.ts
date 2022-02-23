import { Authorization } from "./AuthorizationModel";

export interface ApprovalProcess {
	ID:number
	approvalID	:number
	level     	:number
	userID      :number
	appCode     :string    
	appCodeDesc :string    
	docID       :number     
	actionDate  :Date 
	statusID    :number      
	statusDesc  :string   
	note        :string  
	User        :User   
}


export interface User {
    ID:number
	CreatedAt: Date
	authID     :number
	groupID    :number
	firstName  :string
	lastName   :string
	position   :string
	username   :string
	password   :string
	createdBy  :number
	updatedBy  :number
	userGroup: UserGroup
	authorization: Authorization
    userImage  :UserImage[]
}

export interface UserImage {
    ID:number
	userID:string
	oriBase64:string
	base64:string
	imageName:string
	imageType:string
	imagePath:string
	uploadedBy:string
}

export interface UserGroup {
	ID				:number
	authID			:number
	groupName		:string
	salesGroup  	:boolean
	salesGroupDesc  :string
	createdBy       :number
	updatedBy       :number
}

