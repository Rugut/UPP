Ext.define('Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 551,width: 780,
	iconCls: 'bogus',
	title: 'Корректировочный счет-фактура выданный',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:112px;top:32px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:120px;top:500px;width:653px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие6',
				},
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
					text:'Действие7',
				},
				{
					text:'ДействиеСвойства',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:526px;width:780px;height:25px;',
			items:
			[
				{
					text:'РазделительЗаписать',
				},
				{
					text:'ОК',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительЗакрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:120px;top:476px;width:653px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:234px;top:32px;width:136px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:112px;top:56px;width:258px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:112px;top:80px;width:258px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:520px;top:80px;width:253px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетФактура',
			style: 'position:absolute;left:112px;top:104px;width:661px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:133px;width:765px;height:312px;',
			height: 312,width: 765,
			items:
			[
				{
					title:'ТоварыИУслугиРеализация',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:751px;height:256px;',
			height: 256,width: 751,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'НаименованиеНоменклатуры',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'КоличествоДоИзменения',
				},
				{
					text:'КоличествоПослеИзменения',
				},
				{
					text:'ЦенаДоИзменения',
				},
				{
					text:'ЦенаПослеИзменения',
				},
				{
					text:'СтоимостьБезНДСДоИзменения',
				},
				{
					text:'СтоимостьБезНДСПослеИзменения',
				},
				{
					text:'РазницаБезНДСКУменьшению',
				},
				{
					text:'РазницаБезНДСКДоплате',
				},
				{
					text:'СтавкаНДС',
				},
				{
					text:'СуммаНДСДоИзменения',
				},
				{
					text:'СуммаНДСПослеИзменения',
				},
				{
					text:'РазницаНДСКУменьшению',
				},
				{
					text:'РазницаНДСКДоплате',
				},
				{
					text:'СтоимостьСНДСДоИзменения',
				},
				{
					text:'СтоимостьСНДСПослеИзменения',
				},
				{
					text:'РазницаСНДСКУменьшению',
				},
				{
					text:'РазницаСНДСКДоплате',
				},
				{
					text:'ВидЦенности',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:751px;height:24px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ЗаполнитьПоСчетуФактуре',
				},
			]
		},
					]
				},
				{
					title:'РеквизитыСчетаФактуры',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПродавца',
			style: 'position:absolute;left:150px;top:6px;width:607px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПродавца',
			style: 'position:absolute;left:150px;top:30px;width:607px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИННПродавца',
			style: 'position:absolute;left:150px;top:54px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПППродавца',
			style: 'position:absolute;left:290px;top:54px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПокупателя',
			style: 'position:absolute;left:150px;top:82px;width:607px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПокупателя',
			style: 'position:absolute;left:150px;top:106px;width:607px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИННПокупателя',
			style: 'position:absolute;left:150px;top:130px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПППокупателя',
			style: 'position:absolute;left:290px;top:130px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФИОРуководителя',
			style: 'position:absolute;left:150px;top:186px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФИОГлавногоБухгалтера',
			style: 'position:absolute;left:517px;top:186px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СвидетельствоИП',
			style: 'position:absolute;left:150px;top:210px;width:607px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:150px;top:158px;width:80px;height:19px;',
		},
					]
				},
			]
		},
	]
});