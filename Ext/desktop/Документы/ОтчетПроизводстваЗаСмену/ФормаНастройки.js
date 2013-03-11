Ext.define('Документы.ОтчетПроизводстваЗаСмену.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 434,width: 400,
	iconCls: 'bogus',
	title: 'Настройка документа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:409px;width:400px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});