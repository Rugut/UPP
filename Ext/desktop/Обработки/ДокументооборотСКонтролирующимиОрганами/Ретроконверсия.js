Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Ретроконверсия',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:465px;height:501px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ретроконверсия - параметры ответа',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Изучите сведения, присланные в исходном сообщении от ПФР, после чего подтвердите или опровергните их корректность.\r\nВы можете также подтвердить корректность только части сведений.',
			style: 'position:absolute;left:8px;top:84px;width:449px;height:42px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:128px;width:449px;height:340px;',
			height: 340,width: 449,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:69px;width:449px;height:271px;',
			height: 271,width: 449,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:449px;height:247px;',
			height: 247,width: 449,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Файл сведений',
					width:'179',
					dataIndex:'Файл',
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
						name:'Пометка',
					},
					{
						name:'Файл',
					},
				]
			},
		},
					]
				},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Подтвердить все сведения',
			style: 'position:absolute;left:0px;top:6px;width:164px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отклонить все сведения',
			style: 'position:absolute;left:0px;top:28px;width:150px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Подтвердить только выбранные сведения:',
			style: 'position:absolute;left:0px;top:50px;width:240px;height:15px;',
		},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Подтверждение сведений',
			style: 'position:absolute;left:8px;top:61px;width:449px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Письмо, на которое создается ответ, содержит сведения для проведения ретроконверсии. Ретроконверсия - это процесс перевода ПФР ранее представленных вами сведений из бумажного вида в электронный.',
			style: 'position:absolute;left:8px;top:8px;width:449px;height:43px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:476px;width:465px;height:25px;',
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
			]
		},
	]
});