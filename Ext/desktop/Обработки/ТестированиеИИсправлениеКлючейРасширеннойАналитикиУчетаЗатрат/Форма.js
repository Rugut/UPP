Ext.define('Обработки.ТестированиеИИсправлениеКлючейРасширеннойАналитикиУчетаЗатрат.Форма',
	{
	extend: 'Ext.window.Window',
	height: 196,width: 400,
	iconCls: 'bogus',
	title: 'Тестирование и исправление ключей аналитики',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:171px;width:400px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
				{
					text:'Действие',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
			]
		},
	]
});