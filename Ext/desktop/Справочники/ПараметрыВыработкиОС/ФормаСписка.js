Ext.define('Справочники.ПараметрыВыработкиОС.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 362,
	iconCls: 'bogus',
	title: 'Параметры выработки ОС',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:346px;height:280px;',
			height: 280,width: 346,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'ЕдиницаИзмерения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:362px;height:25px;',
			items:
			[
			]
		},
	]
});