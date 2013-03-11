Ext.define('Справочники.НастройкиФормированияДокументовПоОрдерам.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 453,
	iconCls: 'bogus',
	title: 'Группы настроек формирования документов по ордерам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:437px;height:259px;',
			height: 259,width: 437,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:453px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДействияФормыВыбрать',
				},
			]
		},
	]
});