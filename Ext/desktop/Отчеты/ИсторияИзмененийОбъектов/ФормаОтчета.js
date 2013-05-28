Ext.define('Отчеты.ИсторияИзмененийОбъектов.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:485px;height:389px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'История изменений объектов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:56px;width:469px;height:105px;',
			height: 105,width: 469,
			columns:
			[
				{
					text:'№',
					width:'45',
					dataIndex:'НомерВерсии',
					flex:1,
				},
				{
					text:'Дата',
					width:'119',
					dataIndex:'ДатаВерсии',
					flex:1,
				},
				{
					text:'Автор изменений',
					width:'189',
					dataIndex:'АвторВерсии',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ИсторияИзмененийОбъектов/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'НомерВерсии',
					},
					{
						name:'ДатаВерсии',
					},
					{
						name:'АвторВерсии',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьОбъект',
			text: 'Объект:',
			style: 'position:absolute;left:8px;top:32px;width:43px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СсылкаНаОбъект',
			width: 425,
			height: 19,
			style: 'position:absolute;left:52px;top:32px;width:425px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:485px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Показать версию',
				},
				'-',
				{
					text:'Сравнить версии',
				},
				'-',
				{
					text:'Обновить список версий',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});