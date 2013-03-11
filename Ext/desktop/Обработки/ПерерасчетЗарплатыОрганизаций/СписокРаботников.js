Ext.define('Обработки.ПерерасчетЗарплатыОрганизаций.СписокРаботников',
	{
	extend: 'Ext.window.Window',
	height: 292,width: 277,
	iconCls: 'bogus',
	title: 'Выбор по сотрудникам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:261px;height:251px;',
			height: 251,width: 261,
			columns:
			[
				{
					text:'Пометка',
				},
				{
					text:'Работник',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:277px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
	]
});