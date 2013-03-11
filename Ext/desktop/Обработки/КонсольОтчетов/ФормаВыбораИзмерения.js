Ext.define('Обработки.КонсольОтчетов.ФормаВыбораИзмерения',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 400,
	iconCls: 'bogus',
	title: 'Выбор группировки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:400px;height:25px;',
			items:
			[
				{
					text:'Отмена',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});