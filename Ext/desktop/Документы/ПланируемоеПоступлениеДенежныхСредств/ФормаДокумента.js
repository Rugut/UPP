Ext.define('Документы.ПланируемоеПоступлениеДенежныхСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 657,
	iconCls: 'bogus',
	title: 'Планируемое поступление денежных средств',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:657px;height:25px;',
			items:
			[
				{
					text:'Разделитель11',
				},
				{
					text:'Файлы1',
				},
				{
					text:'Разделитель12',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ПодменюВидаОперации',
				},
				{
					text:'ДействиеСвойства',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеКатегории',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:641px;height:127px;',
			height: 127,width: 641,
			items:
			[
				{
					title:'Расчеты',
				},
				{
					title:'ПолучениеИзКассыККМ',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:96px;top:57px;width:100px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:336px;width:657px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'ОК',
				},
				{
					text:'Печать',
				},
				{
					text:'Записать',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Закрыть1',
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
			name: 'ДатаПоступления',
			style: 'position:absolute;left:424px;top:33px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:285px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:424px;top:285px;width:225px;height:19px;',
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
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:309px;width:553px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЦФО',
			style: 'position:absolute;left:96px;top:261px;width:220px;height:19px;',
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
			name: 'БанковскийСчетКасса',
			style: 'position:absolute;left:96px;top:213px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:424px;top:213px;width:225px;height:19px;',
		},
	]
});