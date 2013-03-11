Ext.define('Документы.ВводСведенийОПлановыхНачисленияхУдержанияхРаботников.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 721,
	iconCls: 'bogus',
	title: 'Сведения о начислениях и удержаниях сотрудников (ввод)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:705px;height:380px;',
			height: 380,width: 705,
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
					text:'Подразделение',
				},
				{
					text:'КраткийСоставДокумента',
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
			style: 'position:absolute;left:0px;top:0px;width:721px;height:25px;',
			items:
			[
				{
					text:'Подменю2',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});