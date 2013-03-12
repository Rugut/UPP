Ext.define('Справочники.СтатьиОборотовПоБюджетам.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:495px;height:457px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Статьи оборотов по бюджетам',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:495px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:432px;width:495px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Записать',
				},
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:479px;height:316px;',
			height: 316,width: 479,
			items:
			[
				{
					title:'Основная',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Учет по количеству',
			style: 'position:absolute;left:6px;top:106px;width:120px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учет по сумме',
			style: 'position:absolute;left:6px;top:155px;width:100px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИсточникДанныхДляЦены',
			style: 'position:absolute;left:152px;top:6px;width:319px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмерения',
			style: 'position:absolute;left:152px;top:126px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учет по контрагентам',
			style: 'position:absolute;left:6px;top:203px;width:136px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учет по номенклатуре',
			style: 'position:absolute;left:6px;top:251px;width:136px;height:15px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнаяВалюта',
			style: 'position:absolute;left:152px;top:175px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновноеЦФО',
			style: 'position:absolute;left:152px;top:54px;width:319px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойПроект',
			style: 'position:absolute;left:152px;top:78px;width:319px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнойКонтрагент',
			style: 'position:absolute;left:152px;top:223px;width:319px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновнаяНоменклатура',
			style: 'position:absolute;left:152px;top:271px;width:319px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоказательИсточникаДанныхДляЦены',
			style: 'position:absolute;left:152px;top:30px;width:319px;height:19px;',
		},
					]
				},
				{
					title:'Проводки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:27px;width:465px;height:263px;',
			height: 263,width: 465,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Счет дебета',
					width:'100',
				},
				{
					text:'Счет кредита',
					width:'100',
				},
				{
					text:'К-т для суммы',
					width:'97',
				},
				{
					text:'К-т для количества',
					width:'103',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:465px;height:27px;',
			items:
			[
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
			]
		},
					]
				},
				{
					title:'Данные',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Единица измерения:',
			style: 'position:absolute;left:18px;top:127px;width:132px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Источник для получения фактических данных:',
			style: 'position:absolute;left:9px;top:6px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИсточникДанныхДляФакта',
			style: 'position:absolute;left:251px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Показатель источника для суммы:',
			style: 'position:absolute;left:9px;top:30px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Показатель источника для количества:',
			style: 'position:absolute;left:9px;top:102px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОпределенияВалютыОборотаФакт',
			style: 'position:absolute;left:251px;top:78px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Валюта фактических данных:',
			style: 'position:absolute;left:9px;top:78px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоказательИсточникаДанныхДляФактаСум',
			style: 'position:absolute;left:251px;top:30px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоказательИсточникаДанныхДляФактаКол',
			style: 'position:absolute;left:251px;top:102px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоэффициентДляФактаСум',
			style: 'position:absolute;left:251px;top:54px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Коэффициент пересчета для суммы:',
			style: 'position:absolute;left:6px;top:54px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоэффициентДляФактаКол',
			style: 'position:absolute;left:251px;top:126px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Коэффициент пересчета для количества:',
			style: 'position:absolute;left:6px;top:126px;width:240px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:365px;top:33px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:407px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода2',
			style: 'position:absolute;left:130px;top:33px;width:232px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Полное наименование:',
			style: 'position:absolute;left:8px;top:57px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:130px;top:57px;width:357px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:405px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:130px;top:405px;width:357px;height:19px;',
		},
	]
});