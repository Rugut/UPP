Ext.define('Справочники.СпособыРаспределенияЗатратНаВыпуск.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:620px;height:463px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Способы распределения затрат',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:505px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:547px;top:33px;width:65px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:164px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:177px;top:33px;width:326px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:412px;width:80px;height:19px;text-align:left;',
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
					text:'OK',
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
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:184px;width:604px;height:222px;',
			height: 222,width: 604,
			items:
			[
				{
					title:'База распределения',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьБазаРаспределенияЗатрат',
			text: 'База распределения:',
			style: 'position:absolute;left:6px;top:6px;width:126px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'БазаРаспределенияЗатрат',
			style: 'position:absolute;left:132px;top:6px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказательБазыРаспределения',
			text: 'Показатель базы распределения:',
			style: 'position:absolute;left:6px;top:25px;width:126px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПоказательБазыРаспределения',
			style: 'position:absolute;left:132px;top:30px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТипЦен',
			text: 'Тип цен:',
			style: 'position:absolute;left:324px;top:30px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦен',
			style: 'position:absolute;left:416px;top:30px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОсновноеСырье',
			text: 'Основное сырье:',
			style: 'position:absolute;left:324px;top:6px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОсновноеСырье',
			style: 'position:absolute;left:416px;top:6px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРаспределенияЗатратПоПодразделениям',
			text: 'Способ распределения по подразделениям:',
			style: 'position:absolute;left:6px;top:169px;width:126px;height:27px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРаспределенияЗатратПоПодразделениям',
			style: 'position:absolute;left:132px;top:173px;width:464px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Распределять на собственную продукцию',
			style: 'position:absolute;left:6px;top:54px;width:306px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Распределять на продукцию стороннего переработчика',
			style: 'position:absolute;left:6px;top:78px;width:306px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Распределять на продукцию из давальческого сырья',
			style: 'position:absolute;left:6px;top:102px;width:306px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Распределять на подчиненные подразделения',
			style: 'position:absolute;left:6px;top:150px;width:306px;height:19px;',
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
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на процент:',
			style: 'position:absolute;left:324px;top:54px;width:158px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Изменить на коэффициент:',
			style: 'position:absolute;left:324px;top:78px;width:158px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Округлить до:',
			style: 'position:absolute;left:324px;top:102px;width:158px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Распределять на наработку',
			style: 'position:absolute;left:6px;top:126px;width:306px;height:15px;',
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьТипФильтраПриРаспределенииЗатратНаВыпуск',
			text: 'Тип фильтра:',
			style: 'position:absolute;left:6px;top:6px;width:156px;height:19px;text-align:left;',
		},
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
					text:'',
					width:'22',
				},
				{
					text:'Поле',
					width:'189',
				},
				{
					text:'Тип сравнения',
					width:'60',
				},
				{
					text:'Значение',
					width:'200',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
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
					text:'N',
					width:'28',
				},
				{
					text:'Номенклатурная группа',
					width:'285',
				},
				{
					text:'Продукция',
					width:'258',
				},
				{
					text:'Коэффициент',
					width:'78',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьКогдаПрименять',
			text: 'Область, условия применения:',
			style: 'position:absolute;left:8px;top:58px;width:164px;height:19px;text-align:left;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			name: 'КогдаПрименять',
			style: 'position:absolute;left:177px;top:58px;width:435px;height:70px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПрименимость',
			text: 'Для каких расходов применять:',
			style: 'position:absolute;left:8px;top:133px;width:164px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаправлениеРаспределения',
			text: 'Куда распределять:',
			style: 'position:absolute;left:8px;top:158px;width:164px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаправлениеРаспределения',
			style: 'position:absolute;left:177px;top:158px;width:135px;height:19px;',
		},
	]
});