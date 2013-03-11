Ext.define('Документы.ВводПостоянногоНачисленияИлиУдержанияСотрудникамОрганизации.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 420,width: 1000,
	iconCls: 'bogus',
	title: 'Постоянные начисления или удержания сотрудникам организации',
	
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
					text:'Организация',
				},
				{
					text:'КраткийСоставДокумента',
				},
				{
					text:'Действие',
				},
				{
					text:'ВидРасчета',
				},
				{
					text:'ДатаДействия',
				},
				{
					text:'ДатаДействияКонец',
				},
				{
					text:'Комментарий',
				},
				{
					text:'Ответственный',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействияФормыВыбрать',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});