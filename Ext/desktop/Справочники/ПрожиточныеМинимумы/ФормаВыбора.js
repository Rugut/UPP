Ext.define('Справочники.ПрожиточныеМинимумы.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 482,
	iconCls: 'bogus',
	title: 'Прожиточные минимумы субъектов РФ, в целом по РФ',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:466px;height:259px;',
			height: 259,width: 466,
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
			style: 'position:absolute;left:0px;top:0px;width:482px;height:25px;',
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