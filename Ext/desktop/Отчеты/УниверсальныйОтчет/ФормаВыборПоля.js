Ext.define('Отчеты.УниверсальныйОтчет.ФормаВыборПоля',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор поля',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:412px;width:400px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:396px;',
			height: 396,width: 384,
			columns:
			[
				{
					text:'Доступные поля',
					width:'100',
				},
				{
					text:'Путь к данным',
					width:'100',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'Детальная запись',
					width:'100',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'',
					width:'30',
				},
			]
		},
	]
});