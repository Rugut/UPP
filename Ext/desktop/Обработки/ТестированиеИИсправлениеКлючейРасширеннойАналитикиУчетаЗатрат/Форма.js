Ext.define('Обработки.ТестированиеИИсправлениеКлючейРасширеннойАналитикиУчетаЗатрат.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:196px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Тестирование и исправление ключей аналитики',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:171px;width:400px;height:25px;',
			items:
			[
				'-',
				{
					text:'Выполнить',
				},
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Проверки и режимы:',
			style: 'position:absolute;left:8px;top:9px;width:384px;height:15px;',
		},
	]
});