Ext.require(['Данные.Документы.Встречи'], function () 
{
	Ext.define('Документы.Встречи.РасшифровкаЗанятости',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:641px;height:130px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: '<ФИО|Помещение>',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:641px;height:25px;',
			width: 641,
			height: 25,
			items:
			[
				{
					text:'Открыть документ занятости',
					tooltip:'Открыть документ занятости',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Наименование',
			text: 'Наименование',
			style: 'position:absolute;left:8px;top:25px;width:625px;height:22px;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеЗанятости',
			text: 'ОписаниеЗанятости',
			style: 'position:absolute;left:8px;top:52px;width:625px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокумент',
			text: 'Документ',
			style: 'position:absolute;left:8px;top:87px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Документ',
			text: 'Документ',
			style: 'position:absolute;left:207px;top:87px;width:426px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефоны',
			text: 'Телефоны',
			style: 'position:absolute;left:8px;top:107px;width:194px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Телефоны',
			text: 'Телефоны',
			style: 'position:absolute;left:207px;top:107px;width:426px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});