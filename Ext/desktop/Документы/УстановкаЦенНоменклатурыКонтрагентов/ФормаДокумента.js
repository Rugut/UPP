Ext.define('Документы.УстановкаЦенНоменклатурыКонтрагентов.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 343,width: 514,
	iconCls: 'bogus',
	title: 'Установка цен номенклатуры контрагентов',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:32px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:197px;top:32px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:96px;top:56px;width:410px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:97px;top:291px;width:409px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:97px;top:267px;width:409px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:514px;height:25px;',
			items:
			[
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель9',
				},
				{
					text:'Настройка',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:318px;width:514px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительЗаписать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Печать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:80px;width:498px;height:179px;',
			height: 179,width: 498,
			items:
			[
				{
					title:'ЦеныНоменклатуры',
				},
			]
		},
	]
});