Ext.define('Отчеты.ОтчетОКонтактнойИнформации.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:409px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет о контактной информации',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:588px;height:24px;',
			height: 24,width: 588,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Объект',
			style: 'position:absolute;left:0px;top:0px;width:76px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВидаСравненияОбъект',
			width: 132,
			height: 19,
			style: 'position:absolute;left:81px;top:0px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиОбъект',
			width: 370,
			height: 19,
			style: 'position:absolute;left:218px;top:0px;width:370px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:226px;top:33px;width:370px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Объект отчета (контактной информации):',
			style: 'position:absolute;left:8px;top:33px;width:216px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Cформировать',
				},
				{
					text:'На принтер',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Новый отчет',
				},
				{
					text:'Быстрые отборы',
				},
				{
					text:'Заголовок отчета',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'На принтер',
				},
				'-',
				{
					text:'Настройка ...',
				},
				'-',
				{
					text:'Новый отчет',
				},
				'-',
				{
					text:'Быстрые отборы',
				},
				{
					text:'Заголовок отчета',
				},
				'-',
				{
					text:'Восстановить значения...',
				},
				{
					text:'Сохранить значения...',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});