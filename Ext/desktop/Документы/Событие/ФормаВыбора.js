Ext.define('Документы.Событие.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 680,
	iconCls: 'bogus',
	title: 'События',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:664px;height:259px;',
			height: 259,width: 664,
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
					text:'ТипСобытия',
				},
				{
					text:'ВидСобытия',
				},
				{
					text:'ГруппаСобытия',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Ответственный',
				},
				{
					text:'НапомнитьОСобытии',
				},
				{
					text:'ВремяНапоминания',
				},
				{
					text:'Важность',
				},
				{
					text:'СостояниеСобытия',
				},
				{
					text:'Территория',
				},
				{
					text:'Помещение',
				},
				{
					text:'НачалоСобытия',
				},
				{
					text:'ВидОбъекта',
				},
				{
					text:'Проект',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:680px;height:25px;',
			items:
			[
				{
					text:'Подменю3',
				},
				{
					text:'Действие',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
			]
		},
	]
});