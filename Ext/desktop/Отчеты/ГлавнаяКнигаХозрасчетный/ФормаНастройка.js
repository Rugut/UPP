Ext.define('Отчеты.ГлавнаяКнигаХозрасчетный.ФормаНастройка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:236px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка: Главная книга',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:192px;',
			height: 192,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаНач',
			style: 'position:absolute;left:84px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'ДатаКон',
			style: 'position:absolute;left:184px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:6px;top:6px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:266px;top:6px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:6px;top:30px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:30px;width:382px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Выводить данные',
			style: 'position:absolute;left:6px;top:88px;width:460px;height:16px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:84px;top:54px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Период:',
			style: 'position:absolute;left:6px;top:54px;width:76px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Все периоды',
			style: 'position:absolute;left:272px;top:54px;width:194px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Развернутое сальдо',
			style: 'position:absolute;left:12px;top:108px;width:194px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Разбивать по листам',
			style: 'position:absolute;left:12px;top:127px;width:194px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'По субсчетам кор. счетов',
			style: 'position:absolute;left:12px;top:146px;width:194px;height:15px;',
		},
					]
				},
				{
					title:'Развернутое сальдо',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:32px;width:460px;height:134px;',
			height: 134,width: 460,
			columns:
			[
				{
					text:'Счет',
					width:'120',
					dataIndex:'Счет',
					flex:1,
				},
				{
					text:'По субсчетам',
					width:'78',
					dataIndex:'Субсчета',
					flex:1,
				},
				{
					text:'По субконто',
					width:'249',
					dataIndex:'ПредставлениеРазворотПоСубконто',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГлавнаяКнигаХозрасчетный/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Счет',
					},
					{
						name:'Субсчета',
					},
					{
						name:'ПредставлениеРазворотПоСубконто',
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
			style: 'position:absolute;left:0px;top:211px;width:490px;height:25px;',
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
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});