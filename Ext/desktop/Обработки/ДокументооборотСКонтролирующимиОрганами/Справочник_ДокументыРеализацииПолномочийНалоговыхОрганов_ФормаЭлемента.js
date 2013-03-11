Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ДокументыРеализацииПолномочийНалоговыхОрганов_ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 404,width: 810,
	iconCls: 'bogus',
	title: 'Документ реализации полномочий налоговых органов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:810px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:379px;width:810px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:243px;width:794px;height:128px;',
			height: 128,width: 794,
			columns:
			[
				{
					text:'ИмяФайла',
				},
				{
					text:'Размер',
				},
				{
					text:'ТипСодержимого',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:219px;width:792px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Открыть',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель4',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:794px;height:44px;',
			height: 44,width: 794,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:794px;height:36px;',
			height: 36,width: 794,
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
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДокумента',
			style: 'position:absolute;left:111px;top:77px;width:691px;height:19px;',
		},
	]
});