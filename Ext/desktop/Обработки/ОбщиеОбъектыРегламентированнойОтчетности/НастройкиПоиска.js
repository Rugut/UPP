Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.НастройкиПоиска',
	{
	extend: 'Ext.window.Window',
	height: 98,width: 403,
	iconCls: 'bogus',
	title: 'Поиск',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:73px;width:403px;height:25px;',
			items:
			[
				{
					text:'Искать',
				},
				{
					text:'Справка',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИскомоеЗначение',
			style: 'position:absolute;left:57px;top:9px;width:338px;height:19px;',
		},
	]
});