Ext.define('Отчеты.ТоварныйКалендарь.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 239,width: 365,
	iconCls: 'bogus',
	title: 'Группировки отчета',
	
	items:
	[
		{
			xtype: 'button',
			name: 'УстановитьВсе',
			text: '',
			style: 'position:absolute;left:333px;top:8px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'СнятьВсе',
			text: '',
			style: 'position:absolute;left:333px;top:37px;width:24px;height:24px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:320px;height:196px;',
			height: 196,width: 320,
			columns:
			[
				{
					text:'ПредставлениеПоля',
				},
			]
		},
		{
			xtype: 'button',
			name: 'ОК',
			text: 'ОК',
			style: 'position:absolute;left:168px;top:213px;width:76px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Отмена',
			text: 'Отмена',
			style: 'position:absolute;left:253px;top:213px;width:75px;height:19px;',
		},
	]
});