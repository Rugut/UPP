Ext.define('Отчеты.АнализСчетаХозрасчетный.ФормаНастройкаПоСубконто',
	{
	extend: 'Ext.window.Window',
	height: 290,width: 236,
	iconCls: 'bogus',
	title: 'Субконто',
	
	items:
	[
		{
			xtype: 'button',
			name: 'УстановитьВсе',
			text: '',
			style: 'position:absolute;left:8px;top:8px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'СнятьВсе',
			text: '',
			style: 'position:absolute;left:38px;top:8px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'ПереместитьВверх',
			text: '',
			style: 'position:absolute;left:68px;top:8px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'ПереместитьВниз',
			text: '',
			style: 'position:absolute;left:98px;top:8px;width:24px;height:24px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:265px;width:236px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});