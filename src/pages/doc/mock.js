/* eslint-disable prettier/prettier */
import Mock from "mockjs";

const data = {
    money: "@float(60, 100, 20, 63.2)",
    doctorname: "@cname"
};
Mock.mock("/api/v1/diagnose/recentaa", "get", {
    'list|1-3': [{
        "checkDTOS|3-7": [{
            "aka130": "string",
            "department|1": ["放射科", "检验科", "神经外科", "眼科"],
            "description|1": ["X光", "CT", "视力检查", "肠毒素检测", "脑电图", "验光散瞳"],
            "diagnosecode": "string",
            "id": "string",
            "money|1": [20, 30, 150, 60],
            "patientage": "@date(yyyy-MM-dd) @time(hh:mm:ss)",
            "patientidcard": "string",
            "patientname": "string",
            "patientsex": "string",
            "result": "string"
        }],
        "checkmoney": "string",
        "drugmoney": "string",
        "endtime": "string",
        "id": "string",
        "patientage": "string",
        "patientidcard": "string",
        "patientname": "string",
        "patientsex": "string",
        "recipe": {
            "aka130": "string",
            "department": "string",
            "diagnosecode": "string",
            "medicine|5-6": [{
                "brandname|1": ['康宁药业', '裕源药业', '海王', '恒诚制药', '河北恒利'],
                "dosageform|1": ['粉剂', '外用溶液', '肠溶片', '控释制剂'],
                "dosesiz": "string",
                "frequency|1": ['1次', '两次', '三次', '四次'],
                "id": "string",
                "medicinecnt|1": [3, 1, 4, 7],
                "medicinename|1": ['乌鸡白凤丸', '氯化钾注射剂', '维生素K4片剂', '美沙芬片剂', '诺氟沙星滴眼剂', '阿魏酸钠', '丁溴东莨菪碱胶囊'],
                "medicinesize": "string",
                "money|1": [20, 30, 50.8, 77.9],
                "remark": "string",
                "key": "@time(hhmmss)",
                "sellpackage|1": ['盒', '片', '包', '颗粒']
            }],
            "patientAge": "string",
            "patientIdcard": "string",
            "patientName": "string",
            "patientSex": "string"
        },
        "doctorName": "@CNAME",
        "doctorDepartment|1": ['心内科丨副主任医师', '神经外科丨主任医师', '呼吸内科丨主治医师'],
        "result|1": ['诊断结果：感冒', '诊断结果：结膜炎', '诊断结果：肺炎'],
        "starttime": "@date(yyyy-MM-dd) @time(hh:mm:ss)",
        "state": "string",
        "totalmoney|1": ['￥100.00', '￥200.00', '￥400.00']
    }]
})
Mock.mock("/api/test", "get", data);

export default Mock;
