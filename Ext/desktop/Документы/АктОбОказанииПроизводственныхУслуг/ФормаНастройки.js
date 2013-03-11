Ext.define('Документы.АктОбОказанииПроизводственныхУслуг.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	height: 194,width: 400,
	iconCls: 'bogus',
	title: 'Настройка документа',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:169px;width:400px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
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