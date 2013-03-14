Ext.define('Обработки.ВводСерийныхНомеров.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:781px;height:332px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод серийных номеров',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:781px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:307px;width:781px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Номенклатура (характеристика, серия):',
			style: 'position:absolute;left:8px;top:59px;width:134px;height:27px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:142px;top:59px;width:160px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактеристикаНоменклатуры',
			style: 'position:absolute;left:307px;top:59px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияНоменклатуры',
			style: 'position:absolute;left:452px;top:59px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличество',
			text: 'Количество:',
			style: 'position:absolute;left:8px;top:86px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:142px;top:86px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЕдиницаИзмерения',
			text: 'Единица:',
			style: 'position:absolute;left:239px;top:86px;width:63px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмерения',
			style: 'position:absolute;left:307px;top:86px;width:69px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСтрокиТабличнойЧасти',
			text: 'Номер строки документа:',
			style: 'position:absolute;left:8px;top:33px;width:134px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСтрокиТабличнойЧасти',
			style: 'position:absolute;left:142px;top:33px;width:89px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:105px;width:765px;height:194px;',
			height: 194,width: 765,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Формирование серийных номеров',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:430px;top:50px;width:335px;height:121px;',
			height: 121,width: 335,
			columns:
			[
				{
					text:'N',
					width:'51',
				},
				{
					text:'Серийный номер',
					width:'358',
				},
				{
					text:'Ключ связи',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:430px;top:26px;width:335px;height:24px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:50px;width:426px;height:121px;',
			height: 121,width: 426,
			columns:
			[
				{
					text:'N',
					width:'50',
				},
				{
					text:'Источник',
					width:'82',
				},
				{
					text:'Значение',
					width:'78',
				},
				{
					text:'Тип разряда',
					width:'68',
				},
				{
					text:'Размер разряда',
					width:'50',
				},
				{
					text:'Начальное значение разряда',
					width:'95',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:26px;width:149px;height:24px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПорядокПрисвоенияСерийногоНомера',
			text: 'Порядок присвоения:',
			style: 'position:absolute;left:150px;top:28px;width:115px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокПрисвоенияСерийногоНомера',
			style: 'position:absolute;left:265px;top:28px;width:161px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПримерСерийногоНомера',
			text: 'Пример номера:',
			style: 'position:absolute;left:0px;top:175px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПримерСерийногоНомера',
			style: 'position:absolute;left:89px;top:175px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоЗнаков',
			text: 'Кол-во знаков:',
			style: 'position:absolute;left:305px;top:175px;width:91px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЗнаков',
			style: 'position:absolute;left:396px;top:175px;width:30px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоСерийныхНомеров',
			text: 'Кол-во серийных номеров:',
			style: 'position:absolute;left:596px;top:175px;width:139px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоСерийныхНомеров',
			style: 'position:absolute;left:735px;top:175px;width:30px;height:19px;',
		},
					]
				},
				{
					title:'Ввод серийных номеров',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:26px;width:765px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:50px;width:765px;height:121px;',
			height: 121,width: 765,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Серийный номер',
					width:'184',
				},
				{
					text:'Ключ связи',
					width:'81',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКоличествоСерийныхНомеровВвод',
			text: 'Кол-во серийных номеров:',
			style: 'position:absolute;left:596px;top:175px;width:139px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоСерийныхНомеровВвод',
			style: 'position:absolute;left:735px;top:175px;width:30px;height:19px;',
		},
					]
				},
			]
		},
	]
});