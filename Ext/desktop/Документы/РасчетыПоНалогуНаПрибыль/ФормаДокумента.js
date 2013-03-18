Ext.define('Документы.РасчетыПоНалогуНаПрибыль.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:431px;height:314px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Расчеты по налогу на прибыль',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:155px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:258px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:258px;width:327px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:83px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:83px;width:327px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:234px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:234px;width:327px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:431px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:289px;width:431px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
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
			name: 'Надпись6',
			text: 'Месяц расчета:',
			style: 'position:absolute;left:8px;top:58px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:96px;top:58px;width:131px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: '',
			style: 'position:absolute;left:8px;top:109px;width:415px;height:30px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Ввод остатков по отложенным налоговым активам и обязательствам в корреспонденции со счетом 000 "Вспомогательный"',
			style: 'position:absolute;left:8px;top:144px;width:415px;height:35px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Ввод остатков по отложенным налоговым активам и обязательствам в корреспонденции со счетом 84 "Нераспределенная прибыль (непокрытый убыток)"',
			style: 'position:absolute;left:8px;top:179px;width:415px;height:43px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Ввод остатков по отложенным налоговым активам и обязательствам по расчетам в у.е.',
			style: 'position:absolute;left:8px;top:183px;width:415px;height:39px;',
		},
	]
});