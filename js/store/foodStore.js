define(['model/foodModel','lodash'], function(foodModel, _){
	var store = {
		url : config.host + '/getFoodsByRest',
		store : [],

		load : function(query, callback){
			this.store = data;
			callback(this.store);
			/*
			var self = this;
			ricepo.showIndicator();

			$$.getJSON(this.url, query, function(data){
				ricepo.hideIndicator();
				self.store = data.Items;
				callback(self.store);
			});
			*/
		},
		findById: function(id){
			return _.find(this.store, {food_id: id});
		}
	};
	return store;
});


var data =  [
    {
      "price": 1.75,
      "click": 26,
      "rest_id": "0",
      "chn_name": "酸辣汤(小)",
      "category": "Z#汤",
      "food_id": "D21",
      "available": 1,
      "name": "酸辣汤(小)"
    },
    {
      "price": 1.65,
      "click": 15,
      "rest_id": "0",
      "chn_name": "蛋花汤(小)",
      "category": "Z#汤",
      "food_id": "D31",
      "available": 1,
      "name": "蛋花汤(小)"
    },
    {
      "price": 2.95,
      "click": 10,
      "rest_id": "0",
      "chn_name": "云吞汤(大)",
      "category": "Z#汤",
      "food_id": "D12",
      "available": 1,
      "name": "云吞汤(大)"
    },
    {
      "price": 3.5,
      "click": 13,
      "rest_id": "0",
      "chn_name": "酸辣汤(大)",
      "category": "Z#汤",
      "food_id": "D22",
      "available": 1,
      "name": "酸辣汤(大)"
    },
    {
      "price": 3,
      "click": 4,
      "rest_id": "0",
      "chn_name": "蛋花汤(大)",
      "category": "Z#汤",
      "food_id": "D32",
      "available": 1,
      "name": "蛋花汤(大)"
    },
    {
      "price": 1.65,
      "click": 16,
      "rest_id": "0",
      "chn_name": "云吞汤(小)",
      "category": "Z#汤",
      "food_id": "D11",
      "available": 1,
      "name": "云吞汤(小)"
    },
    {
      "price": 10.95,
      "click": 1,
      "rest_id": "0",
      "chn_name": "广东牛炒面",
      "category": "Pan Fried Noodles#两黄面",
      "food_id": "A3",
      "available": 1,
      "name": "广东牛炒面"
    },
    {
      "price": 9.95,
      "click": 0,
      "rest_id": "0",
      "chn_name": "广东鸡炒面",
      "category": "Pan Fried Noodles#两黄面",
      "name": "广东鸡炒面",
      "food_id": "A1",
      "available": 1
    },
    {
      "price": 11.95,
      "click": 1,
      "rest_id": "0",
      "chn_name": "三鲜炒面",
      "category": "Pan Fried Noodles#两黄面",
      "food_id": "A4",
      "available": 1,
      "name": "三鲜炒面"
    },
    {
      "price": 10.95,
      "click": 1,
      "rest_id": "0",
      "chn_name": "广东虾炒面",
      "category": "Pan Fried Noodles#两黄面",
      "food_id": "A2",
      "available": 1,
      "name": "广东虾炒面"
    },
    {
      "price": 7.25,
      "click": 21,
      "rest_id": "0",
      "chn_name": "红烧牛肉汤面",
      "category": "Noodle Soup#汤面",
      "food_id": "A6",
      "available": 1,
      "name": "红烧牛肉汤面"
    },
    {
      "price": 7.95,
      "click": 2,
      "rest_id": "0",
      "chn_name": "火鸭汤面",
      "category": "Noodle Soup#汤面",
      "food_id": "A7",
      "available": 1,
      "name": "火鸭汤面"
    },
    {
      "price": 7.25,
      "click": 11,
      "rest_id": "0",
      "chn_name": "港式云吞汤面",
      "category": "Noodle Soup#汤面",
      "food_id": "A5",
      "available": 1,
      "name": "港式云吞汤面"
    },
    {
      "price": 8.95,
      "click": 0,
      "rest_id": "0",
      "chn_name": "海鲜汤面",
      "category": "Noodle Soup#汤面",
      "food_id": "A9",
      "available": 1,
      "name": "海鲜汤面"
    },
    {
      "price": 6.95,
      "click": 3,
      "rest_id": "0",
      "chn_name": "榨菜肉丝汤面",
      "category": "Noodle Soup#汤面",
      "food_id": "A8",
      "available": 1,
      "name": "榨菜肉丝汤面"
    },
    {
      "price": 7.5,
      "click": 0,
      "rest_id": "0",
      "chn_name": "叉烧汤面",
      "category": "Noodle Soup#汤面",
      "name": "叉烧汤面",
      "food_id": "A10",
      "available": 1
    },
    {
      "price": 8.15,
      "click": 8,
      "rest_id": "0",
      "chn_name": "叉鸡汤面",
      "category": "Noodle Soup#汤面",
      "food_id": "A11",
      "available": 1,
      "name": "叉鸡汤面"
    },
    {
      "price": 6.95,
      "click": 2,
      "rest_id": "0",
      "chn_name": "炸酱上海面",
      "category": "Chow Mein#炒面",
      "food_id": "A15",
      "available": 1,
      "name": "炸酱上海面"
    },
    {
      "price": 8.75,
      "click": 7,
      "rest_id": "0",
      "chn_name": "鸡丝炒面",
      "category": "Chow Mein#炒面",
      "food_id": "A12",
      "available": 1,
      "name": "鸡丝炒面"
    },
    {
      "price": 8.15,
      "click": 3,
      "rest_id": "0",
      "chn_name": "豉油皇炒面",
      "category": "Chow Mein#炒面",
      "food_id": "A14",
      "available": 1,
      "name": "豉油皇炒面"
    },
    {
      "price": 9.95,
      "click": 0,
      "rest_id": "0",
      "chn_name": "三线上海面",
      "category": "Chow Mein#炒面",
      "food_id": "A17",
      "available": 1,
      "name": "三线上海面"
    },
    {
      "price": 8.75,
      "click": 5,
      "rest_id": "0",
      "chn_name": "肉丝炒面",
      "category": "Chow Mein#炒面",
      "food_id": "A13",
      "available": 1,
      "name": "肉丝炒面"
    },
    {
      "price": 6.95,
      "click": 0,
      "rest_id": "0",
      "chn_name": "肉丝上海面",
      "category": "Chow Mein#炒面",
      "name": "肉丝上海面",
      "food_id": "A16",
      "available": 1
    },
    {
      "price": 11.95,
      "click": 21,
      "rest_id": "0",
      "chn_name": "梅菜扣肉",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B14",
      "available": 1,
      "name": "梅菜扣肉"
    },
    {
      "price": 11.95,
      "click": 10,
      "rest_id": "0",
      "chn_name": "豉汁鱼片",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B2",
      "available": 1,
      "name": "豉汁鱼片"
    },
    {
      "price": 11.95,
      "click": 9,
      "rest_id": "0",
      "chn_name": "沙茶牛",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B5",
      "available": 1,
      "name": "沙茶牛"
    },
    {
      "rest_id": "0",
      "price": 11.95,
      "click": 0,
      "chn_name": "尖椒猪肚",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B22",
      "available": 1,
      "name": "尖椒猪肚"
    },
    {
      "price": 11.95,
      "click": 8,
      "rest_id": "0",
      "chn_name": "牛肉炒芥兰",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B15",
      "available": 1,
      "name": "牛肉炒芥兰"
    },
    {
      "price": 11.95,
      "click": 26,
      "rest_id": "0",
      "chn_name": "豉油鸡(半只)",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B11",
      "available": 1,
      "name": "豉油鸡(半只)"
    },
    {
      "price": 8.15,
      "click": 22,
      "rest_id": "0",
      "chn_name": "干炒牛河",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B7",
      "available": 1,
      "name": "干炒牛河"
    },
    {
      "rest_id": "0",
      "price": 11.95,
      "click": 0,
      "chn_name": "豉汁猪肚",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B21",
      "available": 1,
      "name": "豉汁猪肚"
    },
    {
      "price": 12.95,
      "click": 16,
      "rest_id": "0",
      "chn_name": "火鸭(半只)",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B12",
      "available": 1,
      "name": "火鸭(半只)"
    },
    {
      "price": 8.15,
      "click": 0,
      "rest_id": "0",
      "chn_name": "豉汁牛河",
      "category": "Chef's Special#本楼介绍",
      "name": "豉汁牛河",
      "food_id": "B8",
      "available": 1
    },
    {
      "price": 10.95,
      "click": 8,
      "rest_id": "0",
      "chn_name": "茄子鸡",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B13",
      "available": 1,
      "name": "茄子鸡"
    },
    {
      "price": 11.95,
      "click": 6,
      "rest_id": "0",
      "chn_name": "红烧豆腐鱼片",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B19",
      "available": 1,
      "name": "红烧豆腐鱼片"
    },
    {
      "price": 10.95,
      "click": 9,
      "rest_id": "0",
      "chn_name": "椒盐鱿鱼",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B4",
      "available": 1,
      "name": "椒盐鱿鱼"
    },
    {
      "price": 10.95,
      "click": 5,
      "rest_id": "0",
      "chn_name": "沙茶鸡",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B6",
      "available": 1,
      "name": "沙茶鸡"
    },
    {
      "price": 8.95,
      "click": 24,
      "rest_id": "0",
      "chn_name": "炒芥兰",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B16",
      "available": 1,
      "name": "炒芥兰"
    },
    {
      "price": 13.95,
      "click": 14,
      "rest_id": "0",
      "chn_name": "支竹牛腩",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B20",
      "available": 1,
      "name": "支竹牛腩"
    },
    {
      "price": 8.75,
      "click": 19,
      "rest_id": "0",
      "chn_name": "星加坡炒米粉",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B10",
      "available": 1,
      "name": "星加坡炒米粉"
    },
    {
      "price": 8.15,
      "click": 56,
      "rest_id": "0",
      "chn_name": "番茄炒蛋",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B18",
      "available": 1,
      "name": "番茄炒蛋"
    },
    {
      "rest_id": "0",
      "price": 11.95,
      "click": 0,
      "chn_name": "虾仁炒蛋",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B25",
      "available": 1,
      "name": "虾仁炒蛋"
    },
    {
      "rest_id": "0",
      "price": 11.95,
      "click": 0,
      "chn_name": "豉椒炒牛肉",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B23",
      "available": 1,
      "name": "豉椒炒牛肉"
    },
    {
      "price": 11.95,
      "click": 33,
      "rest_id": "0",
      "chn_name": "豉汁排骨",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B1",
      "available": 1,
      "name": "豉汁排骨"
    },
    {
      "price": 8.75,
      "click": 1,
      "rest_id": "0",
      "chn_name": "沙茶牛河",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B9",
      "available": 1,
      "name": "沙茶牛河"
    },
    {
      "price": 10.95,
      "click": 4,
      "rest_id": "0",
      "chn_name": "葱爆鱿鱼",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B3",
      "available": 1,
      "name": "葱爆鱿鱼"
    },
    {
      "rest_id": "0",
      "price": 11.95,
      "click": 0,
      "chn_name": "芥蓝炒鱼片",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B24",
      "available": 1,
      "name": "芥蓝炒鱼片"
    },
    {
      "price": 8.15,
      "click": 24,
      "rest_id": "0",
      "chn_name": "油菜",
      "category": "Chef's Special#本楼介绍",
      "food_id": "B17",
      "available": 1,
      "name": "油菜"
    },
    {
      "price": 7.55,
      "click": 32,
      "rest_id": "0",
      "chn_name": "支竹牛腩饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A38",
      "available": 1,
      "name": "支竹牛腩饭"
    },
    {
      "price": 6.95,
      "click": 28,
      "rest_id": "0",
      "chn_name": "鱼香茄子饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A30",
      "available": 1,
      "name": "鱼香茄子饭"
    },
    {
      "rest_id": "0",
      "price": 7.25,
      "click": 0,
      "chn_name": "豉椒炒牛肉饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A46",
      "available": 1,
      "name": "豉椒炒牛肉饭"
    },
    {
      "price": 6.95,
      "click": 52,
      "rest_id": "0",
      "chn_name": "番茄牛肉饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A22",
      "available": 1,
      "name": "番茄牛肉饭"
    },
    {
      "price": 6.95,
      "click": 7,
      "rest_id": "0",
      "chn_name": "榨菜肉丝饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A39",
      "available": 1,
      "name": "榨菜肉丝饭"
    },
    {
      "price": 6.95,
      "click": 5,
      "rest_id": "0",
      "chn_name": "豉汁牛肉饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A34",
      "available": 1,
      "name": "豉汁牛肉饭"
    },
    {
      "price": 6.95,
      "click": 7,
      "rest_id": "0",
      "chn_name": "葱爆肉饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A27",
      "available": 1,
      "name": "葱爆肉饭"
    },
    {
      "price": 6.95,
      "click": 7,
      "rest_id": "0",
      "chn_name": "豆腐鸡饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A18",
      "available": 1,
      "name": "豆腐鸡饭"
    },
    {
      "price": 7.25,
      "click": 24,
      "rest_id": "0",
      "chn_name": "豉油鸡饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A33",
      "available": 1,
      "name": "豉油鸡饭"
    },
    {
      "price": 7.55,
      "click": 22,
      "rest_id": "0",
      "chn_name": "火鸭饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A37",
      "available": 1,
      "name": "火鸭饭"
    },
    {
      "price": 7.55,
      "click": 15,
      "rest_id": "0",
      "chn_name": "叉鸭饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A40",
      "available": 1,
      "name": "叉鸭饭"
    },
    {
      "rest_id": "0",
      "price": 7.25,
      "click": 2,
      "chn_name": "尖椒猪肚饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A45",
      "available": 1,
      "name": "尖椒猪肚饭"
    },
    {
      "price": 7.25,
      "click": 16,
      "rest_id": "0",
      "chn_name": "叉烧饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A35",
      "available": 1,
      "name": "叉烧饭"
    },
    {
      "price": 6.95,
      "click": 16,
      "rest_id": "0",
      "chn_name": "咖喱鸡饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A19",
      "available": 1,
      "name": "咖喱鸡饭"
    },
    {
      "price": 7.25,
      "click": 83,
      "rest_id": "0",
      "chn_name": "梅菜扣肉饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A31",
      "available": 1,
      "name": "梅菜扣肉饭"
    },
    {
      "price": 6.95,
      "click": 17,
      "rest_id": "0",
      "chn_name": "窝蛋牛肉饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A23",
      "available": 1,
      "name": "窝蛋牛肉饭"
    },
    {
      "price": 6.95,
      "click": 8,
      "rest_id": "0",
      "chn_name": "豉汁豆腐牛饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A43",
      "available": 1,
      "name": "豉汁豆腐牛饭"
    },
    {
      "price": 6.95,
      "click": 12,
      "rest_id": "0",
      "chn_name": "葱爆鸡饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A28",
      "available": 1,
      "name": "葱爆鸡饭"
    },
    {
      "price": 6.95,
      "click": 5,
      "rest_id": "0",
      "chn_name": "煎蛋芽菜虾仁饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A25",
      "available": 1,
      "name": "煎蛋芽菜虾仁饭"
    },
    {
      "price": 6.95,
      "click": 35,
      "rest_id": "0",
      "chn_name": "鱼香鸡丝饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A20",
      "available": 1,
      "name": "鱼香鸡丝饭"
    },
    {
      "price": 7.25,
      "click": 67,
      "rest_id": "0",
      "chn_name": "豉汁排骨饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A32",
      "available": 1,
      "name": "豉汁排骨饭"
    },
    {
      "rest_id": "0",
      "price": 7.25,
      "click": 0,
      "chn_name": "虾仁炒蛋饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A48",
      "available": 1,
      "name": "虾仁炒蛋饭"
    },
    {
      "price": 6.95,
      "click": 2,
      "rest_id": "0",
      "chn_name": "菜远牛肉饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A29",
      "available": 1,
      "name": "菜远牛肉饭"
    },
    {
      "price": 6.95,
      "click": 7,
      "rest_id": "0",
      "chn_name": "唐芥兰牛肉饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A26",
      "available": 1,
      "name": "唐芥兰牛肉饭"
    },
    {
      "price": 7.75,
      "click": 8,
      "rest_id": "0",
      "chn_name": "豆腐鱼片饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A42",
      "available": 1,
      "name": "豆腐鱼片饭"
    },
    {
      "price": 7.55,
      "click": 26,
      "rest_id": "0",
      "chn_name": "叉鸡饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A36",
      "available": 1,
      "name": "叉鸡饭"
    },
    {
      "price": 6.95,
      "click": 3,
      "rest_id": "0",
      "chn_name": "青豆肉丝饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A21",
      "available": 1,
      "name": "青豆肉丝饭"
    },
    {
      "price": 7.75,
      "click": 21,
      "rest_id": "0",
      "chn_name": "豉汁鱼片饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A41",
      "available": 1,
      "name": "豉汁鱼片饭"
    },
    {
      "price": 6.95,
      "click": 29,
      "rest_id": "0",
      "chn_name": "滑蛋虾仁饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A24",
      "available": 1,
      "name": "滑蛋虾仁饭"
    },
    {
      "rest_id": "0",
      "price": 7.75,
      "click": 0,
      "chn_name": "芥蓝炒鱼片饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A47",
      "available": 1,
      "name": "芥蓝炒鱼片饭"
    },
    {
      "rest_id": "0",
      "price": 7.25,
      "click": 0,
      "chn_name": "豉汁猪肚饭",
      "category": "Cantonese Style Rice#烩饭",
      "food_id": "A44",
      "available": 1,
      "name": "豉汁猪肚饭"
    },
    {
      "price": 0,
      "click": 360,
      "rest_id": "0",
      "chn_name": "要筷子",
      "category": "@#其他服务",
      "food_id": "@1",
      "available": 1,
      "name": "要筷子"
    },
    {
      "price": 1,
      "click": 187,
      "rest_id": "0",
      "chn_name": "加蛋",
      "category": "@#其他服务",
      "food_id": "C1",
      "available": 1,
      "name": "加蛋"
    },
    {
      "click": 360,
      "price": 0,
      "rest_id": "0",
      "chn_name": "要筷子",
      "category": "Popular#热门",
      "food_id": "@1",
      "available": 1,
      "name": "要筷子"
    },
    {
      "click": 187,
      "price": 1,
      "rest_id": "0",
      "chn_name": "加蛋",
      "category": "Popular#热门",
      "food_id": "C1",
      "available": 1,
      "name": "加蛋"
    },
    {
      "click": 83,
      "price": 7.25,
      "rest_id": "0",
      "chn_name": "梅菜扣肉饭",
      "category": "Popular#热门",
      "food_id": "A31",
      "available": 1,
      "name": "梅菜扣肉饭"
    },
    {
      "click": 67,
      "price": 7.25,
      "rest_id": "0",
      "chn_name": "豉汁排骨饭",
      "category": "Popular#热门",
      "food_id": "A32",
      "available": 1,
      "name": "豉汁排骨饭"
    },
    {
      "click": 56,
      "price": 8.15,
      "rest_id": "0",
      "chn_name": "番茄炒蛋",
      "category": "Popular#热门",
      "food_id": "B18",
      "available": 1,
      "name": "番茄炒蛋"
    },
    {
      "click": 52,
      "price": 6.95,
      "rest_id": "0",
      "chn_name": "番茄牛肉饭",
      "category": "Popular#热门",
      "food_id": "A22",
      "available": 1,
      "name": "番茄牛肉饭"
    }
];
