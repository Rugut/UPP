Ext.define('Обработки.ЗагрузкаДанныхИзТабличногоДокумента.ФормаВыбораЗначения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:316px;height:60px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выберите значение',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Значение',
			width: 300,
			height: 19,
			style: 'position:absolute;left:8px;top:8px;width:300px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ОК',
			text: 'ОК',
			style: 'position:absolute;left:143px;top:34px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Отмена',
			text: 'Отмена',
			style: 'position:absolute;left:228px;top:34px;width:80px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
});