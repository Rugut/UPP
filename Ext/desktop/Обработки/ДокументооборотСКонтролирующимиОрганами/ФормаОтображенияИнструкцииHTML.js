Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаОтображенияИнструкцииHTML',
	{
	extend: 'Ext.window.Window',
	height: 544,width: 1000,
	iconCls: 'bogus',
	title: 'Инструкция',
	
	items:
	[
		{
			xtype: 'button',
			name: 'КнопкаОК',
			text: 'Создать контейнер',
			style: 'position:absolute;left:768px;top:515px;width:115px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'РаспечататьИнструкцию',
			text: 'Распечатать инструкцию',
			style: 'position:absolute;left:184px;top:515px;width:164px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОтмена',
			text: 'Отмена',
			style: 'position:absolute;left:892px;top:515px;width:99px;height:22px;',
		},
	]
});