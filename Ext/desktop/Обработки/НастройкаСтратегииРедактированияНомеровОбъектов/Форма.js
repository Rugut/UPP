Ext.define('Обработки.НастройкаСтратегииРедактированияНомеровОбъектов.Форма',
	{
	extend: 'Ext.window.Window',
	height: 376,width: 554,
	iconCls: 'bogus',
	title: 'Настройка стратегии редактирования номеров (кодов) объектов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:351px;width:554px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыВыполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:538px;height:311px;',
			height: 311,width: 538,
			columns:
			[
				{
					text:'Объект',
				},
				{
					text:'СтратегияРедактирования',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:8px;width:538px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ОбновитьНумерациюТекущегоОбъекта',
				},
				{
					text:'ОбновитьНумерациюВсехОбъектов',
				},
				{
					text:'ЗаполнитьПоУмолчанию',
				},
				{
					text:'ПодменюОбновитьНумерацию',
				},
			]
		},
	]
});