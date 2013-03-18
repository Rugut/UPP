Ext.define('Обработки.ПоискИЗаменаДублирующихсяЭлементов.ФормаОтбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:359px;height:392px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Значения настроек',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:367px;width:359px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
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
			style: 'position:absolute;left:8px;top:9px;width:343px;height:350px;',
			height: 350,width: 343,
			columns:
			[
				{
					text:'Представление',
					width:'276',
				},
				{
					text:'',
					width:'21',
				},
				{
					text:'',
					width:'72',
				},
			]
		},
	]
});