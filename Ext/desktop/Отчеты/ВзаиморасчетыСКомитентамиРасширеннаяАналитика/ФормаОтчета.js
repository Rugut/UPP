Ext.define('Отчеты.ВзаиморасчетыСКомитентамиРасширеннаяАналитика.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:520px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет  Взаиморасчеты с комитентами',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:520px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Конструктор настроек...',
				},
				'-',
				{
					text:'Настройки...',
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
					text:'Конструктор настроек...',
				},
				'-',
				{
					text:'Настройки...',
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