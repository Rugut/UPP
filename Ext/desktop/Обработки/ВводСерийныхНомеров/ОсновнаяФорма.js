Ext.define('Обработки.ВводСерийныхНомеров.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	height: 332,width: 781,
	iconCls: 'bogus',
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
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'Разделитель',
				},
			]
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
			xtype: 'textfield',
			hideLabel: true,
			name: 'Количество',
			style: 'position:absolute;left:142px;top:86px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЕдиницаИзмерения',
			style: 'position:absolute;left:307px;top:86px;width:69px;height:19px;',
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
			items:
			[
				{
					title:'ФормированиеСерийныхНомеров',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:430px;top:50px;width:335px;height:121px;',
			height: 121,width: 335,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'СерийныйНомер',
				},
				{
					text:'КлючСвязи',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:430px;top:26px;width:335px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'СформироватьСерийныеНомера',
				},
				{
					text:'Сформировать',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:50px;width:426px;height:121px;',
			height: 121,width: 426,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Источник',
				},
				{
					text:'Значение',
				},
				{
					text:'ТипРазряда',
				},
				{
					text:'РазмерРазряда',
				},
				{
					text:'НачальноеЗначениеРазряда',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:26px;width:149px;height:24px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Подменю',
				},
				{
					text:'ЗаполнитьПоПорядкуПрисвоения',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокПрисвоенияСерийногоНомера',
			style: 'position:absolute;left:265px;top:28px;width:161px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПримерСерийногоНомера',
			style: 'position:absolute;left:89px;top:175px;width:210px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЗнаков',
			style: 'position:absolute;left:396px;top:175px;width:30px;height:19px;',
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
					title:'ВводСерийныхНомеров',
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
					text:'НомерСтроки',
				},
				{
					text:'СерийныйНомер',
				},
				{
					text:'КлючСвязи',
				},
			]
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