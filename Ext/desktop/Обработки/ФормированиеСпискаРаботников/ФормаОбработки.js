Ext.define('Обработки.ФормированиеСпискаРаботников.ФормаОбработки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:64px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка Формирование списка сотрудников',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Это вспомогательная форма, предназначенная для открытия модального диалога с информацией о том, что обработка является сервисной. ВИЗУАЛЬНО НЕ ОТОБРАЖАЕТСЯ.',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:48px;',
		},
	]
});