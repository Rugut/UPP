Ext.define('Обработки.ИзменениеНастроекУчета.ИспользованиеПартионногоУчетаПоСкладамРегл',
	{
	extend: 'Ext.window.Window',
	height: 116,width: 415,
	iconCls: 'bogus',
	title: 'Установка параметра учета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:91px;width:415px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОК',
				},
			]
		},
	]
});