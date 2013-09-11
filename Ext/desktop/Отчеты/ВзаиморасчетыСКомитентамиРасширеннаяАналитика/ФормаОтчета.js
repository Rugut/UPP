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
			width: 520,
			height: 25,
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Сформировать',
					tooltip:'Сформировать отчет с текущими настройками',
				},
				'-',
				{
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
				},
				'-',
				{
					text:'Настройки...',
					tooltip:'Редактировать настройки отчета',
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
					text:'Закрыть',
					tooltip:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
					tooltip:'Сформировать отчет с текущими настройками',
				},
				'-',
				{
					text:'Конструктор настроек...',
					tooltip:'Открыть конструктор настроек',
				},
				'-',
				{
					text:'Настройки...',
					tooltip:'Редактировать настройки отчета',
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
		],
	}],
	dockedItems:
	[
	]
	});
});