Ext.define('Справочники.НематериальныеАктивы.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 316,
	iconCls: 'bogus',
	title: 'Группы нематериальных активов и расходов на НИОКР',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:300px;height:259px;',
			height: 259,width: 300,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:316px;height:25px;',
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