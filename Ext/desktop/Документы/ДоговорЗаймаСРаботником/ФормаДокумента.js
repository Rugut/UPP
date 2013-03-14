Ext.define('Документы.ДоговорЗаймаСРаботником.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:534px;height:432px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Договор займа с сотрудником',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:14px;top:230px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:230px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:380px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:380px;width:432px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФизЛицо',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись8',
			text: 'Сумма:',
			style: 'position:absolute;left:14px;top:129px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаЗайма',
			style: 'position:absolute;left:94px;top:129px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись9',
			text: 'Валюта:',
			style: 'position:absolute;left:14px;top:155px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:94px;top:155px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Курс:',
			style: 'position:absolute;left:221px;top:155px;width:55px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсДокумента',
			style: 'position:absolute;left:278px;top:155px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Проценты:',
			style: 'position:absolute;left:221px;top:129px;width:55px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентЗаПользованиеЗаймом',
			style: 'position:absolute;left:278px;top:129px;width:80px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Начислять материальную выгоду по ставке:',
			style: 'position:absolute;left:14px;top:254px;width:252px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Погашать с:',
			style: 'position:absolute;left:14px;top:182px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокПогашения',
			style: 'position:absolute;left:405px;top:182px;width:40px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:534px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:407px;width:534px;height:25px;',
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
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:174px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:81px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'месяцев',
			style: 'position:absolute;left:447px;top:182px;width:47px;height:19px;text-align:left;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Ежемесячно',
			style: 'position:absolute;left:221px;top:182px;width:86px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'По истечении',
			style: 'position:absolute;left:308px;top:182px;width:95px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ИнфНадписьКурса',
			text: '(10000 TRL = 6500 руб.)',
			style: 'position:absolute;left:360px;top:155px;width:166px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Счет учета %%:',
			style: 'position:absolute;left:14px;top:281px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаПроцентовПоЗайму',
			style: 'position:absolute;left:94px;top:281px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:14px;top:305px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто1',
			style: 'position:absolute;left:94px;top:305px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:14px;top:329px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто2',
			style: 'position:absolute;left:94px;top:329px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконто3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:14px;top:353px;width:78px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто3',
			style: 'position:absolute;left:94px;top:353px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНалогообложенияРезидента',
			style: 'position:absolute;left:268px;top:254px;width:46px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:94px;top:182px;width:120px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:334px;top:33px;width:192px;height:67px;',
			height: 67,width: 192,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'radio',
			boxLabel: 'Управленческий',
			style: 'position:absolute;left:8px;top:48px;width:112px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Бухгалтерский',
			style: 'position:absolute;left:8px;top:24px;width:112px;height:19px;',
		},
					]
				},
			]
		},
	]
});