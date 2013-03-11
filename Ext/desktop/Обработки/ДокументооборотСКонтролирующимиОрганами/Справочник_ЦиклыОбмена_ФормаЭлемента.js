Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ЦиклыОбмена_ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 624,width: 718,
	iconCls: 'bogus',
	title: 'Циклы обмена',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:718px;height:25px;',
			items:
			[
				{
					text:'ПоказатьОтчетОСостоянии',
				},
				{
					text:'Перечитать',
				},
				{
					text:'ВыгрузитьСодержимое',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'ВывестиВОкно',
				},
				{
					text:'ВыгрузитьКонтейнеры',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:599px;width:718px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:236px;width:702px;height:357px;',
			height: 357,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:75px;width:702px;height:249px;',
			height: 249,width: 702,
			items:
			[
				{
					title:'СтраницаОтчетность',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:128px;width:702px;height:16px;',
			height: 16,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'СтраницаНеформализованноеСообщениеНалоговогоОргана',
				},
				{
					title:'СтраницаНеформализованноеСообщениеНалогоплательщика',
				},
				{
					title:'СтраницаЗапросНаИнформационноеОбслуживание',
					items:
					[
					]
				},
				{
					title:'СтраницаОтчетностьПФР',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:37px;width:702px;height:44px;',
			height: 44,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'СтраницаНеформализованноеВходящиеПФР',
					items:
					[
					]
				},
				{
					title:'СтраницаНеформализованноеИсходящиеПФР',
					items:
					[
					]
				},
				{
					title:'СтраницаОтчетностьФНС534',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:123px;width:702px;height:42px;',
			height: 42,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'СтраницаФорма2НДФЛ',
					items:
					[
					]
				},
				{
					title:'ОбращениеНП',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:80px;width:702px;height:44px;',
			height: 44,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'ПисьмоНО',
					items:
					[
					]
				},
				{
					title:'Рассылка',
					items:
					[
					]
				},
				{
					title:'РассылкаГрупповая',
					items:
					[
					]
				},
				{
					title:'ИОН',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:123px;width:702px;height:42px;',
			height: 42,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'СтраницаЗаявление',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:123px;width:702px;height:42px;',
			height: 42,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:165px;width:702px;height:42px;',
			height: 42,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:207px;width:702px;height:42px;',
			height: 42,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'Документ',
					items:
					[
					]
				},
				{
					title:'СтраницаОтчетностьФСГС',
					items:
					[
					]
				},
				{
					title:'ПисьменноеОбращениеВФСГС',
					items:
					[
					]
				},
				{
					title:'ИндивидуальноеИнформированиеФСГС',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:152px;width:702px;height:19px;',
			height: 19,width: 702,
			items:
			[
				{
					title:'НалоговыйОрган',
					items:
					[
					]
				},
				{
					title:'ОрганПФР',
					items:
					[
					]
				},
				{
					title:'ОрганФСГС',
					items:
					[
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Идентификатор',
			style: 'position:absolute;left:118px;top:89px;width:513px;height:17px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:213px;width:702px;height:23px;',
			height: 23,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
	]
});