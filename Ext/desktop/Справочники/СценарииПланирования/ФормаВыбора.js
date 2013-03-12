Ext.define('Справочники.СценарииПланирования.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:590px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сценарии планирования',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:176px;top:33px;width:406px;height:259px;',
			height: 259,width: 406,
			columns:
			[
				{
					text:'',
					width:'35',
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
			style: 'position:absolute;left:0px;top:0px;width:590px;height:25px;',
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