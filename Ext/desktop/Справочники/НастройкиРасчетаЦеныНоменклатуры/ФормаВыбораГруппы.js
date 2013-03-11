Ext.define('Справочники.НастройкиРасчетаЦеныНоменклатуры.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 487,
	iconCls: 'bogus',
	title: 'Справочник Настройки расчета цены номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:471px;height:259px;',
			height: 259,width: 471,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:487px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДействияФормыВыбрать',
				},
			]
		},
	]
});