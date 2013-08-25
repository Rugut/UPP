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