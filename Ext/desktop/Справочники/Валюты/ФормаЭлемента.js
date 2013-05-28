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
			style: 'position:absolute;left:322px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 60,
			height: 19,
			style: 'position:absolute;left:364px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 222,
			height: 19,
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
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПолное',
			width: 326,
			height: 19,
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
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Период',
					width:'84',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Валюта',
					width:'70',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Курс',
					width:'133',
					dataIndex:'Курс',
					flex:1,
				},
				{
					text:'Кратность',
					width:'70',
					dataIndex:'Кратность',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Валюты/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Период',
					},
					{
						name:'Валюта',
					},
					{
						name:'Курс',
					},
					{
						name:'Кратность',
					},
				]
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:220px;width:416px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:48px;top:105px;width:76px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры прописи целой части для русского языка',
			style: 'position:absolute;left:8px;top:85px;width:416px;height:16px;',
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
			style: 'position:absolute;left:126px;top:105px;width:36px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеПрописи1наРусском',
			width: 60,
			height: 19,
			style: 'position:absolute;left:164px;top:105px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи2наРусском',
			text: 'два:',
			style: 'position:absolute;left:226px;top:105px;width:36px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеПрописи2наРусском',
			width: 60,
			height: 19,
			style: 'position:absolute;left:264px;top:105px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи3наРусском',
			text: 'пять:',
			style: 'position:absolute;left:326px;top:105px;width:36px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеПрописи3наРусском',
			width: 60,
			height: 19,
			style: 'position:absolute;left:364px;top:105px;width:60px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:48px;top:153px;width:76px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Параметры прописи дробной части для русского языка',
			style: 'position:absolute;left:8px;top:133px;width:416px;height:16px;',
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
			style: 'position:absolute;left:126px;top:153px;width:36px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеПрописи5наРусском',
			width: 60,
			height: 19,
			style: 'position:absolute;left:164px;top:153px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи6наРусском',
			text: 'два:',
			style: 'position:absolute;left:226px;top:153px;width:36px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеПрописи6наРусском',
			width: 60,
			height: 19,
			style: 'position:absolute;left:264px;top:153px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи7наРусском',
			text: 'пять:',
			style: 'position:absolute;left:326px;top:153px;width:36px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеПрописи7наРусском',
			width: 60,
			height: 19,
			style: 'position:absolute;left:364px;top:153px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописиДлинаДробнойЧасти',
			text: 'Количество разрядов при выводе дробной части в виде числа:',
			style: 'position:absolute;left:20px;top:177px;width:342px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:364px;top:177px;width:60px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:372px;width:432px;height:25px;',
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
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'История курсов',
			style: 'position:absolute;left:8px;top:204px;width:416px;height:16px;',
		},
	],
	dockedItems:
	[
	]
});