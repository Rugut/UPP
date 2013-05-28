Ext.define('Отчеты.АнализСостоянияНалоговогоУчетаПоУСН.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1049px;height:600px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Анализ состояния налогового учета по УСН',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:1049px;height:28px;',
			height: 28,width: 1049,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:265px;top:8px;width:70px;height:18px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Организация',
			width: 220,
			height: 19,
			style: 'position:absolute;left:338px;top:7px;width:220px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'НачалоПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:57px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'КонецПериода',
			width: 80,
			height: 19,
			style: 'position:absolute;left:155px;top:7px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:4px;top:8px;width:50px;height:18px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:139px;top:8px;width:15px;height:18px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:239px;top:7px;width:19px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСформировать',
			text: 'Сформировать',
			style: 'position:absolute;left:570px;top:7px;width:119px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Справка',
			text: '',
			style: 'position:absolute;left:1026px;top:7px;width:22px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительная',
					items:
					[
					]
				},
			]
		},
	],
	dockedItems:
	[
	]
});