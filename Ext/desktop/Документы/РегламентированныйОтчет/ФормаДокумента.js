Ext.define('Документы.РегламентированныйОтчет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 89,width: 400,
	iconCls: 'bogus',
	title: 'Документ',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:64px;width:400px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});