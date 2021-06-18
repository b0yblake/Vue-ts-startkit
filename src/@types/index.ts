// import { AppStateType } from '@/store/modules/app/state'
// import { ConsoleStateType } from '@/store/modules/console/state'
// import { UserStateType } from '@/store/modules/user/state'
// import { TeamStateType } from '@/store/modules/user/modules/team/state'

// The type of vuex state module
type ModuleType = {
  app: AppStateType
  console : ConsoleStateType
  user: UserStateType & { team: TeamStateType }
}

// All StateType
export type StateType = ModuleType

/** http request response format*/
export declare interface ApiResponse {
  errCode: number
  errMsg?: string
  data?: any
}

// ant-design-button color
export type ButtonColorType =
  | 'primary'
  | 'danger'
  | 'dashed'
  | 'ghost'
  | 'default'
  | 'link'

// icon type
export type IconType = 'icon' | 'iconfont'

// Dialog open type
export type ModalOpenMode = 'edit' | 'add' | 'other'

export interface BasicUserType {
  id: number
  name?: string
  avatar?: string
  role?: string
  department?: string
  code?: string
  createTime?: string
  description?: string
  email?: string
  lastLoginTime?: string
  modifyTime?: string
  modifyUser?: number
  nickName?: string
  phone?: string
  roleId?: number
  roleName?: string
  status?: number
  tenantId?: number
  type?: string
  userId?: number
  username?: string
  cloudRole?: string
}

export interface ListParamType {
  id: number
  pageSize: number
  pageno : Number
}

// Interface response through format
export interface HttpResponse {
  status: number
  statusText: string
  data: {
    code: number
    desc: string
    [key: string]: any
  }
}

// General parameter configuration of interface request list
export interface HttpListQuery {
  pageno ?: Number
  pageSize?: number
  orderNum?: number
  [key: string]: any
}

// Team list type
export interface TeamListType {
  createTime?: string
  description?: string
  id?: number
  memberNum?: number
  name?: string
  orderNum?: number
  projectNum?: number
  tenantId?: number
  roleId ?: number  // The user's permissions in the current team
}

// Add a list of team members in bulk
export interface TeamMemberType {
  id?: number
  roleId?: number
  status?: number
  teamId?: number
  tenantId?: number
  toolRole?: string
  userId?: number
  userTenantId?: number
  cloudRole?: string
}

export enum RoleType {
  'Super administrator'  =  1 ,
  'Subaccount' ,
  'Team Super Administrator' ,
  'Team Administrator' ,
  'Team member' ,
  'Team visitor' ,
  'Project Administrator' ,
  'Project Member' ,
  'Project Visitor'
}

// Permission list type
export  interface  RoleItemType  {
  createTime: string
  id: number
  roleId: number
  modifyTime: string
  parentId: number
  remark: string
  roleName: keyof typeof RoleType
  type: number
  menuIds: string
}

export interface AddTeamGroupParams {
  description?: string
  id?: number
  teamId?: number
  name: string
  tenantId?: number
}

export interface AddTeamGroupMemberParams {
  groupId: number
  id?: number
  userId: number
}

export interface AddCloudRoleItem {
  cloudRoleId: number
  teamId: number
  tenantId: number
}
// Cloud role member list type
export interface CloudRoleItem extends AddCloudRoleItem {
  allocatedNum: number
  cloudRoleNum: number
  endTime: string
  id: number
  name: string
  unallocatedNum: number
  cloudRoleName: string
  toolId : number
}

// Change the parameters required by the member cloud role
export interface UpdateMemberRoleParams {
  cloudRole: string
  id: number
  teamId: number
  tenantId: number
  userId: number
}

// Cloud role list item type
export type CloudRoleItemType = CloudRoleItem & { members: BasicUserType[] }

// Types of list items edited by cloud role members

export type EditCloudRoleItemType = {
  members: BasicUserType[]
  isCheck: boolean
  cloudRole: string
  teamId: number
  tenantId: number
  userId: number
  allocatedNum: number
  cloudRoleNum: number
  endTime: string
  id: number
  name: string
  unallocatedNum: number
  cloudRoleName: string
  toolId : number
  cloudRoleId: number
}