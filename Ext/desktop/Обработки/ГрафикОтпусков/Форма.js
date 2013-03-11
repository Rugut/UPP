Ext.define('Обработки.ГрафикОтпусков.Форма',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 1000,
	iconCls: 'bogus',
	title: 'График отпусков',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:777px;top:33px;width:215px;height:539px;',
			height: 539,width: 215,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:7px;top:33px;width:764px;height:539px;',
			height: 539,width: 764,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:107px;top:3px;width:322px;height:19px;',
			height: 19,width: 322,
			items:
			[
				{
					title:'ПоЦентрамОтветственности',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:88px;top:0px;width:234px;height:19px;',
		},
					]
				},
				{
					title:'ПоСтруктуреЮридическихЛиц',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:77px;top:0px;width:245px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВыборГода',
			style: 'position:absolute;left:20px;top:3px;width:48px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаРежимПланированияОтпусков',
			style: 'position:absolute;left:521px;top:3px;width:243px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:926px;top:0px;width:74px;height:25px;',
			items:
			[
				{
					text:'ПереключениеСправкиФормы',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:926px;height:25px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПоСтруктуреЮридическихЛиц',
				},
				{
					text:'ОтчетПоОтпускам',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПравоНаДополнительныеДниОтпуска',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'ОтредактироватьОстаткиОтпусков1',
				},
				{
					text:'Обновить',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю',
				},
				{
					text:'ОтредактироватьОстаткиОтпусков',
				},
				{
					text:'Действие',
				},
				{
					text:'ЗарегистрироватьФактическийОтпуск',
				},
				{
					text:'ЗапланироватьОтпуск',
				},
				{
					text:'ПравоНаДополнительныеДниОтпуска',
				},
				{
					text:'Подменю',
				},
				{
					text:'ПоЦентрамОтветственности',
				},
				{
					text:'ОтчетПоОтпускам',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОтборПоРуководителям',
				},
				{
					text:'ЗапланироватьОтпуск',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель4',
				},
			]
		},
	]
});