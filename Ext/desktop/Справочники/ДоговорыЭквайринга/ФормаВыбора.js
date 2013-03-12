Ext.define('Справочники.ДоговорыЭквайринга.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:658px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Договоры эквайринга',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:642px;height:259px;',
			height: 259,width: 642,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'35',
				},
				{
					text:'Наименование',
					width:'175',
				},
				{
					text:'Эквайрер',
					width:'210',
				},
				{
					text:'Договор',
					width:'194',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:658px;height:25px;',
			items:
			[
				{
					text:'Действия формы выбрать',
				},
				'-',
			]
		},
	]
});