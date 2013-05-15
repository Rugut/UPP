Ext.define('Обработки.ПерерасчетЗарплатыОрганизаций.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:380px;height:342px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Перерасчет зарплаты организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:73px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:83px;top:33px;width:289px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:83px;width:364px;height:226px;',
			height: 226,width: 364,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Документ',
					width:'291',
					dataIndex:'Документ',
					flex:1,
				},
				{
					text:'Месяц',
					width:'71',
					dataIndex:'ПериодРегистрации',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПерерасчетЗарплатыОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Пометка',
					},
					{
						name:'Документ',
					},
					{
						name:'ПериодРегистрации',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьТекущийПериод',
			text: 'Текущий период регистрации документов:',
			style: 'position:absolute;left:8px;top:58px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ТекущийПериод',
			style: 'position:absolute;left:231px;top:58px;width:141px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:317px;width:380px;height:25px;',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:380px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Снять пометки физического лица',
				},
				'-',
				{
					text:'Перерассчитать',
				},
				'-',
				{
					text:'Отказаться от перерасчета',
				},
				'-',
				{
					text:'Перерассчитать текущим периодом',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});