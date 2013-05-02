Ext.define('Справочники.СохраненныеНастройки.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:551px;height:327px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор настройки',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:60px;width:535px;height:259px;',
			height: 259,width: 535,
			columns:
			[
				{
					text:'Наименование',
					width:'217',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Тип настройки',
					width:'140',
					dataIndex:'ТипНастройки',
					flex:1,
				},
				{
					text:'Настраиваемый объект',
					width:'143',
					dataIndex:'НастраиваемыйОбъект',
					flex:1,
				},
				{
					text:'Описание',
					width:'206',
					dataIndex:'Описание',
					flex:1,
				},
				{
					text:'Пользователи',
					width:'364',
					dataIndex:'Пользователи',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СохраненныеНастройки/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Наименование',
					},
					{
						name:'ТипНастройки',
					},
					{
						name:'НастраиваемыйОбъект',
					},
					{
						name:'Описание',
					},
					{
						name:'Пользователи',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:551px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Сохранить',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:29px;width:535px;height:27px;',
			height: 27,width: 535,
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
			text: 'Наименование:',
			style: 'position:absolute;left:0px;top:4px;width:84px;height:18px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:86px;top:4px;width:449px;height:19px;',
		},
					]
				},
			]
		},
	]
});