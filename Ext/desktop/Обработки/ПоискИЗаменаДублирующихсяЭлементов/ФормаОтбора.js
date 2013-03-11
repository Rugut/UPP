Ext.define('Обработки.ПоискИЗаменаДублирующихсяЭлементов.ФормаОтбора',
	{
	extend: 'Ext.window.Window',
	height: 392,width: 359,
	iconCls: 'bogus',
	title: 'Значения настроек',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:367px;width:359px;height:25px;',
			items:
			[
				{
					text:'КнопкаОК',
				},
				{
					text:'КнопкаОтмена',
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
				},
				{
					text:'ИндексКартинки',
				},
				{
					text:'Значение',
				},
			]
		},
	]
});