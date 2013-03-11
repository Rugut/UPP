Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ИнформацияДляПользователей',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 720,
	iconCls: 'bogus',
	title: 'Особенности текущей версии подсистемы ""Регламентированная отчетность""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:720px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});