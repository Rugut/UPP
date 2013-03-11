Ext.define('Обработки.НастройкиПрограммы.ИспользованиеРегистраСвободныеОстатки',
	{
	extend: 'Ext.window.Window',
	height: 188,width: 533,
	iconCls: 'bogus',
	title: 'Установка параметра программы - Использовать регистр ""Свободные остатки""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:163px;width:533px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыИзменитьНастройку',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИспользоватьСвободныеОстаткиДатаНачала',
			style: 'position:absolute;left:177px;top:33px;width:85px;height:19px;',
		},
	]
});