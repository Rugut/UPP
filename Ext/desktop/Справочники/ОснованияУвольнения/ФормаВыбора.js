Ext.define('Справочники.ОснованияУвольнения.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 261,width: 425,
	iconCls: 'bogus',
	title: 'Причины увольнения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:409px;height:220px;',
			height: 220,width: 409,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:425px;height:25px;',
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