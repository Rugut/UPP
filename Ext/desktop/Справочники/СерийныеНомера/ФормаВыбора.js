Ext.define('Справочники.СерийныеНомера.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 400,
	iconCls: 'bogus',
	title: 'Серийные номера',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Владелец',
				},
				{
					text:'Код',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
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