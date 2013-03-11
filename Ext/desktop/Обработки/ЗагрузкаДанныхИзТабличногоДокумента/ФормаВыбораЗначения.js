Ext.define('Обработки.ЗагрузкаДанныхИзТабличногоДокумента.ФормаВыбораЗначения',
	{
	extend: 'Ext.window.Window',
	height: 60,width: 316,
	iconCls: 'bogus',
	title: 'Выберите значение',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Значение',
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
	]
});