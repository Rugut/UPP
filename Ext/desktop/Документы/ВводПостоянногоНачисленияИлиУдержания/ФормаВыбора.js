Ext.define('Документы.ВводПостоянногоНачисленияИлиУдержания.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 420,width: 1000,
	iconCls: 'bogus',
	title: 'Документы Ввод постоянного начисления или удержания',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:984px;height:379px;',
			height: 379,width: 984,
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
					text:'КраткийСоставДокумента',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'Действие',
				},
				{
					text:'ДатаДействия',
				},
				{
					text:'ДатаДействияКонец',
				},
				{
					text:'Ответственный',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю2',
				},
			]
		},
	]
});