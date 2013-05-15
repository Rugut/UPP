Ext.define('Документы.РаспределениеМатериаловНаВыпуск.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:74px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка документа',
	
	items:
	[
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать подразделения НЗП',
			style: 'position:absolute;left:8px;top:26px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать наработку',
			style: 'position:absolute;left:8px;top:6px;width:384px;height:15px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:49px;width:400px;height:25px;',
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
					text:'Закрыть',
				},
			]
		},
	]
});