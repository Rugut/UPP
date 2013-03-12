Ext.define('Справочники.ДоверенностиНалогоплательщика.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Доверенности налогоплательщика',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'61',
				},
				{
					text:'Наименование',
					width:'253',
				},
				{
					text:'Организация',
					width:'183',
				},
				{
					text:'Дата окончания',
					width:'90',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
			]
		},
	]
});