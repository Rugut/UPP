Ext.define('Справочники.КатегорииОбъектов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:464px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Категории объектов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:448px;height:280px;',
			height: 280,width: 448,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Назначение категории',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:464px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});