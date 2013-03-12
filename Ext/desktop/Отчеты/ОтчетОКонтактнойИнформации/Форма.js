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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Cформировать',
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
				'-',
				{
					text:'Новый отчет',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'На принтер',
				},
				'-',
				{
					text:'Настройка ...',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Действие2',
				},
				{
					text:'Настройка ...',
				},
				{
					text:'Действие3',
				},
				{
					text:'Быстрые отборы',
				},
				'-',
				{
					text:'Заголовок отчета',
				},
				{
					text:'На принтер',
				},
				{
					text:'Действие',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:57px;width:588px;height:24px;',
			height: 24,width: 588,
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
			name: 'ПолеВидаСравненияОбъект',
			style: 'position:absolute;left:81px;top:0px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиОбъект',
			style: 'position:absolute;left:218px;top:0px;width:370px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Объект отчета (контактной информации):',
			style: 'position:absolute;left:8px;top:33px;width:216px;height:19px;',
		},
	]
});