Ext.define('Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 463,width: 620,
	iconCls: 'bogus',
	title: 'Способы распределения затрат',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:547px;top:33px;width:65px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:177px;top:33px;width:326px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:412px;width:522px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:620px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:438px;width:620px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
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
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:184px;width:604px;height:222px;',
			height: 222,width: 604,
			items:
			[
				{
					title:'БазаРаспределения',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазаРаспределенияЗатрат',
			style: 'position:absolute;left:132px;top:6px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоказательБазыРаспределения',
			style: 'position:absolute;left:132px;top:30px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦен',
			style: 'position:absolute;left:416px;top:30px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновноеСырье',
			style: 'position:absolute;left:416px;top:6px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРаспределенияЗатратПоПодразделениям',
			style: 'position:absolute;left:132px;top:173px;width:464px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Процент',
			style: 'position:absolute;left:482px;top:54px;width:114px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Коэффициент',
			style: 'position:absolute;left:482px;top:78px;width:114px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПорядокОкругления',
			style: 'position:absolute;left:482px;top:102px;width:114px;height:19px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:590px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:590px;height:163px;',
			height: 163,width: 590,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'Имя',
				},
				{
					text:'ВидСравнения',
				},
				{
					text:'Значение',
				},
				{
					text:'ЗначениеС',
				},
				{
					text:'ЗначениеПо',
				},
			]
		},
					]
				},
				{
					title:'Фильтры',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипФильтраПриРаспределенииЗатратНаВыпуск',
			style: 'position:absolute;left:168px;top:6px;width:278px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:42px;width:590px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:66px;width:590px;height:128px;',
			height: 128,width: 590,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'НоменклатурнаяГруппа',
				},
				{
					text:'Продукция',
				},
				{
					text:'Коэффициент',
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
			name: 'КогдаПрименять',
			style: 'position:absolute;left:177px;top:58px;width:435px;height:70px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаправлениеРаспределения',
			style: 'position:absolute;left:177px;top:158px;width:135px;height:19px;',
		},
	]
});