Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РОКИМастерАвтонастройкиНовойУчетнойЗаписи',
	{
	extend: 'Ext.window.Window',
	height: 400,width: 600,
	iconCls: 'bogus',
	title: 'Автоматическая настройка параметров учетной записи абонентов ""Такском""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:375px;width:600px;height:25px;',
			items:
			[
				{
					text:'Назад',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Далее',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:375px;',
			height: 375,width: 600,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:64px;',
			height: 64,width: 600,
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
			style: 'position:absolute;left:0px;top:276px;width:600px;height:99px;',
			height: 99,width: 600,
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
				{
					title:'Страница2',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:64px;',
			height: 64,width: 600,
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
			style: 'position:absolute;left:0px;top:276px;width:600px;height:99px;',
			height: 99,width: 600,
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:28px;top:141px;width:560px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:29px;top:192px;width:372px;height:20px;',
			height: 20,width: 372,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИНН',
			style: 'position:absolute;left:74px;top:0px;width:97px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПП',
			style: 'position:absolute;left:275px;top:1px;width:97px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Страница3',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:64px;',
			height: 64,width: 600,
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
			style: 'position:absolute;left:0px;top:276px;width:600px;height:99px;',
			height: 99,width: 600,
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'СертификатШифрованиеФайл',
			style: 'position:absolute;left:130px;top:143px;width:458px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СертификатШифрованиеКонтейнер',
			style: 'position:absolute;left:130px;top:170px;width:458px;height:19px;',
		},
					]
				},
				{
					title:'Страница4',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СертификатРуководителя',
			style: 'position:absolute;left:130px;top:143px;width:458px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СертификатРуководителяКонтейнер',
			style: 'position:absolute;left:130px;top:170px;width:458px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:64px;',
			height: 64,width: 600,
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
			style: 'position:absolute;left:0px;top:276px;width:600px;height:99px;',
			height: 99,width: 600,
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
				{
					title:'Страница5',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СертификатБухгалтера',
			style: 'position:absolute;left:130px;top:143px;width:458px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СертификатБухгалтераКонтейнер',
			style: 'position:absolute;left:130px;top:170px;width:458px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:64px;',
			height: 64,width: 600,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:276px;width:600px;height:99px;',
			height: 99,width: 600,
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
				{
					title:'Страница6',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:64px;',
			height: 64,width: 600,
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
			style: 'position:absolute;left:0px;top:276px;width:600px;height:99px;',
			height: 99,width: 600,
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
	]
});