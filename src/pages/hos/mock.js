/* eslint-disable prettier/prettier */
import Mock from "mockjs";

const data = {
  money: "@float(60, 100, 20, 63.2)",
  doctorname: "@cname"
};
Mock.mock("/api/v1/doctor", "get", {
  "list|1-5": [
    {
      id: "777",
      name: "@cname",
      mobile: "10100010101",
      roles: "ROLE_DOCTOR",
      certificate: "12346789111111111",
      "grade|1": ["护士", "医生", "主治医师", "主任医师", "副主任工程师"],
      "department|1": [
        "放射科",
        "检验科",
        "神经外科",
        "眼科",
        "骨科",
        "神经内科",
        "皮肤科"
      ],
      location: "@cparagraph(2)"
    }
  ]
});
Mock.mock("/api/v1/doctor/777", "get", {
  name: "@cname", //随机生成日期时间
  "grade|1": ["护士", "医生", "主治医师", "主任医师", "副主任工程师"],
  location: "@cparagraph(5)"
});
Mock.mock("/api/v1/register/777", "post", {
  registerCode: "@natural(1, 11111800576440)"
});
Mock.mock("/api/test", "get", data);

export default Mock;
