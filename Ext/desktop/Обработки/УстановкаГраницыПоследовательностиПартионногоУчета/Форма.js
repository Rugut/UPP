Ext.define('Обработки.УстановкаГраницыПоследовательностиПартионногоУчета.Форма',
	{
	extend: 'Ext.window.Window',
	height: 144,width: 400,
	iconCls: 'bogus',
	title: 'Установка границы последовательности партионного учета',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:119px;width:400px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаДокумент',
			style: 'position:absolute;left:152px;top:68px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:152px;top:92px;width:240px;height:19px;',
		},
	]
});