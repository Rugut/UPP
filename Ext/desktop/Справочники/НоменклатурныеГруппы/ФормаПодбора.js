Ext.define('Справочники.НоменклатурныеГруппы.ФормаПодбора',
	{
	extend: 'Ext.window.Window',
	height: 444,width: 484,
	iconCls: 'bogus',
	title: 'Номенклатурные группы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:468px;height:355px;',
			height: 355,width: 468,
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:484px;height:25px;',
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