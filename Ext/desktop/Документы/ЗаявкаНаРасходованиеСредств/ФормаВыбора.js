Ext.define('Документы.ЗаявкаНаРасходованиеСредств.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 780,
	iconCls: 'bogus',
	title: 'Заявки на расходование средств',
	
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
					text:'ДатаРасхода',
				},
				{
					text:'ВидОперации',
				},
				{
					text:'БанковскийСчетКасса',
				},
				{
					text:'ВалютаДокумента',
				},
				{
					text:'СуммаДокумента',
				},
				{
					text:'Организация',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Состояние',
				},
				{
					text:'Ответственный',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Действие',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Файлы',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});