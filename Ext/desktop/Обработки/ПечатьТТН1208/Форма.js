Ext.define('Обработки.ПечатьТТН1208.Форма',
	{
	extend: 'Ext.window.Window',
	height: 579,width: 997,
	iconCls: 'bogus',
	title: 'Печать ТТН',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Документ',
			style: 'position:absolute;left:90px;top:4px;width:430px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:3px;top:30px;width:990px;height:544px;',
			height: 544,width: 990,
			items:
			[
				{
					title:'Страница1_Т',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МаркаАвтомобиля',
			style: 'position:absolute;left:112px;top:21px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МаркаПрицепа',
			style: 'position:absolute;left:112px;top:45px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГосНомерАвтомобиля',
			style: 'position:absolute;left:376px;top:21px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГосНомерПрицепа',
			style: 'position:absolute;left:376px;top:45px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПунктПогрузки',
			style: 'position:absolute;left:112px;top:252px;width:400px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Перевозчик',
			style: 'position:absolute;left:112px;top:159px;width:400px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заказчик',
			style: 'position:absolute;left:112px;top:183px;width:400px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПунктРазгрузки',
			style: 'position:absolute;left:112px;top:228px;width:400px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокДоставки',
			style: 'position:absolute;left:112px;top:297px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Водитель',
			style: 'position:absolute;left:112px;top:90px;width:400px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидПеревозки',
			style: 'position:absolute;left:112px;top:321px;width:400px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВодительскоеУдостоверение',
			style: 'position:absolute;left:112px;top:114px;width:400px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГосНомерАвтомобиля2',
			style: 'position:absolute;left:376px;top:21px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦен',
			style: 'position:absolute;left:112px;top:366px;width:400px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:988px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
					]
				},
				{
					title:'СтраницаПриложение4',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:988px;height:25px;',
			items:
			[
				{
					text:'ПечатьТТНПриложение4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
			]
		},
					]
				},
				{
					title:'СтраницаСопроводительнаяВедомость',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:499px;width:988px;height:25px;',
			items:
			[
				{
					text:'ПечатьВедомостьПриложение4',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
			]
		},
					]
				},
			]
		},
	]
});