Ext.define('Обработки.КалендарныйПланЗакупок.Форма',
	{
	extend: 'Ext.window.Window',
	height: 437,width: 700,
	iconCls: 'bogus',
	title: 'Календарный план закупок',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'Помощник1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Обновить1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Обновить',
				},
				{
					text:'СоответствиеЗаказовПокупателейИПоставщикам1',
				},
				{
					text:'СоответствиеЗаказовПокупателейИПоставщикам',
				},
				{
					text:'Помощник',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:412px;width:700px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:684px;height:280px;',
			height: 280,width: 684,
			columns:
			[
				{
					text:'НоменклатураКонтрагентЗаказ',
				},
				{
					text:'НеобходимоеКоличество',
				},
				{
					text:'ЗаказанноеКоличество',
				},
				{
					text:'ЦенаУпрУчета',
				},
				{
					text:'СуммаУпрУчета',
				},
				{
					text:'СуммаВзаиморасчетовЗаказаПредставление',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:143px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:243px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:684px;height:24px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ИсторияОтборов',
				},
				{
					text:'АвтокорректировкаЗаказа',
				},
				{
					text:'ВсеЗаказы',
				},
				{
					text:'ОтборПоТекущемуЗначению',
				},
				{
					text:'АвтокорректировкаЗаказа',
				},
				{
					text:'ОтключитьОтбор',
				},
				{
					text:'НастройкаОтбора',
				},
				{
					text:'НастройкаОтбора',
				},
				{
					text:'ОтключитьОтбор',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действия',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ВсеЗаказы',
				},
				{
					text:'ИсторияОтборов',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'ОтборПоТекущемуЗначению',
				},
				{
					text:'НовыйЗаказ',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'НовыйЗаказ',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:325px;top:33px;width:19px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаОтветственный',
			style: 'position:absolute;left:509px;top:33px;width:183px;height:19px;',
		},
	]
});