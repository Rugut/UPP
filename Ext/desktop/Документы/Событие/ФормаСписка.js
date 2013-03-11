Ext.define('Документы.Событие.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 261,width: 736,
	iconCls: 'bogus',
	title: 'События',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:720px;height:220px;',
			height: 220,width: 720,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'СостояниеСобытия',
				},
				{
					text:'Дата',
				},
				{
					text:'Номер',
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
					text:'КонтактноеЛицо',
				},
				{
					text:'ОписаниеСобытия',
				},
				{
					text:'Ответственный',
				},
				{
					text:'Проект',
				},
				{
					text:'СодержаниеСобытия',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:736px;height:25px;',
			items:
			[
				{
					text:'Разделитель7',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Содержание',
				},
				{
					text:'ДействиеПечать',
				},
				{
					text:'Разделитель8',
				},
			]
		},
	]
});