Ext.define('Отчеты.ВзаиморасчетыСКомитентамиРасширеннаяАналитика.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:520px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет  Взаиморасчеты с комитентами',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:520px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
			]
		},
	]
});