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
				},
				{
					text:'Параметр схемы',
					width:'136',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНаборДанных',
			text: 'Набор данных:',
			style: 'position:absolute;left:8px;top:8px;width:85px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипИсточникаДанныхОтчета',
			text: 'Тип источника:',
			style: 'position:absolute;left:8px;top:32px;width:85px;height:19px;',
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
			style: 'position:absolute;left:0px;top:0px;width:84px;height:19px;',
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
			style: 'position:absolute;left:0px;top:0px;width:84px;height:19px;',
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
	]
});