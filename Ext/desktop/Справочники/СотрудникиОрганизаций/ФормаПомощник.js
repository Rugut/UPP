Ext.define('Справочники.СотрудникиОрганизаций.ФормаПомощник',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 600,
	iconCls: 'bogus',
	title: 'Помощник приема на работу',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:600px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ШагВперед',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:182px;top:0px;width:418px;height:425px;',
			height: 425,width: 418,
			items:
			[
				{
					title:'ПерсональныеДанные',
				},
				{
					title:'УсловияПриема',
				},
				{
					title:'ОплатаТруда',
				},
				{
					title:'ДополнительнаяИнформация',
				},
				{
					title:'Готово',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:181px;height:425px;',
			height: 425,width: 181,
			items:
			[
				{
					title:'СтраницаНастройки',
				},
				{
					title:'СтраницаГотово',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:324px;top:425px;width:151px;height:25px;',
			items:
			[
				{
					text:'ШагНазад',
				},
			]
		},
	]
});