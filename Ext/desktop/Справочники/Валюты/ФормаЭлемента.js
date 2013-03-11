Ext.define('Справочники.Валюты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 397,width: 432,
	iconCls: 'bogus',
	title: 'Валюта',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:364px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:33px;width:222px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:432px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:98px;top:57px;width:326px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:244px;width:416px;height:120px;',
			height: 120,width: 416,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Период',
				},
				{
					text:'Валюта',
				},
				{
					text:'Курс',
				},
				{
					text:'Кратность',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:220px;width:416px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПрописи1наРусском',
			style: 'position:absolute;left:164px;top:105px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПрописи2наРусском',
			style: 'position:absolute;left:264px;top:105px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПрописи3наРусском',
			style: 'position:absolute;left:364px;top:105px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПрописи5наРусском',
			style: 'position:absolute;left:164px;top:153px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПрописи6наРусском',
			style: 'position:absolute;left:264px;top:153px;width:60px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПрописи7наРусском',
			style: 'position:absolute;left:364px;top:153px;width:60px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:372px;width:432px;height:25px;',
			items:
			[
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'ОК',
				},
			]
		},
	]
});