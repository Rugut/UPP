Ext.define('Документы.УстановкаТиповЦенПоГруппамНоменклатурыДляПокупателей.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 406,width: 656,
	iconCls: 'bogus',
	title: 'Установка типов цен по группам номенклатуры для покупателей',
	
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:98px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:198px;top:81px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:656px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю2',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель5',
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
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
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
			style: 'position:absolute;left:8px;top:149px;width:640px;height:178px;',
			height: 178,width: 640,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НоменклатурнаяЦеноваяГруппа',
				},
				{
					text:'ТипЦен',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:125px;width:640px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Подбор',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:331px;width:552px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:354px;width:552px;height:19px;',
		},
	]
});