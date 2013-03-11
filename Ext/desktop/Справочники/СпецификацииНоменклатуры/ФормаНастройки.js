Ext.define('Справочники.СпецификацииНоменклатуры.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 234,width: 400,
	iconCls: 'bogus',
	title: 'Настройка спецификации номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:209px;width:400px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
	]
});