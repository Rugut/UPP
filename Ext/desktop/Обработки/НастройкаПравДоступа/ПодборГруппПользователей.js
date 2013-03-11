Ext.define('Обработки.НастройкаПравДоступа.ПодборГруппПользователей',
	{
	extend: 'Ext.window.Window',
	height: 330,width: 354,
	iconCls: 'bogus',
	title: 'Подбор групп пользователей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:305px;width:354px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыВыполнить',
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:338px;height:267px;',
			height: 267,width: 338,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'Код',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:354px;height:26px;',
			items:
			[
			]
		},
	]
});