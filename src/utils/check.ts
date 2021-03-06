import Alert from "@/utils/alert";
import ky from "kyouka";

const checkDate = (beginDate: Date, endDate: Date) => {
  const now = new Date();
  if (now < beginDate) {
    Alert.fire("活动未开始");
    return false;
  }
  if (now > endDate) {
    Alert.fire("活动已结束");
    return false;
  }
  return true;
};

const checkNameAndTel = (name: string, tel: string) => {
  if (!name) {
    Alert.fire("请输入姓名");
    return false;
  }
  if (!tel) {
    Alert.fire("请输入电话");
    return false;
  }
  if (!ky.isPhoneNumber(tel)) {
    Alert.fire("电话号码的格式不对");
    return false;
  }
  return true;
};

export { checkDate, checkNameAndTel };
