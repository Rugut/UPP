Ext.define('Справочники.ПроизвольныеОтчеты.НастройкаИсточникаДанных',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:359px;height:291px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка источника данных',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:266px;width:359px;height:25px;',
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:132px;width:343px;height:126px;',
			height: 126,width: 343,
			columns:
			[
				{
					text:'Параметр источника',
					width:'179',
					dataIndex:'Параметр',
					flex:1,
				},
				{
					text:'Параметр схемы',
					width:'136',
					dataIndex:'ПутьКДанным',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПроизвольныеОтчеты/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Параметр',
					},
					{
						name:'ПутьКДанным',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНаборДанных',
			text: 'Набор данных:',
			style: 'position:absolute;left:8px;top:8px;width:85px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:95px;top:8px;width:256px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипИсточникаДанныхОтчета',
			text: 'Тип источника:',
			style: 'position:absolute;left:8px;top:32px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:56px;width:343px;height:45px;',
			height: 45,width: 343,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Отчет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьИмяИсточника',
			text: 'Отчет:',
			style: 'position:absolute;left:0px;top:0px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИмяИсточника',
			style: 'position:absolute;left:87px;top:0px;width:256px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНастройка',
			text: 'Настройка:',
			style: 'position:absolute;left:0px;top:24px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НастройкаОтчета',
			style: 'position:absolute;left:87px;top:24px;width:256px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНастройка1',
			text: 'Настройка:',
			style: 'position:absolute;left:0px;top:24px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмяИсточника1',
			text: 'Отчет:',
			style: 'position:absolute;left:0px;top:0px;width:84px;height:19px;text-align:left;',
		},
					]
				},
				{
					title:'Произвольный отчет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СохраненнаяНастройка',
			style: 'position:absolute;left:87px;top:24px;width:256px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроизвольныйОтчет',
			style: 'position:absolute;left:87px;top:0px;width:256px;height:19px;',
		},
					]
				},
				{
					title:'Внешняя обработка',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОбработка',
			text: 'Обработка:',
			style: 'position:absolute;left:0px;top:0px;width:85px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВнешняяОбработка',
			style: 'position:absolute;left:87px;top:0px;width:256px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:95px;top:32px;width:256px;height:19px;',
		},
	]
});