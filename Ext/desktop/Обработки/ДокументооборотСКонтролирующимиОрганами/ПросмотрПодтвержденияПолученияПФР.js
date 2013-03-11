Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПросмотрПодтвержденияПолученияПФР',
	{
	extend: 'Ext.window.Window',
	height: 453,width: 473,
	iconCls: 'bogus',
	title: 'Подтверждение получения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:428px;width:473px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:258px;width:457px;height:162px;',
			height: 162,width: 457,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:20px;width:457px;height:142px;',
			height: 142,width: 457,
			columns:
			[
				{
					text:'Имя',
				},
				{
					text:'Идентификатор',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:457px;height:25px;',
			height: 25,width: 457,
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
			style: 'position:absolute;left:8px;top:33px;width:457px;height:82px;',
			height: 82,width: 457,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПричинаОтказаВПриеме',
			style: 'position:absolute;left:0px;top:20px;width:457px;height:52px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:206px;width:457px;height:52px;',
			height: 52,width: 457,
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
			style: 'position:absolute;left:8px;top:115px;width:457px;height:86px;',
			height: 86,width: 457,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:457px;height:52px;',
			height: 52,width: 457,
			columns:
			[
				{
					text:'ИмяФайла',
				},
				{
					text:'Идентификатор',
				},
			]
		},
					]
				},
			]
		},
	]
});