Ext.define('Справочники.НастройкиРасчетаЦеныНоменклатуры.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 516,
	iconCls: 'bogus',
	title: 'Справочник Настройки расчета цены номенклатуры',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:500px;height:259px;',
			height: 259,width: 500,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:516px;height:25px;',
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