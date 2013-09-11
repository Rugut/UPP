Ext.require(['Данные.Отчеты.ОтчетОКонтактнойИнформации'], function () 
{
	Ext.define('Отчеты.ОтчетОКонтактнойИнформации.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:409px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отчет о контактной информации',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:604px;height:25px;',
			width: 604,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Cформировать',
					tooltip:'Cформировать',
				},
				{
					text:'На принтер',
					tooltip:'Отправить форму на принтер',
				},
				'-',
				{
					text:'Настройка ...',
					tooltip:'Настройка отчета',
				},
				{
					text:'Новый отчет',
					tooltip:'Открыть новый отчет',
				},
				{
					text:'Быстрые отборы',
					tooltip:'Быстрые отборы',
				},
				{
					text:'Заголовок отчета',
					tooltip:'Заголовок отчета',
				},
				'-',
				{
					text:'Восстановить значения...',
					tooltip:'Восстановить значения',
				},
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
				{
					text:'Закрыть',
					tooltip:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
					tooltip:'dd879fc-c1d8-47b1-bffc-a6f07c894cd',
				},
				'-',
				{
					text:'На принтер',
					tooltip:'Отправить форму на принтер',
				},
				'-',
				{
					text:'Настройка ...',
					tooltip:'Настройка отчета',
				},
				'-',
				{
					text:'Новый отчет',
					tooltip:'Открыть новый отчет',
				},
				'-',
				{
					text:'Быстрые отборы',
					tooltip:'Быстрые отборы',
				},
				{
					text:'Заголовок отчета',
					tooltip:'Заголовок отчета',
				},
				'-',
				{
					text:'Восстановить значения...',
					tooltip:'Восстановить значения',
				},
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:57px;width:588px;height:24px;',
			height: 24,width: 588,
			tabBar:{hidden:true},
			items:
			[
				{
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
			width: 370,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Объект отчета (контактной информации):',
			style: 'position:absolute;left:8px;top:33px;width:216px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});