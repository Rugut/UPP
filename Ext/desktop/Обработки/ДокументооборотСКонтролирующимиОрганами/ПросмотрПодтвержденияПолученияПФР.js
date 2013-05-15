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
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Идентификатор',
					width:'100',
					dataIndex:'Идентификатор',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Имя',
					},
					{
						name:'Идентификатор',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Было получено следующее содержимое:',
			style: 'position:absolute;left:0px;top:0px;width:457px;height:16px;',
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
			xtype: 'fieldset',
			title: 'Причина отказа в приеме',
			style: 'position:absolute;left:0px;top:0px;width:457px;height:16px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
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
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:0px;top:81px;width:457px;height:3px;',
		},
		{
			xtype: 'fieldset',
			title: 'Протоколы проверки',
			style: 'position:absolute;left:0px;top:0px;width:457px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:21px;width:457px;height:52px;',
			height: 52,width: 457,
			columns:
			[
				{
					text:'Имя файла',
					width:'100',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Идентификатор',
					width:'100',
					dataIndex:'Идентификатор',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ИмяФайла',
					},
					{
						name:'Идентификатор',
					},
				]
			},
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:428px;width:473px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
			]
		},
	]
});