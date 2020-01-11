import Mock from 'mockjs'

const data = {
    "total": 20,
    "items": [
        {
            "takegroupbuyteamguid": "-1",
            "createtime": "2020-01-10 18:12:31",
            "logisticsname": null,
            "color": null,
            "groupbuystate": 0,
            "real_price": 0.00,
            "deptname": "无",
            "receivername": "mock测试",
            "tagname": null,
            "ordernumber": "20200110681109",
            "name": "凝讯测试2",
            "guid": "3a493cda468f44dc85888db3fcdedad7",
            "bigordernumber": null,
            "id": 10766,
            "state": 1,
            "dealtype": 6
        },
        {
            "takegroupbuyteamguid": "-1",
            "createtime": "2020-01-10 18:02:19",
            "logisticsname": null,
            "color": null,
            "groupbuystate": 0,
            "real_price": 0.00,
            "deptname": "无",
            "receivername": "到你家",
            "tagname": null,
            "ordernumber": "20200110557717",
            "name": "海维测试17",
            "guid": "946d4969bdfe49a3afa631e5b5c0840d",
            "bigordernumber": null,
            "id": 10764,
            "state": 1,
            "dealtype": 6
        },
        {
            "takegroupbuyteamguid": "-1",
            "createtime": "2020-01-10 16:50:13",
            "logisticsname": null,
            "color": null,
            "groupbuystate": 0,
            "real_price": 0.00,
            "deptname": "无",
            "receivername": "到你家",
            "tagname": null,
            "ordernumber": "20200110509909",
            "name": "海维测试17",
            "guid": "946d4969bdfe49a3afa631e5b5c0840d",
            "bigordernumber": null,
            "id": 10763,
            "state": 1,
            "dealtype": 6
        },
        {
            "takegroupbuyteamguid": "-1",
            "createtime": "2020-01-10 16:01:13",
            "logisticsname": null,
            "color": null,
            "groupbuystate": 0,
            "real_price": 0.00,
            "deptname": "无",
            "receivername": "www",
            "tagname": null,
            "ordernumber": "20200110948448",
            "name": "cccc",
            "guid": "3dee98d993aa4f29bf06663366069b66",
            "bigordernumber": null,
            "id": 10762,
            "state": 1,
            "dealtype": 6
        },
        {
            "takegroupbuyteamguid": "-1",
            "createtime": "2020-01-10 15:10:49",
            "logisticsname": null,
            "color": "red",
            "groupbuystate": 0,
            "real_price": 0.00,
            "deptname": "大数据测试",
            "receivername": "smileboy",
            "tagname": "L,V",
            "ordernumber": "20200110442633",
            "name": "田欣",
            "guid": "d71913f08a154399a52f21a6d072dbd2",
            "bigordernumber": null,
            "id": 10761,
            "state": 1,
            "dealtype": 6
        },
        {
            "takegroupbuyteamguid": "-1",
            "createtime": "2020-01-10 11:09:24",
            "logisticsname": null,
            "color": null,
            "groupbuystate": 0,
            "real_price": 0.00,
            "deptname": "无",
            "receivername": "到你家",
            "tagname": null,
            "ordernumber": "20200110213627",
            "name": "海维测试17",
            "guid": "946d4969bdfe49a3afa631e5b5c0840d",
            "bigordernumber": null,
            "id": 10760,
            "state": 7,
            "dealtype": 6
        },
        {
            "takegroupbuyteamguid": "-1",
            "createtime": "2020-01-10 11:07:16",
            "logisticsname": null,
            "color": null,
            "groupbuystate": 0,
            "real_price": 0.00,
            "deptname": "无",
            "receivername": "到你家",
            "tagname": null,
            "ordernumber": "20200110560638",
            "name": "海维测试17",
            "guid": "946d4969bdfe49a3afa631e5b5c0840d",
            "bigordernumber": null,
            "id": 10759,
            "state": 7,
            "dealtype": 6
        },
        {
            "takegroupbuyteamguid": "-1",
            "createtime": "2020-01-10 11:06:24",
            "logisticsname": null,
            "color": null,
            "groupbuystate": 0,
            "real_price": 0.00,
            "deptname": "无",
            "receivername": "到你家",
            "tagname": null,
            "ordernumber": "20200110875929",
            "name": "海维测试17",
            "guid": "946d4969bdfe49a3afa631e5b5c0840d",
            "bigordernumber": null,
            "id": 10758,
            "state": 1,
            "dealtype": 6
        },
        {
            "takegroupbuyteamguid": "-1",
            "createtime": "2020-01-10 10:32:22",
            "logisticsname": null,
            "color": null,
            "groupbuystate": 0,
            "real_price": 0.00,
            "deptname": "无",
            "receivername": "到你家",
            "tagname": null,
            "ordernumber": "20200110454445",
            "name": "海维测试17",
            "guid": "946d4969bdfe49a3afa631e5b5c0840d",
            "bigordernumber": null,
            "id": 10754,
            "state": 7,
            "dealtype": 6
        },
        {
            "takegroupbuyteamguid": "-1",
            "createtime": "2020-01-10 10:14:49",
            "logisticsname": null,
            "color": null,
            "groupbuystate": 0,
            "real_price": 0.00,
            "deptname": "无",
            "receivername": "到你家",
            "tagname": null,
            "ordernumber": "20200110970295",
            "name": "海维测试17",
            "guid": "946d4969bdfe49a3afa631e5b5c0840d",
            "bigordernumber": null,
            "id": 10753,
            "state": 1,
            "dealtype": 6
        }
    ]
}

export default [
    {
        url: '/vuelogin/list',
        type: 'post',
        response: config => {
            const items = data.items
            console.log('mock.ordermanage.response')
            return {
                code: 20000,
                data: {
                    total: items.length,
                    items: items
                }
            }
        }
    }
]