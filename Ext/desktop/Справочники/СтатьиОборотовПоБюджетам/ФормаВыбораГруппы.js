Ext.define('Справочники.СтатьиОборотовПоБюджетам.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 312,
	iconCls: 'bogus',
	title: 'Группы статей оборотов по бюджетам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:296px;height:280px;',
			height: 280,width: 296,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:312px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});