Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаВводаСвидетельствоАкцизы',
	{
	extend: 'Ext.window.Window',
	height: 83,width: 181,
	iconCls: 'bogus',
	title: 'Свидетельство',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:58px;width:181px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'ОсновныеДействияФормыОк',
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
			name: 'СвидСерия',
			style: 'position:absolute;left:60px;top:7px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СвидНомер',
			style: 'position:absolute;left:60px;top:31px;width:113px;height:19px;',
		},
	]
});