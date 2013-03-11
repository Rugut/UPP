Ext.define('Документы.РаспределениеПрочихЗатрат.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 74,width: 400,
	iconCls: 'bogus',
	title: 'Настройка документа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:49px;width:400px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
	]
});