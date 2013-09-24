Ext.require(['Данные.Обработки.КонструкторСпецификаций'], function () 
{
	Ext.define('Обработки.КонструкторСпецификаций.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:604px;height:418px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: '',
	
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
					text:'Действия',
					menu: [
				{
					text:'Сформировать',
					tooltip:'Выполнить формирование отчета',
				},
				{
					text:'Настройка...',
					tooltip:'Дополнительная настройка',
				},
				{
					text:'Отбор',
					tooltip:'',
				},
				{
					text:'Заголовок',
					tooltip:'Заголовок отчета',
				},
				{
					text:'Восстановить значения...',
					tooltip:'Восстановить значения',
					iconCls:'x-RestoreValues',
				},
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
					iconCls:'x-SaveValues',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
				},
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
					tooltip:'Выполнить формирование отчета',
				},
				'-',
				{
					text:'Отбор',
					tooltip:'',
				},
				'-',
				{
					text:'Заголовок',
					tooltip:'Заголовок отчета',
				},
				'-',
				{
					text:'Настройка...',
					tooltip:'Дополнительная настройка',
				},
				{
					text:'Восстановить значения',
					tooltip:'Восстановить значения',
					iconCls:'x-RestoreValues',
				},
				{
					text:'Сохранить значения...',
					tooltip:'Сохранить значения',
					iconCls:'x-SaveValues',
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
			style: 'position:absolute;left:8px;top:33px;width:588px;height:72px;',
			height: 72,width: 588,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиНоменклатура',
			width: 280,
			height: 19,
			style: 'position:absolute;left:308px;top:0px;width:280px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатура:',
			style: 'position:absolute;left:0px;top:0px;width:144px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:146px;top:0px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиСтатьяЗатрат',
			width: 280,
			height: 19,
			style: 'position:absolute;left:308px;top:24px;width:280px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Статья затрат:',
			style: 'position:absolute;left:0px;top:24px;width:144px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:146px;top:24px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеНастройкиНоменклатурнаяГруппа',
			width: 280,
			height: 19,
			style: 'position:absolute;left:308px;top:48px;width:280px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Номенклатурная группа:',
			style: 'position:absolute;left:0px;top:48px;width:144px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:146px;top:48px;width:160px;height:19px;',
			width: 160,
			height: 19,
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});