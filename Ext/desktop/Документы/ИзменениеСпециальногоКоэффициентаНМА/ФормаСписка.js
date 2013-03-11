Ext.define('Документы.ИзменениеСпециальногоКоэффициентаНМА.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 622,
	iconCls: 'bogus',
	title: 'Изменения понижающего коэффициента для расчета амортизации НМА (налоговый учет)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:606px;height:380px;',
			height: 380,width: 606,
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
					text:'Проведен',
				},
				{
					text:'Организация',
				},
				{
					text:'Ответственный',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:622px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
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
			]
		},
	]
});