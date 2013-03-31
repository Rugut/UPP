Ext.define('Отчеты.ПробныйБалансМеждународный.ФормаНастройкаПоСубконто',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:262px;height:259px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Субконто',
	
	items:
	[
		{
			xtype: 'button',
			name: 'УстановитьВсе',
			text: '',
			style: 'position:absolute;left:230px;top:8px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'СнятьВсе',
			text: '',
			style: 'position:absolute;left:230px;top:37px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'ПереместитьВверх',
			text: '',
			style: 'position:absolute;left:230px;top:66px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'ПереместитьВниз',
			text: '',
			style: 'position:absolute;left:230px;top:95px;width:24px;height:24px;',
		},
		{
			xtype: 'button',
			name: 'ОК',
			text: 'ОК',
			style: 'position:absolute;left:102px;top:233px;width:74px;height:18px;',
		},
		{
			xtype: 'button',
			name: 'Закрыть',
			text: 'Отмена',
			style: 'position:absolute;left:180px;top:233px;width:74px;height:18px;',
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:8px;top:8px;width:220px;height:220px;',
		},
	]
});