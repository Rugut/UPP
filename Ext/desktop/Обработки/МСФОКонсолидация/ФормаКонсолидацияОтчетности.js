Ext.define('Обработки.МСФОКонсолидация.ФормаКонсолидацияОтчетности',
	{
	extend: 'Ext.window.Window',
	height: 455,width: 778,
	iconCls: 'bogus',
	title: 'Консолидация отчетности по МСФО',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:430px;width:778px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Далее',
				},
				{
					text:'Назад',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:762px;height:414px;',
			height: 414,width: 762,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Период',
			style: 'position:absolute;left:182px;top:21px;width:120px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:45px;width:762px;height:120px;',
			height: 120,width: 762,
			columns:
			[
				{
					text:'Фирма',
				},
				{
					text:'Баланс',
				},
				{
					text:'ПрибылиИУбытки',
				},
				{
					text:'ДДС',
				},
				{
					text:'ДвижениеКапитала',
				},
				{
					text:'УчетнаяПолитика',
				},
				{
					text:'Примечания',
				},
				{
					text:'Включать',
				},
				{
					text:'СпособКонсолидации',
				},
				{
					text:'БалансСсылка',
				},
				{
					text:'ПрибылиИУбыткиСсылка',
				},
				{
					text:'ДДССсылка',
				},
				{
					text:'ДвижениеКапиталаСсылка',
				},
				{
					text:'УчетнаяПолитикаСсылка',
				},
				{
					text:'ПримечанияСсылка',
				},
			]
		},
		{
			xtype: 'button',
			name: 'Обновить',
			text: 'Обновить',
			style: 'position:absolute;left:309px;top:21px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:214px;width:762px;height:200px;',
			height: 200,width: 762,
			columns:
			[
				{
					text:'Организация',
				},
				{
					text:'Головная',
				},
				{
					text:'ТоварыПрибыльНаНачало',
				},
				{
					text:'ТоварыПрибыльВТеченииГода',
				},
				{
					text:'СырьеИМатериалыПрибыльНаНачало',
				},
				{
					text:'СырьеИМатериалыПрибыльВТеченииГода',
				},
				{
					text:'НезавершенноеПроизводствоПрибыльНаНачало',
				},
				{
					text:'НезавершенноеПроизводствоПрибыльВТеченииГода',
				},
				{
					text:'КомплектующиеИПолуфабрикатыПрибыльНаНачало',
				},
				{
					text:'КомплектующиеИПолуфабрикатыПрибыльВТеченииГода',
				},
				{
					text:'ГотоваяПродукцияПрибыльНаНачало',
				},
				{
					text:'ГотоваяПродукцияПрибыльВТеченииГода',
				},
				{
					text:'ТоварыОтгруженныеПрибыльНаНачало',
				},
				{
					text:'ТоварыОтгруженныеПрибыльВТеченииГода',
				},
				{
					text:'ОСПрибыльНаНачало',
				},
				{
					text:'ОСПрибыльВТеченииГода',
				},
				{
					text:'НМАПрибыльНаНачало',
				},
				{
					text:'НМАПрибыльВТеченииГода',
				},
			]
		},
					]
				},
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон5',
			style: 'position:absolute;left:222px;top:186px;width:120px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:138px;',
			height: 138,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пред5',
			style: 'position:absolute;left:222px;top:375px;width:120px;height:19px;',
		},
					]
				},
				{
					title:'Страница3',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон6',
			style: 'position:absolute;left:222px;top:186px;width:124px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:138px;',
			height: 138,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пред6',
			style: 'position:absolute;left:222px;top:375px;width:124px;height:19px;',
		},
					]
				},
				{
					title:'Страница4',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон7',
			style: 'position:absolute;left:222px;top:186px;width:124px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:138px;',
			height: 138,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пред7',
			style: 'position:absolute;left:222px;top:375px;width:124px;height:19px;',
		},
					]
				},
				{
					title:'Страница5',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон8',
			style: 'position:absolute;left:222px;top:186px;width:124px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:138px;',
			height: 138,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пред8',
			style: 'position:absolute;left:222px;top:375px;width:124px;height:19px;',
		},
					]
				},
				{
					title:'Страница6',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон11',
			style: 'position:absolute;left:222px;top:197px;width:124px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:243px;width:762px;height:127px;',
			height: 127,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пред11',
			style: 'position:absolute;left:222px;top:375px;width:124px;height:19px;',
		},
					]
				},
				{
					title:'Страница7',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон12',
			style: 'position:absolute;left:222px;top:186px;width:124px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:138px;',
			height: 138,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пред12',
			style: 'position:absolute;left:222px;top:375px;width:124px;height:19px;',
		},
					]
				},
				{
					title:'Страница8',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:160px;',
			height: 160,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон21',
			style: 'position:absolute;left:222px;top:186px;width:124px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:232px;width:762px;height:137px;',
			height: 137,width: 762,
			columns:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Пред21',
			style: 'position:absolute;left:222px;top:374px;width:124px;height:19px;',
		},
					]
				},
				{
					title:'Страница9',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон40',
			style: 'position:absolute;left:245px;top:22px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон41',
			style: 'position:absolute;left:245px;top:46px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон42',
			style: 'position:absolute;left:245px;top:70px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумКон43',
			style: 'position:absolute;left:245px;top:94px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумПред40',
			style: 'position:absolute;left:245px;top:174px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумПред41',
			style: 'position:absolute;left:245px;top:198px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумПред42',
			style: 'position:absolute;left:245px;top:222px;width:124px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СумПред43',
			style: 'position:absolute;left:245px;top:246px;width:124px;height:19px;',
		},
					]
				},
				{
					title:'Страница10',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:762px;height:393px;',
			height: 393,width: 762,
			columns:
			[
				{
					text:'Отчет',
				},
				{
					text:'Ссылка',
				},
			]
		},
					]
				},
			]
		},
	]
});