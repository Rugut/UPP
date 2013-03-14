Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПодождитеПожалуйста',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:53px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подождите, пожалуйста...',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьСостояние',
			text: 'Производится проверка наличия обновлений модуля документооборота с контролирующими органами...',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:36px;text-align:center;',
		},
	]
});