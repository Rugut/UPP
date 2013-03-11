Ext.define('Справочники.Проекты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 540,
	iconCls: 'bogus',
	title: 'Проекты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:186px;top:33px;width:346px;height:259px;',
			height: 259,width: 346,
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:172px;height:259px;',
			height: 259,width: 172,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:540px;height:25px;',
			items:
			[
				{
					text:'Действие12',
				},
			]
		},
	]
});