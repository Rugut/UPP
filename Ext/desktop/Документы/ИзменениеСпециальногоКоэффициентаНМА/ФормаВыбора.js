Ext.define('Документы.ИзменениеСпециальногоКоэффициентаНМА.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 589,
	iconCls: 'bogus',
	title: 'Изменения понижающего коэффициента для расчета амортизации НМА (налоговый учет)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:573px;height:380px;',
			height: 380,width: 573,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ОтражатьВНалоговомУчете',
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
					text:'Ответственный',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:589px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
	]
});