Ext.define('Отчеты.РегламентированныйОтчетИзвещениеОбУплатеАвансовогоПлатежаАкциза.ФормаОтчета2011кв2',
	{
	extend: 'Ext.window.Window',
	height: 446,width: 670,
	iconCls: 'bogus',
	title: 'Акцизы: извещение об уплате авансового платежа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:670px;height:25px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ВыбратьВариантОчисткиОтчета',
				},
				{
					text:'КнопкаНастройкаСтраниц',
				},
				{
					text:'РасширитьПолеБланка',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Справка',
				},
				{
					text:'Поиск',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'ПодменюОчистить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'КнопкаЗаполнитьСведенияОбОрганизации',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:421px;width:670px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'Действие2',
				},
				{
					text:'СохранитьИЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюПечати',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:654px;height:310px;',
			height: 310,width: 654,
			items:
			[
				{
					title:'Раздел1',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиРаздел1',
			text: 'Добавить',
			style: 'position:absolute;left:483px;top:283px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиРаздел1',
			text: 'Удалить',
			style: 'position:absolute;left:568px;top:283px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:654px;height:48px;',
			height: 48,width: 654,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:222px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:82px;top:24px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:305px;top:23px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:391px;width:654px;height:24px;',
			height: 24,width: 654,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:263px;top:5px;width:391px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Статус',
			style: 'position:absolute;left:47px;top:5px;width:119px;height:19px;',
		},
					]
				},
			]
		},
	]
});