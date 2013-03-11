Ext.define('Отчеты.ВедомостьВозвратнаяТара.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 260,width: 362,
	iconCls: 'bogus',
	title: 'Группировки отчета',
	
	items:
	[
		{
			xtype: 'button',
			name: 'УстановитьВсе',
			text: '',
			style: 'position:absolute;left:330px;top:8px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'СнятьВсе',
			text: '',
			style: 'position:absolute;left:330px;top:37px;width:24px;height:24px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:320px;height:220px;',
			height: 220,width: 320,
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
			style: 'position:absolute;left:188px;top:233px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Отмена',
			text: 'Отмена',
			style: 'position:absolute;left:274px;top:233px;width:80px;height:19px;',
		},
	]
});