Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ПерепискаСКонтролирующимиОрганами_ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:654px;height:543px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Переписка с контролирующими органами',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:157px;width:638px;height:353px;',
			height: 353,width: 638,
			items:
			[
				{
					title:'Содержание',
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Содержание',
			style: 'position:absolute;left:6px;top:6px;width:624px;height:321px;',
		},
					]
				},
				{
					title:'Вложения',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:28px;width:626px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Открыть',
				},
				{
					text:'Выгрузить',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:52px;width:626px;height:275px;',
			height: 275,width: 626,
			columns:
			[
				{
					text:'Имя',
					width:'350',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Размер (в байтах)',
					width:'113',
					dataIndex:'Размер',
					flex:1,
				},
				{
					text:'Тип',
					width:'88',
					dataIndex:'Тип',
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
						name:'Размер',
					},
					{
						name:'Тип',
					},
				]
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:6px;width:626px;height:22px;',
			height: 22,width: 626,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:77px;width:638px;height:80px;',
			height: 80,width: 638,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Тема:',
			style: 'position:absolute;left:0px;top:0px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 553,
			height: 19,
			style: 'position:absolute;left:85px;top:0px;width:553px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправитель',
			text: 'От кого:',
			style: 'position:absolute;left:0px;top:26px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отправитель',
			width: 553,
			height: 19,
			style: 'position:absolute;left:85px;top:26px;width:553px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолучатель',
			text: 'Кому:',
			style: 'position:absolute;left:0px;top:52px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Получатель',
			width: 553,
			height: 19,
			style: 'position:absolute;left:85px;top:52px;width:553px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:638px;height:44px;',
			height: 44,width: 638,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:638px;height:36px;',
			height: 36,width: 638,
			tabBar:{hidden:true},
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
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:654px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Отправить',
				},
				'-',
				{
					text:'Ответить',
				},
				'-',
				{
					text:'Скопировать',
				},
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:518px;width:654px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});