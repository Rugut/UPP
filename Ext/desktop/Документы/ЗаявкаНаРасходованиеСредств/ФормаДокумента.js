Ext.define('Документы.ЗаявкаНаРасходованиеСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 372,width: 657,
	iconCls: 'bogus',
	title: 'Документ Заявка на расходование средств',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'Файлы1',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'Разделитель12',
				},
				{
					text:'Разделитель11',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ДействиеСвойства',
				},
				{
					text:'ДействиеКатегории',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:85px;width:641px;height:159px;',
			height: 159,width: 641,
			items:
			[
				{
					title:'Расчеты',
				},
				{
					title:'ВыдачаПодотчетнику',
				},
				{
					title:'ВыдачаКассеККМ',
				},
				{
					title:'Прочие',
				},
				{
					title:'Описание',
				},
				{
					title:'Размещение',
				},
				{
					title:'Бюджетирование',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БанковскийСчетКасса',
			style: 'position:absolute;left:424px;top:249px;width:225px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:96px;top:56px;width:100px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:347px;width:657px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
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
			name: 'ФормаОплаты',
			style: 'position:absolute;left:424px;top:57px;width:225px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаРасхода',
			style: 'position:absolute;left:424px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:296px;width:225px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:96px;top:320px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:249px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсДокумента',
			style: 'position:absolute;left:233px;top:57px;width:83px;height:19px;',
		},
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
			name: 'ЦФО',
			style: 'position:absolute;left:96px;top:296px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:424px;top:320px;width:225px;height:19px;',
		},
	]
});