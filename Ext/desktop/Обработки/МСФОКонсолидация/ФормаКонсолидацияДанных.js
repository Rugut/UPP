Ext.define('Обработки.МСФОКонсолидация.ФормаКонсолидацияДанных',
	{
	extend: 'Ext.window.Window',
	height: 392,width: 656,
	iconCls: 'bogus',
	title: 'Консолидация по информационной базе',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:656px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:367px;width:656px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Далее',
				},
				{
					text:'Действие1',
				},
				{
					text:'Назад',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:640px;height:326px;',
			height: 326,width: 640,
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
			style: 'position:absolute;left:164px;top:0px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НазваниеКонсолидируемойГруппы',
			style: 'position:absolute;left:164px;top:24px;width:476px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:91px;width:640px;height:213px;',
			height: 213,width: 640,
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:67px;width:640px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Заполнить',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Операция',
			style: 'position:absolute;left:70px;top:22px;width:570px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:46px;width:640px;height:280px;',
			height: 280,width: 640,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'СчетДт',
				},
				{
					text:'СубконтоДт1',
				},
				{
					text:'СубконтоДт2',
				},
				{
					text:'СубконтоДт3',
				},
				{
					text:'СчетКт',
				},
				{
					text:'СубконтоКт1',
				},
				{
					text:'СубконтоКт2',
				},
				{
					text:'СубконтоКт3',
				},
				{
					text:'Сумма',
				},
			]
		},
					]
				},
				{
					title:'Страница3',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:640px;height:305px;',
			height: 305,width: 640,
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