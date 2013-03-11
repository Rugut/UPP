Ext.define('Документы.ЗаявкаНаОткрытиеСчетов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 720,
	iconCls: 'bogus',
	title: 'Заявка на открытие счетов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:704px;height:280px;',
			height: 280,width: 704,
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
					text:'Организация',
				},
				{
					text:'КраткийСоставДокумента',
				},
				{
					text:'Ответственный',
				},
				{
					text:'ОбработаноВБанке',
				},
				{
					text:'Комментарий',
				},
				{
					text:'БанковскийСчет',
				},
				{
					text:'Валюта',
				},
				{
					text:'НомерДоговора',
				},
				{
					text:'ТекстПодтверждения',
				},
				{
					text:'ВидВклада',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ЛицевыеСчетаРаботниковОрганизации',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Подменю',
				},
			]
		},
	]
});