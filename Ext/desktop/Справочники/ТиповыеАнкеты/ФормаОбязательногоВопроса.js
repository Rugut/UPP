Ext.define('Справочники.ТиповыеАнкеты.ФормаОбязательногоВопроса',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:294px;height:303px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка обязательности ответа на вопрос',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Надпись1',
			style: 'position:absolute;left:25px;top:109px;width:261px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВопросУсловия',
			style: 'position:absolute;left:25px;top:140px;width:261px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'получен ответ',
			style: 'position:absolute;left:25px;top:163px;width:80px;height:16px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Ответ',
			style: 'position:absolute;left:160px;top:183px;width:126px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Надпись3',
			style: 'position:absolute;left:8px;top:8px;width:278px;height:16px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:159px;top:182px;width:127px;height:88px;',
			height: 88,width: 127,
			columns:
			[
				{
					text:'Значение списка',
					width:'100',
					dataIndex:'ЗначениеСписка',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ТиповыеАнкеты/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ЗначениеСписка',
					},
				]
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УсловиеОтвета',
			style: 'position:absolute;left:25px;top:183px;width:129px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Не обязателен к заполнению',
			style: 'position:absolute;left:8px;top:28px;width:168px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Всегда обязателен к заполнению',
			style: 'position:absolute;left:8px;top:47px;width:189px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Обязателен к заполнению при условии...',
			style: 'position:absolute;left:8px;top:66px;width:229px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Не заполнять при условии...',
			style: 'position:absolute;left:8px;top:86px;width:229px;height:15px;',
		},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:278px;width:294px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});