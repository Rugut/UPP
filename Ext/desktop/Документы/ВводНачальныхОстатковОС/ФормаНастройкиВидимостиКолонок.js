Ext.define('Документы.ВводНачальныхОстатковОС.ФормаНастройкиВидимостиКолонок',
	{
	extend: 'Ext.window.Window',
	height: 390,width: 500,
	iconCls: 'bogus',
	title: 'Настройка видимости колонок',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:365px;width:500px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:455px;height:322px;',
			height: 322,width: 455,
			columns:
			[
				{
					text:'Реквизит',
				},
			]
		},
		{
			xtype: 'button',
			name: 'СнятьПометки',
			text: '',
			style: 'position:absolute;left:468px;top:8px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'УстановитьПометки',
			text: '',
			style: 'position:absolute;left:468px;top:37px;width:24px;height:24px;',
		},
	]
});