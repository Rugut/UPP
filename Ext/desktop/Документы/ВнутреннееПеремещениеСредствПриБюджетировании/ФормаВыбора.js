Ext.define('Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 660,
	iconCls: 'bogus',
	title: 'Внутренние перемещения средств при бюджетировании',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:644px;height:380px;',
			height: 380,width: 644,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
				},
				{
					text:'ПериодПланирования',
				},
				{
					text:'Сценарий',
				},
				{
					text:'СтатьяОборотов',
				},
				{
					text:'Сумма',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:660px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Файлы1',
				},
			]
		},
	]
});