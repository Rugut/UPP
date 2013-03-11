Ext.define('Документы.НДФЛВозвратНалога.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 367,width: 668,
	iconCls: 'bogus',
	title: 'Возврат налога на доходы физических лиц',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:410px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:510px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:84px;top:314px;width:576px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:410px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:105px;width:652px;height:24px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие10',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие14',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:129px;width:652px;height:179px;',
			height: 179,width: 652,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ФизЛицо',
				},
				{
					text:'КолонкаЗаголовок',
				},
				{
					text:'СуммаВозвратаПоСтавке13',
				},
				{
					text:'СуммаВозвратаПоСтавке09',
				},
				{
					text:'СуммаВозвратаПоСтавке35',
				},
				{
					text:'КолонкаКодовОП',
				},
				{
					text:'КодПоОКАТО',
				},
				{
					text:'КПП',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:668px;height:25px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'СоздатьЗарплатаКВыплате',
				},
				{
					text:'ПодменюНаОсновании',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие7',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'ПодменюНаОсновании',
				},
				{
					text:'Действие5',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Рассчитать',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:341px;width:668px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'МесяцНалоговогоПериода',
			style: 'position:absolute;left:84px;top:57px;width:220px;height:19px;',
		},
	]
});