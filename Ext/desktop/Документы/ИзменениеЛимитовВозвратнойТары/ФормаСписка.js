Ext.define('Документы.ИзменениеЛимитовВозвратнойТары.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 421,width: 740,
	iconCls: 'bogus',
	title: 'Изменения лимитов возвратной тары',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:724px;height:380px;',
			height: 380,width: 724,
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
					text:'Контрагент',
				},
				{
					text:'Организация',
				},
				{
					text:'Подразделение',
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
			style: 'position:absolute;left:0px;top:0px;width:740px;height:25px;',
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
					text:'Разделитель13',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеПечать',
				},
			]
		},
	]
});