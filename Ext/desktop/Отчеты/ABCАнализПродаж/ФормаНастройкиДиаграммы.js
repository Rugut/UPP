Ext.define('Отчеты.ABCАнализПродаж.ФормаНастройкиДиаграммы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:256px;height:342px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка диаграммы (ABC-анализ продаж)',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:317px;width:256px;height:25px;',
			items:
			[
				'-',
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:29px;width:240px;height:280px;',
			height: 280,width: 240,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Имя показателя',
					width:'220',
				},
			]
		},
	]
});