Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПросмотрПодтвержденияПолученияПФР',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:473px;height:453px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
			tabBar:{hidden:true},
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
					width:'100',
				},
				{
					text:'Идентификатор',
					width:'100',
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
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись42',
			text: 'Отчет считается представленным?',
			style: 'position:absolute;left:0px;top:0px;width:206px;height:18px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчетПредставлен',
			text: '',
			style: 'position:absolute;left:210px;top:0px;width:247px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:457px;height:82px;',
			height: 82,width: 457,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textarea',
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
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Дата и время получения документов:',
			style: 'position:absolute;left:0px;top:0px;width:206px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Регистрационный номер организации:',
			style: 'position:absolute;left:0px;top:24px;width:206px;height:18px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:115px;width:457px;height:86px;',
			height: 86,width: 457,
			tabBar:{hidden:true},
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
					text:'Имя файла',
					width:'100',
				},
				{
					text:'Идентификатор',
					width:'100',
				},
			]
		},
					]
				},
			]
		},
	]
});