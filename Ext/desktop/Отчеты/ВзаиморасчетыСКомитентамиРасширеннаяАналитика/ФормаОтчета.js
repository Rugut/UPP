Ext.require(['Данные.Отчеты.ВзаиморасчетыСКомитентамиРасширеннаяАналитика'], function () 
{
	Ext.define('Отчеты.ВзаиморасчетыСКомитентамиРасширеннаяАналитика.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:520px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отчет  Взаиморасчеты с комитентами',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:520px;height:25px;',
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
		],
	}],
	dockedItems:
	[
	]
	});
});