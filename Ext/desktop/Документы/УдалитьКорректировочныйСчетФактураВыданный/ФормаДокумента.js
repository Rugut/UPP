Ext.define('Документы.УдалитьКорректировочныйСчетФактураВыданный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:551px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировочный счет-фактура выданный',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:32px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:214px;top:32px;width:20px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:500px;width:112px;height:19px;',
		},
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:526px;width:780px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:476px;width:112px;height:19px;',
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
			xtype: 'label',
			name: 'НадписьКонтрагент',
			text: 'Контрагент:
',
			style: 'position:absolute;left:8px;top:80px;width:104px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДоговорКонтрагента',
			text: 'Договор:
',
			style: 'position:absolute;left:430px;top:80px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:56px;width:104px;height:19px;',
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
					title:'Товары и услуги',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:751px;height:256px;',
			height: 256,width: 751,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Номенклатура',
					width:'180',
				},
				{
					text:'Наименование
номенклатуры',
					width:'100',
				},
				{
					text:'Единица',
					width:'60',
				},
				{
					text:'Количество 
до изменения',
					width:'100',
				},
				{
					text:'Количество
после изменения',
					width:'100',
				},
				{
					text:'Цена
до изменения',
					width:'100',
				},
				{
					text:'Цена
после изменения',
					width:'100',
				},
				{
					text:'Стоимость без НДС
до изменения',
					width:'120',
				},
				{
					text:'Стоимость без НДС
после изменения',
					width:'100',
				},
				{
					text:'Разница без НДС
к уменьшению',
					width:'100',
				},
				{
					text:'Разница без НДС
к доплате',
					width:'100',
				},
				{
					text:'Ставка НДС',
					width:'60',
				},
				{
					text:'Сумма НДС
до изменения',
					width:'100',
				},
				{
					text:'Сумма НДС
после изменения',
					width:'100',
				},
				{
					text:'Разница НДС
к уменьшению',
					width:'100',
				},
				{
					text:'Разница НДС
к доплате',
					width:'100',
				},
				{
					text:'Стоимость с НДС
до изменения',
					width:'100',
				},
				{
					text:'Стоимость с НДС
после изменения',
					width:'100',
				},
				{
					text:'Разница с НДС
к уменьшению',
					width:'100',
				},
				{
					text:'Разница с НДС
к доплате',
					width:'100',
				},
				{
					text:'Вид ценности',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:751px;height:24px;',
			items:
			[
				{
					text:'Заполнить по счету-фактуре',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьФИОГлавногоБухгалтера',
			text: 'Главный бухгалтер:',
			style: 'position:absolute;left:407px;top:186px;width:110px;height:19px;',
		},
					]
				},
				{
					title:'Реквизиты счета-фактуры',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПродавца',
			text: 'Наименование продавца:',
			style: 'position:absolute;left:6px;top:6px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПродавца',
			style: 'position:absolute;left:150px;top:6px;width:607px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресПродавца',
			text: 'Адрес продавца:',
			style: 'position:absolute;left:6px;top:30px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПродавца',
			style: 'position:absolute;left:150px;top:30px;width:607px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИННПродавца',
			text: 'ИНН / КПП продавца:',
			style: 'position:absolute;left:6px;top:54px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИННПродавца',
			style: 'position:absolute;left:150px;top:54px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПППродавца',
			text: '/',
			style: 'position:absolute;left:270px;top:54px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПППродавца',
			style: 'position:absolute;left:290px;top:54px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПокупателя',
			text: 'Наименование покупателя:',
			style: 'position:absolute;left:6px;top:82px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПокупателя',
			style: 'position:absolute;left:150px;top:82px;width:607px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресПокупателя',
			text: 'Адрес покупателя:',
			style: 'position:absolute;left:6px;top:106px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'АдресПокупателя',
			style: 'position:absolute;left:150px;top:106px;width:607px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИННПокупателя',
			text: 'ИНН / КПП покупателя:',
			style: 'position:absolute;left:6px;top:130px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИННПокупателя',
			style: 'position:absolute;left:150px;top:130px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКПППокупателя',
			text: '/',
			style: 'position:absolute;left:270px;top:130px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КПППокупателя',
			style: 'position:absolute;left:290px;top:130px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФИОРуководителя',
			text: 'Руководитель:',
			style: 'position:absolute;left:6px;top:186px;width:144px;height:19px;',
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
			xtype: 'label',
			name: 'НадписьСвидетельствоИП',
			text: 'Свидетельство ИП:',
			style: 'position:absolute;left:6px;top:210px;width:144px;height:19px;',
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
		{
			xtype: 'label',
			name: 'НадписьВалютаДокумента',
			text: 'Валюта:',
			style: 'position:absolute;left:6px;top:158px;width:144px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСчетФактура',
			text: 'Счет-фактура:',
			style: 'position:absolute;left:8px;top:104px;width:104px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отразить вычет НДС',
			style: 'position:absolute;left:8px;top:452px;width:212px;height:19px;',
		},
	]
});