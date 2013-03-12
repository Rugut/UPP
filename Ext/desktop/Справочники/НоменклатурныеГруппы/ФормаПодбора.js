Ext.define('Справочники.НоменклатурныеГруппы.ФормаПодбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:484px;height:444px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'72',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:484px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Количество',
			style: 'position:absolute;left:14px;top:417px;width:82px;height:19px;',
		},
	]
});