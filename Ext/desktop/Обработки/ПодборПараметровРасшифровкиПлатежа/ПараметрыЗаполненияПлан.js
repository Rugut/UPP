Ext.define('Обработки.ПодборПараметровРасшифровкиПлатежа.ПараметрыЗаполненияПлан',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:314px;height:237px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка заполнения расшифровки платежа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:212px;width:314px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'Выполнить',
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Подбирать сумму:',
			style: 'position:absolute;left:8px;top:185px;width:116px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаДляПодбора',
			style: 'position:absolute;left:126px;top:185px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:314px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
	]
});