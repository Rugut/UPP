Ext.define('Справочники.СценарииПланирования.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:543px;height:291px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сценарии планирования',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:529px;height:225px;',
			height: 225,width: 529,
			items:
			[
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:6px;top:6px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:157px;top:6px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Периодичность:',
			style: 'position:absolute;left:6px;top:58px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Периодичность',
			style: 'position:absolute;left:157px;top:58px;width:364px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Детализация планирования:',
			style: 'position:absolute;left:6px;top:32px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДетализацияПланирования',
			style: 'position:absolute;left:157px;top:32px;width:364px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учет по суммам (планирование продаж, производства, закупок)',
			style: 'position:absolute;left:6px;top:110px;width:350px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учет по количеству (планирование продаж, производства, закупок)',
			style: 'position:absolute;left:6px;top:132px;width:370px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Валюта планирования:',
			style: 'position:absolute;left:6px;top:84px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Валюта',
			style: 'position:absolute;left:157px;top:84px;width:107px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать курсы сценария',
			style: 'position:absolute;left:6px;top:154px;width:180px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:399px;top:6px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			style: 'position:absolute;left:441px;top:6px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Курсы валют',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВалютаКурсов',
			style: 'position:absolute;left:58px;top:6px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ВалютаТекст',
			text: 'Валюта:',
			style: 'position:absolute;left:6px;top:6px;width:50px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:79px;width:515px;height:120px;',
			height: 120,width: 515,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Период',
					width:'80',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Курс',
					width:'80',
					dataIndex:'Курс',
					flex:1,
				},
				{
					text:'Кратность',
					width:'80',
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
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СценарииПланирования/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Период',
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
			xtype: 'fieldset',
			title: 'История курсов',
			style: 'position:absolute;left:6px;top:35px;width:515px;height:16px;',
		},
		{
			xtype: 'button',
			name: 'Заполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:144px;top:6px;width:80px;height:19px;',
		},
					]
				},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:266px;width:543px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:543px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Записать',
				},
				{
					text:'Записать и закрыть',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				{
					text:'Скопировать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});