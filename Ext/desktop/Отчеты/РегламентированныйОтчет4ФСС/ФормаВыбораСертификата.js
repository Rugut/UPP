Ext.define('Отчеты.РегламентированныйОтчет4ФСС.ФормаВыбораСертификата',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:657px;height:255px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выберите сертификат',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Открыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:641px;height:214px;',
			height: 214,width: 641,
			columns:
			[
				{
					text:'Представление',
					width:'120',
				},
				{
					text:'Начало действия',
					width:'120',
				},
				{
					text:'Конец действия',
					width:'120',
				},
				{
					text:'Отпечаток',
					width:'240',
				},
				{
					text:'Поставщик',
					width:'120',
				},
				{
					text:'Серийный номер',
					width:'120',
				},
			]
		},
	]
});