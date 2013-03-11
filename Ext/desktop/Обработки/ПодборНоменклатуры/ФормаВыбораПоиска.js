Ext.define('Обработки.ПодборНоменклатуры.ФормаВыбораПоиска',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 676,
	iconCls: 'bogus',
	title: 'Выбор номенклатуры',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:296px;width:676px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОК',
				},
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
				},
				{
					text:'Артикул',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'НаименованиеПолное',
				},
				{
					text:'Родитель',
				},
			]
		},
	]
});