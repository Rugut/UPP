Ext.define('Справочники.ВариантыCхемМотивации.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 423,
	iconCls: 'bogus',
	title: 'Временные схемы мотивации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:407px;height:259px;',
			height: 259,width: 407,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:423px;height:25px;',
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