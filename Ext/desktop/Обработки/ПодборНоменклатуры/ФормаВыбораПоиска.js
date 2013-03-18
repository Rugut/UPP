Ext.define('Обработки.ПодборНоменклатуры.ФормаВыбораПоиска',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:676px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:296px;width:676px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:660px;height:280px;',
			height: 280,width: 660,
			columns:
			[
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Артикул',
					width:'120',
				},
				{
					text:'Номенклатура',
					width:'120',
				},
				{
					text:'Полное наименование',
					width:'220',
				},
				{
					text:'Группа номенклатуры',
					width:'120',
				},
			]
		},
	]
});