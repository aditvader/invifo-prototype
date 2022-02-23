import http from "../../../../../setup/httpService";
import { apiUrl } from "../../../../../config.json";
import { User, UserGroup } from "../model/UserModel";
const apiEndpoint = apiUrl + "/users/";

export function getUsers(salesUser:boolean = false) {
  return http.get(apiEndpoint + "data/" + salesUser);
}

export function getUser(userID:number) {
  return http.get(apiEndpoint + "user/" + userID);
}

export function saveUser(user:User) {
  if (user.ID === 0) {
    return http.post(apiEndpoint, user);
  } else {
    return http.put(apiEndpoint, user);
  }
}

export function saveUserAvatar(files:any) {
  return http.post(apiEndpoint + "avatar", files);
}

export function deleteUser(userID:number) {
  return http.delete(apiEndpoint + "user/" + userID);
}

export function getUsersOfUserGroup(groupID:number) {
  return http.get(apiEndpoint + "users-user-group/" + groupID);
}

export function getUserGroups() {
  return http.get(apiEndpoint + "user-group");
}

export function getUserGroup(groupID:number) {
  return http.get(apiEndpoint + "user-group/" + groupID);
}

export function deleteUserGroup(userGroupID:number) {
  return http.delete(apiEndpoint + "user-group/" + userGroupID);
}

export function saveUserGroup(userGroup: UserGroup) {
  if (userGroup.ID === 0) {
    return http.post(apiEndpoint + "user-group", userGroup);
  } else {
    return http.put(apiEndpoint + "user-group", userGroup);
  }
}

/*

export function getSalesGroups() {
  return http.get(apiEndpoint + "sales-groups");
}

export function getAuthorizations() {
  return http.get(apiEndpoint + "authorization");
}

export function saveAuthorization(authorization) {
  return http.post(apiEndpoint + "authorization", authorization);
}

export function getAuthorizationTree(authID = 0) {
  return http.get(apiEndpoint + "authorization-tree/" + authID);
}

export function getAuthorizationDetail(authID) {
  return http.get(apiEndpoint + "authorization-detail/" + authID);
}

export function getPendingApprovals() {
  return http.get(apiEndpoint + "pending-approvals");
}

export function getApprovals() {
  return http.get(apiEndpoint + "approval");
}

export function saveApproval(approval) {
  return http.post(apiEndpoint + "approval", approval);
}

export function getApprovalDetail(approvalID) {
  return http.get(apiEndpoint + "approval-detail/" + approvalID);
}

export function saveApprovalProcessAction(approvalAction) {
  return http.post(apiEndpoint + "approval-process-action", approvalAction);
}

export function saveMessage(messageType, message) {
  return http.post(apiEndpoint + "message/" + messageType, message);
}

export function getMessages(messageType) {
  return http.get(apiEndpoint + "messages/" + messageType);
}

export function updateMessage(message) {
  return http.put(apiEndpoint + "message", message);
}

export function getMessageDetail(messageID) {
  return http.get(apiEndpoint + "message-detail/" + messageID);
}

export function getReplies(messageID) {
  return http.get(apiEndpoint + "message-replies/" + messageID);
}

export function saveMessageReply(messageID, message) {
  return http.post(apiEndpoint + "message-reply", { messageID, message });
}

export function deleteMessage(messageType, messageID) {
  return http.delete(apiEndpoint + "message/" + messageType + "/" + messageID);
}

export function getTaskList() {
  return http.get(apiEndpoint + "tasks");
}

export function saveTask(task) {
  return http.post(apiEndpoint + "tasks", task);
}

export function getTimeSheetTask(taskID) {
  return http.get(apiEndpoint + "timesheet-task/" + taskID);
}

export function getUserTimeSheetPeriod(fiscalYear, fiscalPeriod) {
  return http.get(apiEndpoint + `user-timesheet/${fiscalYear}/${fiscalPeriod}`);
}

export function saveTimeSheet(timesheet) {
  return http.post(apiEndpoint + "timesheet", timesheet);
}

export function submitTimeSheet(submitTimesheet) {
  return http.post(apiEndpoint + "submit-timesheet", submitTimesheet);
}

export function withDrawTimeSheet(withDrawTimesheet) {
  return http.post(apiEndpoint + "withdraw-timesheet", withDrawTimesheet);
}

export function getTask(taskID) {
  return http.get(apiEndpoint + "task/" + taskID);
}

export function saveSubTask(subTask) {
  return http.post(apiEndpoint + "sub-task", subTask);
}

export function getSubTasks(taskID) {
  return http.get(apiEndpoint + "sub-tasks/" + taskID);
}

export function updateSubTasks(subTasks) {
  return http.put(apiEndpoint + "sub-tasks", subTasks);
}
export function saveNotification(notification) {
  return http.post(apiEndpoint + "notification", notification);
}

export function getNotifications() {
  return http.get(apiEndpoint + "notifications");
}

export function updateNotification(notification) {
  return http.put(apiEndpoint + "notification", notification);
}

export function getNotificationDetail(notificationID) {
  return http.get(apiEndpoint + "notification-detail/" + notificationID);
}
*/