Ext.define('Справочники.СтатьиОборотовПоБюджетам.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 457,width: 495,
	iconCls: 'bogus',
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
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
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
					text:'НомерСтроки',
				},
				{
					text:'СчетДт',
				},
				{
					text:'СчетКт',
				},
				{
					text:'КоэффициентДляСуммы',
				},
				{
					text:'КоэффициентДляКоличества',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИсточникДанныхДляФакта',
			style: 'position:absolute;left:251px;top:6px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОпределенияВалютыОборотаФакт',
			style: 'position:absolute;left:251px;top:78px;width:220px;height:19px;',
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоэффициентДляФактаКол',
			style: 'position:absolute;left:251px;top:126px;width:88px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:407px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода2',
			style: 'position:absolute;left:130px;top:33px;width:232px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеПолное',
			style: 'position:absolute;left:130px;top:57px;width:357px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:130px;top:405px;width:357px;height:19px;',
		},
	]
});