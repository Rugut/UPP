Ext.define('Документы.ВнутреннееПеремещениеСредствПриБюджетировании.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 780,
	iconCls: 'bogus',
	title: 'Внутренние перемещения средств при бюджетировании',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
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
					text:'ВалютаДокумента',
				},
				{
					text:'Сумма',
				},
				{
					text:'ЦФО',
				},
				{
					text:'ЦФОПриемник',
				},
				{
					text:'Проект',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'Состояние',
				},
				{
					text:'Ответственный',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Файлы',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
	]
});