Ext.define('Справочники.ДоходыЕСН.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 487,
	iconCls: 'bogus',
	title: 'Способы отражения доходов в учете ЕСН',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:471px;height:280px;',
			height: 280,width: 471,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'ВходитВБазуФедеральныйБюджет',
				},
				{
					text:'ВходитВБазуФОМС',
				},
				{
					text:'ВходитВБазуФСС',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:487px;height:25px;',
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