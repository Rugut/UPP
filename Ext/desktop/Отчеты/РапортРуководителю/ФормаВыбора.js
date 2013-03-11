Ext.define('Отчеты.РапортРуководителю.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 294,width: 238,
	iconCls: 'bogus',
	title: 'Показатели рапорта',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:269px;width:238px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:10px;top:33px;width:220px;height:228px;',
			height: 228,width: 220,
			columns:
			[
				{
					text:'ПредставлениеПоказателя',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:10px;top:8px;width:220px;height:24px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'СнятьПометки',
				},
			]
		},
	]
});