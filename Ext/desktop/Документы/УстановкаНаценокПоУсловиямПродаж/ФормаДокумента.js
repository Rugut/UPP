Ext.define('Документы.УстановкаНаценокПоУсловиямПродаж.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 406,width: 656,
	iconCls: 'bogus',
	title: 'Установка наценок по условиям продаж',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:656px;height:25px;',
			items:
			[
				{
					text:'Подменю2',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:381px;width:656px;height:25px;',
			items:
			[
				{
					text:'Печать',
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
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:81px;width:640px;height:246px;',
			height: 246,width: 640,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НоменклатурнаяЦеноваяГруппа',
				},
				{
					text:'УсловиеПродаж',
				},
				{
					text:'ПроцентНаценки',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:56px;width:640px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:354px;width:552px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:331px;width:552px;height:19px;',
		},
	]
});