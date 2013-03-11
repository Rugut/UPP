Ext.define('Справочники.НастройкиРасчетаСебестоимости.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 481,
	iconCls: 'bogus',
	title: 'Справочник Настройки расчета себестоимости',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:465px;height:259px;',
			height: 259,width: 465,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:481px;height:25px;',
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