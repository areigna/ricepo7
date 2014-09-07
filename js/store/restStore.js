define(['model/restModel','lodash'], function(restModel, _){
	var model = {
		url : config.host + '/getRestsByCity',
		store: [],
		load: function(query, callback){
			this.store = data;
			callback(this.store);
			/*
			var self = this;
	        ricepo.showIndicator();
			$$.getJSON(this.url, query, function(data){
		        ricepo.hideIndicator();
				self.store= data.Items;
				callback(self.store);
			});
			*/
		},
		findById : function(id){
			return _.find(this.store, {rest_id: id});
		}	
	};
	return model;
});


var data = [
    {
      "sms": [
        "3473271165"
      ],
      "hour0": "closed",
      "hour3": "11:00-21:00",
      "chn_name": "筷子楼",
      "hour4": "11:00-21:00",
      "hour1": "11:00-21:00",
      "hour2": "11:00-21:00",
      "password": "sha1$c7a50b69$1$f94dab601631c8c4503d4d622dafae4c448083f4",
      "popular": [
        "Delivery $2",
        "Min $10"
      ],
      "icon": "s",
      "min": 10,
      "chn_popular": [
        "Delivery $2",
        "Min $10"
      ],
      "city": "rochester,ny",
      "off": 0,
      "click": 400,
      "rest_id": "0",
      "image": "resources/images/3.jpg",
      "phone": "5854278878",
      "hour6": "11:00-21:30",
      "delivery_fee": 2,
      "hour5": "11:00-21:30",
      "closed": 0,
      "name": "Chopsticks",
      "registered": 1
    },
    {
      "hour0": "12:00-21:30",
      "hour3": "11:00-22:00",
      "chn_name": "亚美",
      "hour4": "11:00-22:00",
      "hour1": "11:00-22:00",
      "hour2": "11:00-22:00",
      "fax": "5853680008",
      "popular": [
        "Delivery $2",
        "Min $10"
      ],
      "min": 10,
      "chn_popular": [
        "Delivery $2",
        "Min $10"
      ],
      "language": "en-US",
      "city": "rochester,ny",
      "off": 0,
      "click": 183,
      "rest_id": "5",
      "image": "resources/images/5.jpg",
      "phone": "5853689888",
      "delivery_fee": 2,
      "hour6": "11:00-23:00",
      "hour5": "11:00-23:00",
      "closed": 0,
      "name": "Yummy Garden"
    },
    {
      "sms": [
        "5853015398",
        "5857489812"
      ],
      "hour0": "16:30-22:00",
      "hour3": "11:00-23:00",
      "chn_name": "Ming's Noodle",
      "hour4": "11:00-23:00",
      "hour1": "11:00-23:00",
      "hour2": "11:00-23:00",
      "icon": "S",
      "min": 7.9,
      "chn_popular": [
        "Delivery $2.5",
        "Min $7.9"
      ],
      "language": "zh-HK",
      "city": "rochester,ny",
      "off": 0,
      "click": 151,
      "rest_id": "1",
      "image": "resources/images/1.jpg",
      "phone": "5852440985",
      "hour6": "11:00-23:00",
      "delivery_fee": 2.5,
      "hour5": "11:00-23:00",
      "closed": 0,
      "name": "Ming's Noodle"
    },
    {
      "sms": [
        "9178381616"
      ],
      "hour0": "14:00-22:00",
      "hour3": "11:30-22:00",
      "chn_name": "上海",
      "hour4": "11:30-22:00",
      "hour1": "11:30-22:00",
      "hour2": "11:30-22:00",
      "fax": "5854241001",
      "popular": [
        "10% OFF",
        "Delivery $2",
        "Min $20"
      ],
      "min": 20,
      "chn_popular": [
        "10% OFF",
        "Delivery $2",
        "Min $20"
      ],
      "city": "rochester,ny",
      "off": 0,
      "click": 125,
      "rest_id": "7",
      "image": "resources/images/3.jpg",
      "delivery_fee": 2,
      "hour6": "11:30-23:00",
      "phone": "5854244000",
      "hour5": "11:30-23:00",
      "closed": 0,
      "name": "Shanghai"
    },
    {
      "hour0": "12:00-22:00",
      "hour3": "10:30-22:30",
      "chn_name": "文华阁",
      "hour4": "10:30-22:30",
      "hour1": "10:30-22:30",
      "hour2": "10:30-22:30",
      "password": "sha1$671a9f3e$1$e5593315e5e1269f28d2a621f52c1adb0b17d9a7",
      "fax": "5853346997",
      "popular": [
        "Delivery $1",
        "Min $10"
      ],
      "min": 10,
      "chn_popular": [
        "Delivery $1",
        "Min $10"
      ],
      "language": "en-US",
      "city": "rochester,ny",
      "off": 0,
      "click": 89,
      "rest_id": "4",
      "image": "resources/images/4.jpg",
      "phone": "5853341500",
      "delivery_fee": 1,
      "hour6": "10:30-23:30",
      "hour5": "10:30-23:30",
      "closed": 0,
      "name": "Manderin Court",
      "registered": 1
    },
    {
      "hour0": "12:00-21:30",
      "sms": [
        "5852785599",
        "5853193136"
      ],
      "hour3": "11:30-21:30",
      "chn_name": "竹园",
      "hour4": "11:30-21:30",
      "hour1": "11:30-21:30",
      "hour2": "11:30-21:30",
      "fax": "5853194262",
      "min": 50,
      "chn_popular": [
        "Delivery $3.5",
        "Min $50"
      ],
      "city": "rochester,ny",
      "off": 0,
      "click": 41,
      "rest_id": "8",
      "image": "resources/images/1.jpg",
      "delivery_fee": 3.5,
      "hour6": "11:30-22:30",
      "phone": "5853193136",
      "hour5": "11:30-22:30",
      "closed": 0,
      "name": "Bamboo House"
    },
    {
      "hour0": "closed",
      "sms": [
        "5854725522",
        "8046990217"
      ],
      "hour3": "11:00-21:15",
      "chn_name": "New Ming",
      "hour4": "11:00-21:15",
      "hour1": "11:00-21:15",
      "hour2": "11:00-21:15",
      "min": 15,
      "chn_popular": [
        "Delivery $2.5",
        "Min $15",
        "泰国菜",
        "越南菜"
      ],
      "language": "zh-HK",
      "city": "rochester,ny",
      "off": 0,
      "click": 23,
      "rest_id": "11",
      "image": "resources/images/4.jpg",
      "delivery_fee": 2.5,
      "hour6": "11:00-22:15",
      "phone": "5852717267",
      "hour5": "11:00-22:15",
      "closed": 0,
      "name": "New Ming"
    },
    {
      "hour0": "10:00-21:30",
      "hour3": "10:00-21:30",
      "chn_name": "金玉庭",
      "hour4": "10:00-21:30",
      "hour1": "10:00-21:30",
      "hour2": "7:00-21:30",
      "min": -1,
      "city": "rochester,ny",
      "off": 1,
      "click": 0,
      "rest_id": "10",
      "image": "resources/images/5.jpg",
      "delivery_fee": -1,
      "hour6": "10:00-22:30",
      "hour5": "10:00-22:30",
      "closed": 0,
      "name": "Wok With You"
    },
    {
      "sms": [
        "5852704431",
        "9285638377"
      ],
      "hour0": "10:00-21:30",
      "hour3": "10:00-21:30",
      "chn_name": "白天鹅",
      "hour4": "10:00-21:30",
      "hour1": "10:00-21:30",
      "hour2": "7:00-21:30",
      "fax": "5853193249",
      "min": -1,
      "chn_popular": [
        "Pickup Only"
      ],
      "city": "rochester,ny",
      "off": 1,
      "click": 0,
      "rest_id": "2",
      "image": "resources/images/1.jpg",
      "phone": "5852704431",
      "hour6": "10:00-22:30",
      "delivery_fee": -1,
      "hour5": "10:00-22:30",
      "closed": 0,
      "name": "White Swain"
    },
    {
      "hour0": "00:00-24:00",
      "hour3": "00:00-24:00",
      "chn_name": "模拟饭店",
      "hour4": "00:00-24:00",
      "hour1": "00:00-24:00",
      "hour2": "00:00-24:00",
      "min": 10,
      "chn_popular": [
        "还没到饭点？先尝试一下模拟下单流程吧"
      ],
      "city": "rochester,ny",
      "off": 0,
      "click": -171,
      "rest_id": "9",
      "image": "resources/images/5.jpg",
      "delivery_fee": 2,
      "hour6": "00:00-24:00",
      "phone": "5857668377",
      "hour5": "00:00-24:00",
      "closed": 0,
      "name": "Mock",
      "registered": 1
    }
];
