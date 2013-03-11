Ext.define('Документы.УстановкаПорядкаЗакрытияПодразделений.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 346,width: 636,
	iconCls: 'bogus',
	title: 'Установка порядка закрытия подразделений',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:636px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:321px;width:636px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:271px;width:533px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:294px;width:533px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:122px;width:619px;height:144px;',
			height: 144,width: 619,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Подразделение',
				},
				{
					text:'ВидПодразделения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:98px;width:619px;height:24px;',
			items:
			[
				{
					text:'ЗаполнитьПодразделения',
				},
				{
					text:'ПодменюЗаполнить',
				},
			]
		},
	]
});