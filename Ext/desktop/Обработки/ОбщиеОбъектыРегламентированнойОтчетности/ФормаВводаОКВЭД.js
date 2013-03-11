Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаВводаОКВЭД',
	{
	extend: 'Ext.window.Window',
	height: 59,width: 166,
	iconCls: 'bogus',
	title: 'ОКВЭД',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:34px;width:166px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'ОсновныеДействияФормыОк',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВведитеКодОКВЭД',
			style: 'position:absolute;left:92px;top:7px;width:66px;height:19px;',
		},
	]
});