Ext.define('Документы.БюджетнаяОперация.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 403,width: 718,
	iconCls: 'bogus',
	title: 'Бюджетные операции',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:133px;width:702px;height:260px;',
			height: 260,width: 702,
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
			style: 'position:absolute;left:0px;top:0px;width:718px;height:25px;',
			items:
			[
				{
					text:'Дополнительно',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ИзменениеДокументовБюджетирования',
				},
				{
					text:'ПакетныйВводБюджетныхОпераций',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ОборотыПоСтатьям',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Файлы',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Отбор',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:702px;height:99px;',
			height: 99,width: 702,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});