Ext.define('Справочники.СтатьиБюджета.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:551px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статьи бюджета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:369px;height:259px;',
			height: 259,width: 369,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'81',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:259px;',
			height: 259,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:551px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
			]
		},
	]
});