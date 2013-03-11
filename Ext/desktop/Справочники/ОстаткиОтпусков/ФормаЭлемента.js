Ext.define('Справочники.ОстаткиОтпусков.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 324,width: 288,
	iconCls: 'bogus',
	title: 'Остатки отпуска прошлых лет',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:288px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:299px;width:288px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:58px;width:272px;height:233px;',
			height: 233,width: 272,
			items:
			[
				{
					title:'ОдинОтпуск',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОстатков',
			style: 'position:absolute;left:96px;top:0px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоДней',
			style: 'position:absolute;left:96px;top:96px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ДетальныйВвод',
			text: 'Детальный ввод остатков >>',
			style: 'position:absolute;left:97px;top:212px;width:175px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'Рассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:181px;top:95px;width:91px;height:21px;',
		},
					]
				},
				{
					title:'ОтпускаСРабочимиГодами',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:272px;height:111px;',
			height: 111,width: 272,
			columns:
			[
				{
					text:'ГодРаботы',
				},
				{
					text:'ДатаНачалаРабочегоГода',
				},
				{
					text:'ДатаОкончанияРабочегоГода',
				},
				{
					text:'Количество',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:208px;height:24px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Удалить',
				},
				{
					text:'Добавить',
				},
				{
					text:'Рассчитать',
				},
			]
		},
		{
			xtype: 'button',
			name: 'ПростойВвод',
			text: '<< Простой ввод остатков',
			style: 'position:absolute;left:97px;top:212px;width:175px;height:21px;',
		},
					]
				},
			]
		},
	]
});