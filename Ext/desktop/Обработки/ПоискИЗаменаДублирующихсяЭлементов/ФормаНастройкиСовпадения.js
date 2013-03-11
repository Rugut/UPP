Ext.define('Обработки.ПоискИЗаменаДублирующихсяЭлементов.ФормаНастройкиСовпадения',
	{
	extend: 'Ext.window.Window',
	height: 165,width: 339,
	iconCls: 'bogus',
	title: 'Настройка обработки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:140px;width:339px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
			]
		},
	]
});