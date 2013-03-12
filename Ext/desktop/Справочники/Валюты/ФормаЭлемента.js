Ext.define('Справочники.Валюты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:432px;height:397px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Валюта',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:322px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:364px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
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
			xtype: 'label',
			name: 'НадписьНаименованиеПолное',
			text: 'Полностью:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;',
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
					text:'',
					width:'20',
				},
				{
					text:'Период',
					width:'84',
				},
				{
					text:'Валюта',
					width:'70',
				},
				{
					text:'Курс',
					width:'133',
				},
				{
					text:'Кратность',
					width:'70',
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
			xtype: 'label',
			name: 'НадписьПолеПрописи4наРусском',
			text: 'Род:',
			style: 'position:absolute;left:20px;top:105px;width:28px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи1наРусском',
			text: 'один:',
			style: 'position:absolute;left:126px;top:105px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПрописи1наРусском',
			style: 'position:absolute;left:164px;top:105px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи2наРусском',
			text: 'два:',
			style: 'position:absolute;left:226px;top:105px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПрописи2наРусском',
			style: 'position:absolute;left:264px;top:105px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи3наРусском',
			text: 'пять:',
			style: 'position:absolute;left:326px;top:105px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПрописи3наРусском',
			style: 'position:absolute;left:364px;top:105px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи8наРусском',
			text: 'Род:',
			style: 'position:absolute;left:20px;top:153px;width:28px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи5наРусском',
			text: 'один:',
			style: 'position:absolute;left:126px;top:153px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПрописи5наРусском',
			style: 'position:absolute;left:164px;top:153px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи6наРусском',
			text: 'два:',
			style: 'position:absolute;left:226px;top:153px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПрописи6наРусском',
			style: 'position:absolute;left:264px;top:153px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи7наРусском',
			text: 'пять:',
			style: 'position:absolute;left:326px;top:153px;width:36px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеПрописи7наРусском',
			style: 'position:absolute;left:364px;top:153px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописиДлинаДробнойЧасти',
			text: 'Количество разрядов при выводе дробной части в виде числа:',
			style: 'position:absolute;left:20px;top:177px;width:342px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:372px;width:432px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Записать',
				},
				'-',
				{
					text:'ОК',
				},
			]
		},
	]
});