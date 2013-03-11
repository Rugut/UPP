Ext.define('Документы.БюджетнаяОперация.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 403,width: 718,
	iconCls: 'bogus',
	title: 'Бюджетные операции',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:133px;width:702px;height:260px;',
			height: 260,width: 702,
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
					text:'ПериодПланирования',
				},
				{
					text:'Сценарий',
				},
				{
					text:'СтатьяОборотов',
				},
				{
					text:'ВалютаДокумента',
				},
				{
					text:'Сумма',
				},
				{
					text:'ЦФО',
				},
				{
					text:'Проект',
				},
				{
					text:'Контрагент',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'Состояние',
				},
				{
					text:'Ответственный',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:718px;height:25px;',
			items:
			[
				{
					text:'Дополнительно',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ИзменениеДокументовБюджетирования',
				},
				{
					text:'ПакетныйВводБюджетныхОпераций',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ОборотыПоСтатьям',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Файлы',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель8',
				},
				{
					text:'Отбор',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:702px;height:99px;',
			height: 99,width: 702,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборСценарийЗначение',
			style: 'position:absolute;left:105px;top:0px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборЦФОЗначение',
			style: 'position:absolute;left:445px;top:48px;width:257px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборСтатьяОборотовЗначение',
			style: 'position:absolute;left:105px;top:24px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборПроектЗначение',
			style: 'position:absolute;left:105px;top:48px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодПланированияС',
			style: 'position:absolute;left:445px;top:0px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодПланированияПо',
			style: 'position:absolute;left:573px;top:0px;width:105px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборОтветственный',
			style: 'position:absolute;left:445px;top:24px;width:257px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборКонтрагент',
			style: 'position:absolute;left:105px;top:72px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборНоменклатура',
			style: 'position:absolute;left:445px;top:72px;width:257px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:682px;top:0px;width:20px;height:19px;',
		},
					]
				},
			]
		},
	]
});