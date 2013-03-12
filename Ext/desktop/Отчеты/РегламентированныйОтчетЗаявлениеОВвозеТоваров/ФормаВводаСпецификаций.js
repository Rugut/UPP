Ext.define('Отчеты.РегламентированныйОтчетЗаявлениеОВвозеТоваров.ФормаВводаСпецификаций',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:247px;height:217px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Спецификации',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:192px;width:247px;height:25px;',
			items:
			[
				'-',
				{
					text:'ОК',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:0px;width:231px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:231px;height:154px;',
			height: 154,width: 231,
			columns:
			[
			]
		},
	]
});