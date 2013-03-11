Ext.define('Документы.ПланПроизводстваПоСменам.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 628,
	iconCls: 'bogus',
	title: 'План производства по сменам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:612px;height:380px;',
			height: 380,width: 612,
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
					text:'Ответственный',
				},
				{
					text:'Подразделение',
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
			style: 'position:absolute;left:0px;top:0px;width:628px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю3',
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