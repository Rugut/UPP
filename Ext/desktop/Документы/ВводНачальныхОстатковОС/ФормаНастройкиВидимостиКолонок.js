Ext.define('Документы.ВводНачальныхОстатковОС.ФормаНастройкиВидимостиКолонок',
	{
	extend: 'Ext.window.Window',
	height: 390,width: 500,
	iconCls: 'bogus',
	title: 'Настройка видимости колонок',
	
	items: [
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