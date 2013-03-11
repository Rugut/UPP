Ext.define('Справочники.ЦеновыеГруппы.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 571,
	iconCls: 'bogus',
	title: 'Справочник Ценовые группы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:555px;height:259px;',
			height: 259,width: 555,
			columns:
			[
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'Порядок',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:571px;height:25px;',
			items:
			[
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});