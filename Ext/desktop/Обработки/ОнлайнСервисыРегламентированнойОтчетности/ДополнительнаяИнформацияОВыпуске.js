Ext.define('Обработки.ОнлайнСервисыРегламентированнойОтчетности.ДополнительнаяИнформацияОВыпуске',
	{
	extend: 'Ext.window.Window',
	height: 569,width: 532,
	iconCls: 'bogus',
	title: 'Отличия обновления от текущей версии',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:544px;width:532px;height:25px;',
			items:
			[
				{
					text:'Справка',
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
			name: 'ДополнительнаяИнформация',
			style: 'position:absolute;left:8px;top:8px;width:516px;height:528px;',
		},
	]
});