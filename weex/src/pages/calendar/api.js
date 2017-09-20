var api = {
  getAllSchedule: '/api/Schedule/', // 获取所有日程
  addSchedule: '/api/Schedule/Add', // 新增日程
  postAddSchedule: '/api/Schedule/AddSchedule', // 新增日程 重构
  changeScheduleType: '/api/Schedule/ModifyState/', // 改变日程完成状态
  changeScheduleInfo: '/api/Schedule/Update', // 改变日程信息
  deleteScheduleInfo: '/api/Schedule/', // 删除日程
  addGrowth: '/api/GrowthRecord/AddGrowth', // 添加历程
}
export default api
