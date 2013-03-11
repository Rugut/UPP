Ext.define('Отчеты.РегламентированныйОтчет4ФСС.ФормаВыбораСертификата',
	{
	extend: 'Ext.window.Window',
	height: 255,width: 657,
	iconCls: 'bogus',
	title: 'Выберите сертификат',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Выбрать',
				},
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
					text:'Наименование',
				},
				{
					text:'ДействителенС',
				},
				{
					text:'ДействителенПо',
				},
				{
					text:'Отпечаток',
				},
				{
					text:'Поставщик',
				},
				{
					text:'СерийныйНомер',
				},
			]
		},
	]
});