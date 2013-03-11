Ext.define('Документы.КорректировкаДолга.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 475,width: 652,
	iconCls: 'bogus',
	title: 'Корректировка долга',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:423px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'Разделитель9',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:450px;width:652px;height:25px;',
			items:
			[
				{
					text:'Записать',
				},
				{
					text:'Печать',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'ОК',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Закрыть1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:130px;width:636px;height:261px;',
			height: 261,width: 636,
			items:
			[
				{
					title:'Взаиморасчеты',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ЗаполнитьОстаткамиПоВзаиморасчетам',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:205px;',
			height: 205,width: 622,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидЗадолженности',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'Сделка',
				},
				{
					text:'ДокументРасчетовСКонтрагентом',
				},
				{
					text:'Валюта',
				},
				{
					text:'Сумма',
				},
				{
					text:'КурсВзаиморасчетов',
				},
				{
					text:'КратностьВзаиморасчетов',
				},
				{
					text:'СуммаРегл',
				},
				{
					text:'СуммаНУ',
				},
				{
					text:'СчетУчетаРасчетов',
				},
				{
					text:'СчетУчетаАвансов',
				},
			]
		},
					]
				},
				{
					title:'УменьшениеДолга',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:622px;height:205px;',
			height: 205,width: 622,
			columns:
			[
				{
					text:'НомерCтроки',
				},
				{
					text:'ВидЗадолженности',
				},
				{
					text:'ДоговорКонтрагента',
				},
				{
					text:'Сделка',
				},
				{
					text:'ДокументРасчетовСКонтрагентом',
				},
				{
					text:'Валюта',
				},
				{
					text:'Сумма',
				},
				{
					text:'КурсВзаиморасчетов',
				},
				{
					text:'КратностьВзаиморасчетов',
				},
				{
					text:'СуммаРегл',
				},
				{
					text:'СуммаНУ',
				},
				{
					text:'СчетУчетаРасчетов',
				},
				{
					text:'СчетУчетаАвансов',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:622px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ЗаполнитьОстаткамиПоВзаиморасчетам',
				},
			]
		},
					]
				},
				{
					title:'ВспомогательныйСчет',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВспомогательныйСчет',
			style: 'position:absolute;left:173px;top:6px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто1',
			style: 'position:absolute;left:173px;top:29px;width:216px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто2',
			style: 'position:absolute;left:173px;top:52px;width:216px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто3',
			style: 'position:absolute;left:173px;top:75px;width:216px;height:19px;',
		},
					]
				},
				{
					title:'СчетаУчета',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетДт',
			style: 'position:absolute;left:128px;top:30px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт1',
			style: 'position:absolute;left:128px;top:53px;width:184px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт2',
			style: 'position:absolute;left:128px;top:76px;width:184px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт3',
			style: 'position:absolute;left:128px;top:99px;width:184px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетКт',
			style: 'position:absolute;left:434px;top:30px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт1',
			style: 'position:absolute;left:433px;top:53px;width:185px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт2',
			style: 'position:absolute;left:433px;top:76px;width:185px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт3',
			style: 'position:absolute;left:433px;top:99px;width:185px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетДтНУ',
			style: 'position:absolute;left:132px;top:147px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДтНУ1',
			style: 'position:absolute;left:132px;top:170px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДтНУ2',
			style: 'position:absolute;left:132px;top:193px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДтНУ3',
			style: 'position:absolute;left:132px;top:216px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетКтНУ',
			style: 'position:absolute;left:433px;top:147px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ1',
			style: 'position:absolute;left:433px;top:170px;width:185px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ2',
			style: 'position:absolute;left:433px;top:193px;width:185px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ3',
			style: 'position:absolute;left:433px;top:216px;width:185px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:100px;top:10px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:100px;top:38px;width:220px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонтрагентКредитор',
			style: 'position:absolute;left:403px;top:81px;width:241px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:403px;top:105px;width:241px;height:19px;',
		},
	]
});