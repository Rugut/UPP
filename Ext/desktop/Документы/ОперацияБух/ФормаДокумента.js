Ext.define('Документы.ОперацияБух.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 634,
	iconCls: 'bogus',
	title: '',
	
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
			name: 'Организация',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаОперации',
			style: 'position:absolute;left:98px;top:81px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:398px;width:528px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:423px;top:57px;width:203px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:634px;height:25px;',
			items:
			[
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:634px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:132px;width:618px;height:261px;',
			height: 261,width: 618,
			items:
			[
				{
					title:'ПроводкиБУ',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:7px;width:604px;height:24px;',
			items:
			[
				{
					text:'ВывестиСписок',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'ПереключитьАктивность',
				},
				{
					text:'УстановитьОтборИСортировкуСписка___',
				},
				{
					text:'ЗаполнитьНУ',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:604px;height:205px;',
			height: 205,width: 604,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'НомерСтроки',
				},
				{
					text:'СчетДт',
				},
				{
					text:'СубконтоДт1',
				},
				{
					text:'СубконтоДт2',
				},
				{
					text:'СубконтоДт3',
				},
				{
					text:'КоличествоДт',
				},
				{
					text:'ВалютаДт',
				},
				{
					text:'ВалютнаяСуммаДт',
				},
				{
					text:'СчетКт',
				},
				{
					text:'СубконтоКт1',
				},
				{
					text:'СубконтоКт2',
				},
				{
					text:'СубконтоКт3',
				},
				{
					text:'КоличествоКт',
				},
				{
					text:'ВалютаКт',
				},
				{
					text:'ВалютнаяСуммаКт',
				},
				{
					text:'Сумма',
				},
				{
					text:'Содержание',
				},
				{
					text:'НомерЖурнала',
				},
			]
		},
					]
				},
				{
					title:'ПроводкиНУ',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:604px;height:24px;',
			items:
			[
				{
					text:'ПереключитьАктивность',
				},
				{
					text:'УстановитьОтборИСортировкуСписка___',
				},
				{
					text:'ВывестиСписок',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:604px;height:205px;',
			height: 205,width: 604,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'НомерСтроки',
				},
				{
					text:'СчетДт',
				},
				{
					text:'КоличествоДт',
				},
				{
					text:'ВидУчетаДт',
				},
				{
					text:'СубконтоДт1',
				},
				{
					text:'СубконтоДт2',
				},
				{
					text:'СубконтоДт3',
				},
				{
					text:'СчетКт',
				},
				{
					text:'КоличествоКт',
				},
				{
					text:'ВидУчетаКт',
				},
				{
					text:'СубконтоКт1',
				},
				{
					text:'СубконтоКт2',
				},
				{
					text:'СубконтоКт3',
				},
				{
					text:'Сумма',
				},
				{
					text:'Содержание',
				},
				{
					text:'НомерЖурнала',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Содержание',
			style: 'position:absolute;left:98px;top:105px;width:528px;height:19px;',
		},
	]
});