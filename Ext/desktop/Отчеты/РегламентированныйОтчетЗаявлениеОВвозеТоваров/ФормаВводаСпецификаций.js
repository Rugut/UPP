Ext.define('Отчеты.РегламентированныйОтчетЗаявлениеОВвозеТоваров.ФормаВводаСпецификаций',
	{
	extend: 'Ext.window.Window',
	height: 217,width: 247,
	iconCls: 'bogus',
	title: 'Спецификации',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:192px;width:247px;height:25px;',
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