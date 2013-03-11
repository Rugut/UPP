Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаВводаФИО',
	{
	extend: 'Ext.window.Window',
	height: 59,width: 378,
	iconCls: 'bogus',
	title: 'Фамилия, имя, отчество',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:34px;width:378px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОк',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:46px;top:7px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:168px;top:7px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:270px;top:7px;width:100px;height:19px;',
		},
	]
});