Ext.define('Справочники.НастройкиРасчетаСебестоимости.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 509,
	iconCls: 'bogus',
	title: 'Справочник Настройки расчета себестоимости',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:493px;height:259px;',
			height: 259,width: 493,
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
			style: 'position:absolute;left:0px;top:0px;width:509px;height:25px;',
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